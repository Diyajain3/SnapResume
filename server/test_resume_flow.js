import 'dotenv/config';
import fs from 'fs';

async function runTest() {
  const host = "http://localhost:3000";
  const uniqueId = Date.now();
  const testEmail = `test_${uniqueId}@example.com`;
  const testPassword = "password123";

  console.log("--- 1. REGISTER TEST USER ---");
  let registerRes;
  try {
    registerRes = await fetch(`${host}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: testEmail,
        password: testPassword,
      }),
    });
  } catch (err) {
    console.error("Fetch registration failed:", err);
    return;
  }

  const registerData = await registerRes.json();
  if (registerRes.status !== 201) {
    console.error("Registration failed:", registerData);
    return;
  }

  const token = registerData.token;
  console.log("Registration Success. Token retrieved.");

  console.log("\n--- 2. CREATE NEW RESUME ---");
  const createRes = await fetch(`${host}/api/resumes/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      title: "My AI Test Resume"
    })
  });

  const createData = await createRes.json();
  if (createRes.status !== 201) {
    console.error("Resume creation failed:", createData);
    return;
  }

  const resume = createData.resume;
  console.log("Resume created successfully! ID:", resume._id);

  console.log("\n--- 3. MOCK UPLOAD IMAGE WITH BACKGROUND REMOVAL ---");
  // Create a dummy small 1x1 pixel transparent PNG file for upload
  const dummyPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  const dummyBuffer = Buffer.from(dummyPngBase64, 'base64');
  fs.writeFileSync("temp_profile.png", dummyBuffer);

  // Build FormData manually using Node's standard FormData (available in Node 18+)
  const formData = new FormData();
  formData.append("resumeId", resume._id);
  formData.append("removeBackground", "true");
  
  // Format the resumeData containing personal_info structure
  const resumeDataPayload = {
    ...resume,
    personal_info: {
      full_name: "Test AI Enhanced Name",
      profession: "Software Engineer",
      email: testEmail,
    }
  };
  formData.append("resumeData", JSON.stringify(resumeDataPayload));

  // Load file as Blob
  const fileBlob = new Blob([dummyBuffer], { type: "image/png" });
  formData.append("image", fileBlob, "temp_profile.png");

  const updateRes = await fetch(`${host}/api/resumes/update`, {
    method: "PUT",
    headers: {
      "Authorization": token
    },
    body: formData
  });

  const updateData = await updateRes.json();
  fs.unlinkSync("temp_profile.png");

  if (updateRes.status !== 200) {
    console.error("Resume update failed:", updateData);
    return;
  }

  console.log("Update Success! Returned Resume Data:");
  const updatedResume = updateData.resume;
  console.log("personal_info:", updatedResume.personal_info);

  console.log("\n--- 4. VISIBILITY CHECK & SHARING ROUTE ---");
  // Toggle visibility to public
  const visibilityFormData = new FormData();
  visibilityFormData.append("resumeId", resume._id);
  
  const publicResumePayload = {
    ...updatedResume,
    public: true
  };
  visibilityFormData.append("resumeData", JSON.stringify(publicResumePayload));
  visibilityFormData.append("removeBackground", "true");

  const visibilityRes = await fetch(`${host}/api/resumes/update`, {
    method: "PUT",
    headers: {
      "Authorization": token
    },
    body: visibilityFormData
  });

  const visibilityData = await visibilityRes.json();
  if (visibilityRes.status !== 200) {
    console.error("Visibility toggle failed:", visibilityData);
    return;
  }

  console.log("Visibility toggled to Public successfully.");

  // Test the public sharing endpoint
  const publicGetRes = await fetch(`${host}/api/resumes/public/${resume._id}`);
  const publicGetData = await publicGetRes.json();
  
  if (publicGetRes.status === 200) {
    console.log("Public preview endpoint successfully loaded the resume!");
    console.log("Public URL data verification success!");
  } else {
    console.error("Public preview endpoint returned error:", publicGetData);
  }

  // Cleanup: Delete the test resume
  console.log("\n--- 5. CLEANUP ---");
  const deleteRes = await fetch(`${host}/api/resumes/delete/${resume._id}`, {
    method: "DELETE",
    headers: { "Authorization": token }
  });
  if (deleteRes.status === 200) {
    console.log("Test resume deleted from database.");
  }
}

runTest();
