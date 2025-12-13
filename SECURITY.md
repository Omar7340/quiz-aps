# Security & Credentials Setup

## ⚠️ Important: Exposed Secrets Removed

The git history of this repository has been cleaned to remove previously exposed Firebase credentials. The commit hashes have changed. If you have local clones, please re-clone this repository.

## 📋 Environment Variables Setup

### For Local Development

1. **Copy the example file**:
   ```bash
   cp js/config.js.example js/config.js
   ```

2. **Fill in your Firebase credentials**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to **Project Settings → Your apps → Web app**
   - Copy the configuration values into `js/config.js`

3. **Example `js/config.js`**:
   ```javascript
   window.firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "your-project.firebaseapp.com",
       databaseURL: "https://your-project-default-rtdb.region.firebasedatabase.app",
       projectId: "your-project-id",
       storageBucket: "your-project.firebasestorage.app",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id",
       measurementId: "your-measurement-id"
   };
   ```

4. **Never commit `js/config.js`** - it's in `.gitignore`

### For GitHub Pages / CI/CD

The GitHub Actions workflow automatically injects Firebase credentials from secrets:

1. Go to **Repository Settings → Secrets and variables → Actions**
2. Add the following secrets:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_DATABASE_URL`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`

3. The workflow will generate `js/config.js` during deployment with these values

## 🔒 Firebase Security Best Practices

### 1. Update Firebase Security Rules

**Test Mode (Development Only)**:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Production Mode (Recommended)**:
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "quizzes": {
      ".read": true
    }
  }
}
```

### 2. Restrict API Key

1. Go to **Firebase Console → Project Settings → API keys**
2. Click on your Web API key
3. Under **Application restrictions**, select **HTTP referrers**
4. Add your domain(s):
   - `https://yourdomain.github.io/*` (GitHub Pages)
   - `http://localhost/*` (local development)

### 3. Enable Two-Factor Authentication

Protect your Firebase project account with 2FA on your Google Account.

## ✅ Verification Checklist

- [ ] Firebase credentials are stored in GitHub Secrets (never in code)
- [ ] Local development uses `js/config.js` (not committed)
- [ ] Firebase Security Rules are configured for your environment
- [ ] API keys are restricted to your domain(s)
- [ ] `.gitignore` includes `js/config.js` and `.env*` files
- [ ] No secrets appear in `git log`
- [ ] GitHub Pages deployment works and loads Firebase correctly

## 🧪 Testing

To verify the environment setup locally:

1. **Create `js/config.js`** from `js/config.js.example`
2. **Fill in your credentials**
3. **Open the application** in your browser
4. **Check console** for Firebase initialization messages

If you see "Firebase is not configured", check that:
- `js/config.js` exists and has correct values
- Browser console doesn't show errors
- Firebase SDK scripts loaded successfully

## 📚 Resources

- [Firebase Security Documentation](https://firebase.google.com/docs/database/security)
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [12 Factor App - Environment Variables](https://12factor.net/config)
