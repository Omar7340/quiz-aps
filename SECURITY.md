# Security Configuration

## Firebase Credentials Approach

This project uses a **simple approach** for Firebase configuration:

- Firebase credentials are stored in `js/config.js` (committed to the repository)
- Security is enforced via **Firebase Console API key restrictions** and **Database Security Rules**

This approach is suitable for this static site hosted on GitHub Pages.

## Required: Firebase Console Configuration

### 1. Restrict API Key (Required)

Go to [Firebase Console](https://console.firebase.google.com/) and restrict your API key:

1. **Project Settings > API keys**
2. Click on your **Web API key**
3. Under **Application restrictions**, select **HTTP referrers**
4. Add your authorized domains:
   - `https://omar7340.github.io/*` (GitHub Pages)
   - `http://localhost:*` (local development)

### 2. Database Security Rules (Recommended)

Configure Firebase Realtime Database rules to protect your data:

**Basic rules for live quiz:**
```json
{
  "rules": {
    "sessions": {
      "$sessionId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

**More restrictive (if using authentication):**
```json
{
  "rules": {
    "sessions": {
      "$sessionId": {
        ".read": true,
        ".write": "auth != null"
      }
    }
  }
}
```

## Local Development

1. Clone the repository
2. Firebase credentials are already in `js/config.js`
3. Open `index.html` in a browser or run `python -m http.server 8000`

## Updating Firebase Credentials

If you need to use different Firebase credentials:

1. Edit `js/config.js` with your new credentials
2. Update API key restrictions in Firebase Console for your domain
3. Commit and push

## Resources

- [Firebase Security Documentation](https://firebase.google.com/docs/database/security)
- [API Key Restrictions](https://cloud.google.com/docs/authentication/api-keys#securing_an_api_key)
