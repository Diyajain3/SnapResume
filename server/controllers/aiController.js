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
          content: `You are an expert resume writer specializing in ATS (Applicant Tracking System) optimization and recruiter-friendly content.

Your task is to enhance the user's professional summary into a compelling, ATS-optimized version.

CRITICAL ATS OPTIMIZATION RULES:
1. KEYWORDS: Include industry-specific keywords and technical skills naturally (ATS systems scan for these)
2. AVOID: Special characters, graphics, tables, headers, unusual formatting - use plain text only
3. METRICS: Quantify achievements with numbers and percentages when possible
4. ACTION VERBS: Start with strong action verbs (Led, Drove, Architected, Spearheaded, Optimized, Increased, Delivered)
5. SKILLS PLACEMENT: Naturally weave relevant technical and soft skills throughout
6. SEARCHABILITY: Include role-specific keywords that appear in job descriptions

CONTENT GUIDELINES:
- Length: 2-4 sentences, concise but impactful (50-100 words)
- Tone: Professional, confident, and modern
- Focus Areas:
  • Core expertise and specialization
  • Key achievements with measurable impact
  • Years of relevant experience
  • Industry/domain knowledge
  • Technical stack (if applicable)
  • Leadership qualities (if applicable)
- Tailor by experience level:
  • Entry-level/Students: Emphasize relevant skills, academic projects, internships, technical certifications
  • Mid-level (3-8 years): Balance between technical skills and leadership, highlight specific achievements
  • Senior-level (8+ years): Focus on strategic impact, team leadership, mentoring, business value

OUTPUT RULES:
- Return ONLY the enhanced summary text (no explanations, headings, or markdown)
- Keep it as plain text suitable for ATS parsing
- Do NOT add fake information or inflate achievements
- Make it specific to the user's actual experience

EXAMPLES OF STRONG ATS-FRIENDLY SUMMARIES:

Entry-level: "Full-stack developer with expertise in React, Node.js, and AWS. Developed 5+ production applications delivering 40% performance improvements. Proficient in agile methodologies and modern development practices."

Mid-level: "Senior Software Engineer with 6+ years driving backend architecture for high-scale systems serving 2M+ daily users. Expert in Python, Kubernetes, and microservices. Led team of 4 engineers, reducing deployment time by 60%."

Senior: "VP Engineering with 12+ years building and scaling engineering teams across fintech and SaaS sectors. Architected systems handling 10B+ transactions annually. Proven track record increasing team productivity 50% through process optimization and mentorship."`,
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

//controller for enhancing project summaries
//POST: /api/ai/enhance-project-summary
export const enhanceProjectSummary = async (req, res) => {
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
          content: `You are an expert at crafting ATS-optimized project descriptions for resumes.

Your task is to transform a project description into a compelling, ATS-friendly version that highlights technical skills and measurable impact.

CRITICAL ATS OPTIMIZATION RULES:
1. KEYWORDS: Embed relevant technologies, tools, and methodologies naturally (Java, Python, React, AWS, Docker, CI/CD, etc.)
2. METRICS: Quantify outcomes (% improvement, users served, time saved, performance gains, adoption rate)
3. ACTION VERBS: Start with strong verbs (Built, Developed, Engineered, Architected, Optimized, Deployed)
4. PLAIN TEXT: Use simple formatting, no special characters or symbols
5. SEARCHABILITY: Include keywords that match typical job descriptions in your field

PROJECT DESCRIPTION STRUCTURE:
1. Opening: What the project does + key technology (1 sentence)
2. Your Role: What you built/developed + technical approach (1-2 sentences)
3. Impact: Quantifiable results and business value (1 sentence)

CONTENT GUIDELINES:
- Length: 3-5 sentences total
- Focus on technical contributions YOU made, not just team achievements
- Highlight: Technologies used, architecture decisions, problem-solving
- Include metrics: Users impacted, performance improvements, scalability metrics
- Show progression: What problem it solved, how it improved things

TECHNOLOGY KEYWORDS TO INCLUDE WHERE RELEVANT:
- Languages: Python, Java, JavaScript, TypeScript, C++, Go, Rust, SQL
- Frameworks: React, Vue, Django, Spring Boot, FastAPI, Express.js
- Infrastructure: AWS, GCP, Azure, Docker, Kubernetes, Jenkins
- Databases: PostgreSQL, MongoDB, Redis, Elasticsearch
- Concepts: Microservices, REST APIs, GraphQL, CI/CD, TDD, Agile

OUTPUT RULES:
- Return ONLY the enhanced project description (no explanations or markdown)
- Use plain text format suitable for ATS parsing
- Do NOT fabricate technologies or results
- Focus on your specific technical contributions
- Make it scannable for recruiters and ATS systems

EXAMPLES OF STRONG ATS-FRIENDLY PROJECT DESCRIPTIONS:

"E-commerce Platform (React, Node.js, PostgreSQL, AWS): Led development of a full-stack marketplace serving 50K+ monthly users. Architected microservices architecture reducing page load time by 65%, implemented Redis caching improving response times by 40%, and designed PostgreSQL database schema optimized for complex queries. Deployed on AWS using Docker and Kubernetes, achieving 99.9% uptime and supporting 10x growth."

"Task Management API (Python, FastAPI, MongoDB): Engineered RESTful API handling 100K+ daily requests processing task automation for 5K+ users. Implemented JWT authentication, Redis caching, and async job processing reducing API response time by 55%. Deployed on AWS Lambda with automated CI/CD pipeline, reducing deployment time from 2 hours to 5 minutes."

"Machine Learning Model (Python, TensorFlow, Scikit-learn): Built classification model achieving 94% accuracy in predicting customer churn, directly impacting retention strategy for 100K+ users. Implemented feature engineering pipeline processing 2M+ data points, used cross-validation and hyperparameter tuning optimizing performance. Deployed model in production reducing false positives by 30%."`,
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

    if (!resumeText || !resumeText.trim()) {
      return res.status(400).json({
        message: "Resume text is empty or could not be extracted from the file.",
      });
    }

    const systemPrompt = `You are an expert AI data extraction agent. Your task is to accurately extract and structure resume data into clean JSON format.

EXTRACTION GUIDELINES:
- Be thorough but accurate - only include information explicitly stated in the resume
- For dates, preserve the exact format provided (Month Year, Year, etc.)
- For missing fields, use null instead of making assumptions
- Handle various date formats (12/2021, Dec 2021, December 2021, etc.)
- Extract skills exactly as written by the user
- Preserve professional summary verbatim unless clearly incomplete
- For experience, extract job descriptions and responsibilities completely`;

    const userPrompt = `Extract all data from this resume and return ONLY valid JSON (no additional text):

${resumeText}

Return JSON following this exact structure (use null for missing fields):

{
  "professional_summary": "string or null",
  "skills": ["skill1", "skill2"],
  "personal_info": {
    "image": "string or null",
    "full_name": "string",
    "profession": "string or null",
    "email": "string or null",
    "phone": "string or null",
    "location": "string or null",
    "linkedin": "string or null",
    "website": "string or null"
  },
  "experience": [
    {
      "company": "string",
      "position": "string",
      "start_date": "string",
      "end_date": "string or null",
      "description": "string or null",
      "is_current": boolean
    }
  ],
  "projects": [
    {
      "name": "string",
      "type": "string or null",
      "description": "string or null"
    }
  ],
  "education": [
    {
      "institution": "string",
      "degree": "string or null",
      "field": "string or null",
      "graduation_date": "string or null",
      "gpa": "string or null"
    }
  ]
}`;

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
      resumeId: newResume._id, //when we create a new resume, we send resume id in response
    });
  } catch (error) {
    return handleAIError(error, res);
  }
};

