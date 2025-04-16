// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elements
const authForm = document.getElementById('auth-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const statusMessage = document.getElementById('status-message');

// Login
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginBtn.disabled = true;
    statusMessage.textContent = 'Logging in...';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            statusMessage.textContent = 'Success! Redirecting...';
            window.location.href = 'tips.html';
        })
        .catch((error) => {
            statusMessage.textContent = 'Error: ' + error.message;
            loginBtn.disabled = false;
        });
});

// Sign Up
signupBtn.addEventListener('click', () => {
    signupBtn.disabled = true;
    statusMessage.textContent = 'Signing up...';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            statusMessage.textContent = 'Success! Redirecting...';
            window.location.href = 'tips.html';
        })
        .catch((error) => {
            statusMessage.textContent = 'Error: ' + error.message;
            signupBtn.disabled = false;
        });
});
