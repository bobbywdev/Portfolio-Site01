  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyBoRvRf2W6O7dkYmjTCVHg9i4A_jQkcjss",
    authDomain: "web110final.firebaseapp.com",
    projectId: "web110final",

  });

  // Initialize Firebase


    
const db = firebase.firestore() // that initializes the database for usage


  

function test(){
  let counter = 1
     let name = document.getElementById("formName").value
        let email = document.getElementById("formEmail").value
           let message = document.getElementById("formMsg").value
  
  db.collection("messages").doc(name).set({
  name: name,
  email: email,
  message: message
  
  });
}

