# Security & Credentials Setup

## ⚠️ Important: Exposed Secrets Removed

The git history of this repository has been cleaned to remove previously exposed Firebase credentials. The commit hashes have changed. If you have local clones, please re-clone this repository.

## 📋 Environment Variables Setup

### For Local Development

1. **Copy the example file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your Firebase credentials**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to **Project Settings → Your apps → Web app**
   - Copy the configuration values into `.env.local`

3. **Never commit `.env.local`** - it's in `.gitignore`

### For GitHub Actions / CI/CD

Add these secrets to your GitHub repository:
1. Go to **Settings → Secrets and variables → Actions**
2. Add the following secrets:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_DATABASE_URL`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`

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
   - `https://yourdomain.com/*`
   - `http://localhost:*` (for local development)

### 3. Enable Two-Factor Authentication

Protect your Firebase project account with 2FA on Google Account.

## ✅ Verification Checklist

- [ ] All environment variables are set up
- [ ] Firebase Security Rules are configured for your environment
- [ ] API keys are restricted to your domain(s)
- [ ] `.env.local` is in `.gitignore` and never committed
- [ ] Sensitive data is only stored in GitHub Secrets (CI/CD)
- [ ] You've verified no secrets appear in `git log`

## 🧪 Testing

To verify the environment setup:

```bash
# Check if environment variables are accessible
node -e "console.log(process.env.FIREBASE_API_KEY ? 'Configured ✓' : 'Missing ✗')"
```

## 📚 Resources

- [Firebase Security Documentation](https://firebase.google.com/docs/database/security)
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [12 Factor App - Environment Variables](https://12factor.net/config)
