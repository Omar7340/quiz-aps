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

  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: process.env.FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.FIREBASE_DATABASE_URL,

  projectId: process.env.FIREBASE_PROJECT_ID,

  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.FIREBASE_APP_ID,

  measurementId: process.env.FIREBASE_MEASUREMENT_ID

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Check if Firebase is configured
function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== "YOUR_API_KEY";
}
