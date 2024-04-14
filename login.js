// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAjZPxs8HXVbOn-WdHZi2NqMiWsUo2F7lA",
  authDomain: "hungry-bytes-recipe-book-c8457.firebaseapp.com",
  databaseURL: "https://hungry-bytes-recipe-book-c8457-default-rtdb.firebaseio.com",
  projectId: "hungry-bytes-recipe-book-c8457",
  storageBucket: "hungry-bytes-recipe-book-c8457.appspot.com",
  messagingSenderId: "455884248302",
  appId: "1:455884248302:web:931200507947d195ed4fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById('button');
submit.addEventListener("click", function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Sign In Successful!');
    window.location.href = "index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Incorrect Password!');
    // ..
  });
})