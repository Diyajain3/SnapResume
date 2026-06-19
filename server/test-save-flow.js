import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import connectDb from './configs/db.js';
import Resume from './models/resume.js';
import { updateResume } from './controllers/resumeController.js';
import 'dotenv/config';

// Create a dummy 1x1 transparent PNG file to use for the upload test
const dummyPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const dummyImagePath = path.resolve("test-upload-temp.png");
fs.writeFileSync(dummyImagePath, Buffer.from(dummyPngBase64, 'base64'));

async function runTest() {
  try {
    await connectDb();
    console.log("Connected to MongoDB for integration testing!");

    const testResumeId = "6a326dba2f166b4c9d46496f";
    const testUserId = "6a326006da1b940312e3e72d";

    // 1. First test: Update resume with removeBackground = "true"
    console.log("\n--- Running Test 1: Uploading image with removeBackground = 'true' ---");
    
    // Mock express req, res, next objects
    const req = {
      userId: testUserId,
      body: {
        resumeId: testResumeId,
        removeBackground: "true",
        resumeData: JSON.stringify({
          personal_info: {
            full_name: "Integration Test User",
            email: "integration@test.com",
            phone: "1234567890",
            linkedin: "https://linkedin.com/in/test",
          }
        })
      },
      file: {
        path: dummyImagePath,
        originalname: "test-upload-temp.png",
        mimetype: "image/png"
      }
    };

    let responseStatus = null;
    let responseData = null;

    const res = {
      status: function(code) {
        responseStatus = code;
        return this;
      },
      json: function(data) {
        responseData = data;
        return this;
      }
    };

    // Recreate the temp file in case it was deleted by the controller in previous runs
    if (!fs.existsSync(dummyImagePath)) {
      fs.writeFileSync(dummyImagePath, Buffer.from(dummyPngBase64, 'base64'));
    }

    await updateResume(req, res);

    console.log("Controller Response Status:", responseStatus);
    console.log("Controller Response Data:", JSON.stringify(responseData));

    // Retrieve from database and verify
    let updatedResume = await Resume.findById(testResumeId);
    console.log("Database verification (Test 1):");
    console.log("- removeBackground is:", updatedResume.personal_info?.removeBackground);
    console.log("- image URL is:", updatedResume.personal_info?.image);

    if (updatedResume.personal_info?.removeBackground === true && updatedResume.personal_info?.image !== "") {
      console.log(">>> SUCCESS: Test 1 passed!");
    } else {
      console.error(">>> FAILURE: Test 1 failed!");
    }

    // 2. Second test: Update resume with removeBackground = "false"
    console.log("\n--- Running Test 2: Saving with removeBackground = 'false' ---");
    
    const req2 = {
      userId: testUserId,
      body: {
        resumeId: testResumeId,
        removeBackground: "false",
        resumeData: JSON.stringify({
          personal_info: {
            full_name: "Integration Test User Updated",
            email: "integration@test.com",
            phone: "1234567890",
            linkedin: "https://linkedin.com/in/test",
          }
        })
      }
    };

    await updateResume(req2, res);

    console.log("Controller Response Status:", responseStatus);
    
    // Retrieve from database and verify
    updatedResume = await Resume.findById(testResumeId);
    console.log("Database verification (Test 2):");
    console.log("- removeBackground is:", updatedResume.personal_info?.removeBackground);

    if (updatedResume.personal_info?.removeBackground === false) {
      console.log(">>> SUCCESS: Test 2 passed!");
    } else {
      console.error(">>> FAILURE: Test 2 failed!");
    }

  } catch (error) {
    console.error("Integration test encountered an error:", error);
  } finally {
    // Cleanup temporary image files
    if (fs.existsSync(dummyImagePath)) {
      fs.unlinkSync(dummyImagePath);
    }
    await mongoose.disconnect();
    console.log("\nDisconnected from MongoDB. Integration tests finished.");
  }
}

runTest();
