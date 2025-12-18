//singup

// Firebase Init
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4NhwvaYbD_sDYRh1XcFi9n1cYGZS5_DI",
  authDomain: "hevs-e904b.firebaseapp.com",
  projectId: "hevs-e904b",
  storageBucket: "hevs-e904b.firebasestorage.app",
  messagingSenderId: "1082031435548",
  appId: "1:1082031435548:web:a869b10c110572b3dd54d9",
});

const auth = firebase.auth();

// SIGN IN FUNCTION
function SignIn(event) {
  event.preventDefault(); // 🚨 STOP default form submit

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      alert("Login Successful!");
      window.location.href = "./dashboard.html"; // ✅ Redirect only on success
    })
    .catch((error) => {
      alert(error.message); // ❌ Stay on same page if error
      console.log(error.code);
    });
}

// SINEUP FUNCTION
function SignUp(event) {
  event.preventDefault(); // 🚫 Stop form auto submit

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert("Account created successfully!");
      console.log(result);
      window.location.href = "./login.html"; // ✅ Redirect after success
    })
    .catch((error) => {
      alert(error.message); // ❌ Show error, no redirect
      console.log(error.code);
    });
}
