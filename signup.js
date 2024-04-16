import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBvw-tH8dOrprAsyNbWjhR_DY8ZGsfoo-Q",
  authDomain: "hungry-bytes-fec44.firebaseapp.com",
  projectId: "hungry-bytes-fec44",
  storageBucket: "hungry-bytes-fec44.appspot.com",
  messagingSenderId: "529821800430",
  appId: "1:529821800430:web:3f3fbc6147e6da7ff720ff"
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