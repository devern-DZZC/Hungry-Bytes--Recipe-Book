import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCkmW8LWmDzP0QUTQ1RA3lAGb8G8V3P8GE",
  authDomain: "hungry-bytes-cabc1.firebaseapp.com",
  projectId: "hungry-bytes-cabc1",
  storageBucket: "hungry-bytes-cabc1.appspot.com",
  messagingSenderId: "956134518625",
  appId: "1:956134518625:web:77e50edaf854596b3adf20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById('button');
submit.addEventListener("click", function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Created Account Successful!');
    window.location.href = "index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Sign Up Failed!');
    // ..
  });
})