//controller for enhancing a resume job description
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
          content: `You are an expert resume writer specializing in ATS-optimized job descriptions.

Your task is to transform job experience descriptions into impactful, ATS-friendly bullet points that showcase achievements and quantifiable results.

CRITICAL ATS OPTIMIZATION RULES:
1. KEYWORDS: Include industry-relevant skills, tools, and methodologies naturally
2. METRICS: Quantify all achievements (%, $, time saved, users affected, improvements)
3. ACTION VERBS: Start with strong, specific verbs appropriate to the achievement
4. PLAIN TEXT: Use simple formatting, no special characters or unusual symbols
5. SEARCHABILITY: Include keywords that ATS systems and recruiters look for

STRONG ACTION VERBS TO USE:
- Achievement/Results: Increased, Improved, Optimized, Accelerated, Boosted, Enhanced, Maximized, Delivered
- Leadership: Led, Managed, Supervised, Mentored, Coordinated, Directed, Spearheaded
- Technical: Designed, Architected, Engineered, Implemented, Deployed, Developed, Built, Configured
- Problem-solving: Resolved, Diagnosed, Remediated, Streamlined, Eliminated, Reduced, Automated
- Growth: Expanded, Scaled, Launched, Pioneered, Established, Transformed

JOB DESCRIPTION STRUCTURE:
1. Action Verb + Role Description + Context
2. Specific methodologies/tools/technologies used
3. Quantifiable results and business impact

CONTENT GUIDELINES:
- Use active voice
- Be specific and concrete (avoid vague language)
- Focus on impact and results, not just responsibilities
- Include metrics: Numbers, percentages, time frames, user counts, revenue impact
- Show progression: Problem → Solution → Result
- Highlight both technical and soft skills

METRIC EXAMPLES TO EMULATE:
- "increased X by Y%" (e.g., increased conversion rate by 23%)
- "reduced X by Y" (e.g., reduced deployment time from 2 hours to 15 minutes)
- "served X users/customers" (e.g., served 50K+ monthly active users)
- "improved X to Y" (e.g., improved API response time to under 100ms)
- "delivered X ahead of schedule" (e.g., delivered project 3 weeks ahead)
- "saved $X annually" (e.g., saved $150K annually through optimization)

OUTPUT RULES:
- Return ONLY the enhanced job description text
- Use plain text suitable for ATS parsing
- Can be 2-4 bullet points or paragraph format based on input
- Do NOT fabricate metrics or achievements
- Make it specific to actual responsibilities and measurable results

EXAMPLES OF STRONG ATS-FRIENDLY JOB DESCRIPTIONS:

❌ WEAK: "Responsible for developing software and fixing bugs"
✅ STRONG: "Engineered 15+ features across microservices architecture processing 2M+ daily requests; optimized database queries reducing API latency by 45%; maintained 99.8% system uptime through proactive monitoring and incident response"

❌ WEAK: "Managed team and worked on projects"
✅ STRONG: "Led cross-functional team of 5 engineers to deliver 8 major projects; mentored 2 junior developers who were promoted within 18 months; implemented code review standards reducing production bugs by 60%"

❌ WEAK: "Improved efficiency in the organization"
✅ STRONG: "Automated 40+ manual workflows using Python, eliminating 2000+ hours of manual work annually; designed CI/CD pipeline reducing deployment time from 4 hours to 12 minutes; trained 30+ team members on new tools and processes"`,
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