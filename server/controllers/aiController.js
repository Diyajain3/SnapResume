//controller for enhancing a resume professional summary
//POST: /api/ai/enhance-pro-sum
import ai from "../configs/ai.js";
import Resume from "../models/resume.js";

const handleAIError = (error, res) => {
  console.error("AI Controller Error:", error);
  
  if (error.status === 429 || error.message?.includes("429")) {
    return res.status(429).json({
      success: false,
      message: "AI Rate Limit Exceeded: The API key has reached its daily or per-minute limit. Please try again in a few minutes.",
    });
  }

  if (error.status === 401 || error.message?.includes("401")) {
    return res.status(401).json({
      success: false,
      message: "AI Authentication Failed: The API key is invalid or has expired.",
    });
  }

  return res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
};

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({
        message: "Missing required field",
      });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,

      messages: [
        {
          role: "system",
          content: `
You are an expert resume writer, ATS optimization specialist, and career coach.

Your task is to enhance the user's professional summary and transform it into a polished, impactful, and recruiter-friendly version.

Guidelines:
- Write in a professional and confident tone.
- Improve grammar, clarity, readability, and sentence structure.
- Make the summary ATS-friendly using relevant keywords.
- Highlight:
  • technical skills
  • strengths
  • achievements
  • experience
  • leadership qualities
  • career goals
- Keep the summary concise but impactful.
- Use strong action-oriented words.
- Do NOT add fake information or achievements.
- Tailor the summary according to the user's experience level:
    • Students/Freshers → focus on skills, projects, internships, and learning attitude.
    • Experienced professionals → focus on impact, achievements, and expertise.
- Return only the enhanced professional summary text.
- Do not include headings, bullet points, explanations, or multiple options unless asked.

The final output should sound modern, professional, and suitable for top companies.
          `,
        },

        {
          role: "user",
          content: userContent,
        },
      ],
    });

    const enhancedContent = response.choices[0].message.content;

    return res.status(200).json({
      success: true,
      enhancedContent,
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};

//controller for uploading a resume to database
//POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const systemPrompt =
      "You are an expert AI Agent to extract fdata from resume.";
    const userPrompt = `extract data from this resume: ${resumeText} 
   
   Provide data in the following JSOn format with no additional text before or after:

   professional_summary: {
      type: String
    },

    skills: [
      {
        type: String,
      },
    ],

    personal_info: {
      image: {
        type: String
      },

      full_name: {
        type: String
      },

      profession: {
        type: String
      },

      email: {
        type: String
      },

      phone: {
        type: String
      },

      location: {
        type: String
      },

      linkedin: {
        type: String
      },

      website: {
        type: String,
      },
    },

    experience: [
      {
        company: {
          type: String,
          
        },

        position: {
          type: String,
          
        },

        start_date: {
          type: String,
          
        },

        end_date: {
          type: String,
          
        },

        description: {
          type: String,
        
        },

        is_current: {
          type: Boolean,
          
        },
      },
    ],

    projects: [
      {
        name: {
          type: String,
        
        },

        type: {
          type: String,
          
        },

        description: {
          type: String,
       
        },
      },
    ],

    education: [
      {
        institution: {
          type: String,
          
        },

        degree: {
          type: String,
         
        },

        field: {
          type: String,
          
        },

        graduation_date: {
          type: String,
         
        },

        gpa: {
          type: String
       },
      },
    ],
  },
   `;
    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },

        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format: { type: "json_object" },
    });

    const extractedData = response.choices[0].message.content;
    const parsedData = JSON.parse(extractedData);
    const newResume = await Resume.create({ userId, title, ...parsedData });
    res.json({
      resumeId: newResume._id, //when we will create new resume we will send resume id in response
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};

//controller for enhancing a resume job dexcription
//POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({
        message: "Missing required field",
      });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,

      messages: [
        {
          role: "system",

          content: `
You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should: - Be professional and ATS-friendly - Highlight key responsibilities and achievements - Use strong action verbs - Include measurable impact whenever possible - Be concise and clear Only return the enhanced job description text.
`,
        },

        {
          role: "user",
          content: userContent,
        },
      ],
    });

    const enhancedContent = response.choices[0].message.content;

    return res.status(200).json({
      success: true,
      enhancedContent,
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};