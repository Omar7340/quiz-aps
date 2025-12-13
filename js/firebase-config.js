// Firebase Configuration
// =====================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project
// 3. Go to Build > Realtime Database > Create Database
// 4. Select region (europe-west1 for France) and start in test mode
// 5. Go to Project Settings > General > Your apps > Add web app
// 6. For local development: Copy config.js.example to config.js and fill in your credentials
// 7. For GitHub Pages: Add the credentials as GitHub repository secrets

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Load configuration from global window object or use defaults
// This allows flexibility: config can come from external file, GitHub Actions, or environment
let firebaseConfig = {};

// Try to load from window.firebaseConfig (set by external config file or build process)
if (typeof window !== 'undefined' && window.firebaseConfig) {
    firebaseConfig = window.firebaseConfig;
} else {
    // Fallback: Use environment variables if available (for build processes)
    const getEnv = (key) => {
        if (typeof process !== 'undefined' && process.env) {
            return process.env[key];
        }
        return undefined;
    };

    firebaseConfig = {
        apiKey: getEnv('FIREBASE_API_KEY'),
        authDomain: getEnv('FIREBASE_AUTH_DOMAIN'),
        databaseURL: getEnv('FIREBASE_DATABASE_URL'),
        projectId: getEnv('FIREBASE_PROJECT_ID'),
        storageBucket: getEnv('FIREBASE_STORAGE_BUCKET'),
        messagingSenderId: getEnv('FIREBASE_MESSAGING_SENDER_ID'),
        appId: getEnv('FIREBASE_APP_ID'),
        measurementId: getEnv('FIREBASE_MEASUREMENT_ID')
    };
}

// Initialize Firebase only if properly configured
function isFirebaseConfigured() {
    return firebaseConfig && firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";
}

// Initialize Firebase only if it's configured
if (isFirebaseConfigured()) {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
} else {
    console.warn('Firebase is not configured. Please set your Firebase credentials.');
    console.warn('For local development, create js/config.js with your Firebase config.');
    console.warn('For GitHub Pages, ensure credentials are injected via build process or GitHub Actions.');
}
