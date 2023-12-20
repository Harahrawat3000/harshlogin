// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDGiBAQdCuQMmmON0q6fQO4JUaAD9FLAiY",
    authDomain: "authentication-9a9d2.firebaseapp.com",
    projectId: "authentication-9a9d2",
    storageBucket: "authentication-9a9d2.appspot.com",
    messagingSenderId: "1016916313144",
    appId: "1:1016916313144:web:e581a2a1bb99a5f3c6d2cd",
    measurementId: "G-P57WX61820"
   };
   
   firebase.initializeApp(firebaseConfig);
   
   function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   
    firebase.auth().signInWithEmailAndPassword(email, password)
       .then((userCredential) => {
         // Signed in successfully
         console.log('Login Successful');
         window.location.href = "home.html"; // redirect to home page
       })
       .catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorMessage);
       });
   }