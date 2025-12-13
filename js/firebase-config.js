// Firebase Configuration
// =====================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (e.g., "FIREBASE_PROJECT_ID")
// 3. Go to Build > Realtime Database > Create Database
// 4. Select region (europe-west1 for France) and start in test mode
// 5. Go to Project Settings > General > Your apps > Add web app
// 6. Copy the config values below

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "FIREBASE_API_KEY",

  authDomain: "FIREBASE_PROJECT_ID.firebaseapp.com",

  databaseURL: "https://FIREBASE_PROJECT_ID-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "FIREBASE_PROJECT_ID",

  storageBucket: "FIREBASE_PROJECT_ID.firebasestorage.app",

  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",

  appId: "1:FIREBASE_MESSAGING_SENDER_ID:web:0647cf010cd10b6bd8a343",

  measurementId: "FIREBASE_MEASUREMENT_ID"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Check if Firebase is configured
function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== "YOUR_API_KEY";
}
