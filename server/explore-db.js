import mongoose from 'mongoose';
import connectDb from './configs/db.js';
import Resume from './models/resume.js';
import User from './models/user.js';
import 'dotenv/config';

async function explore() {
  try {
    await connectDb();
    console.log("Connected to MongoDB!");
    
    const userCount = await User.countDocuments();
    console.log("Total users:", userCount);
    
    const resumeCount = await Resume.countDocuments();
    console.log("Total resumes:", resumeCount);
    
    if (resumeCount > 0) {
      const sampleResume = await Resume.findOne();
      console.log("Sample Resume Details:");
      console.log("- ID:", sampleResume._id);
      console.log("- User ID:", sampleResume.userId);
      console.log("- Title:", sampleResume.title);
      console.log("- Personal Info:", JSON.stringify(sampleResume.personal_info));
    } else {
      console.log("No resumes found in the database.");
    }
    
  } catch (error) {
    console.error("Exploration failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

explore();
