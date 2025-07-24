---
sidebar_position: 2
---

# FAQs

###  1. Why do I get a 'verification failed' error during signup?

If you encounter a **'verification failed'** error while signing up in eShop Plus, please check the following:

        1. **Enable Blaze Plan in Firebase:**
        - Go to your [Firebase Console](https://console.firebase.google.com/), select your project, and ensure you have upgraded to the **Blaze** (pay-as-you-go) plan. Phone authentication and some other features require this plan.

        2. **Add SHA Keys in Firebase App:**
        - Make sure you have added both **SHA-1** and **SHA-256** keys for your app in the Firebase project settings. This is required for authentication to work correctly, especially for phone and Google sign-in.
        - You can find instructions to get your SHA keys in the [Firebase documentation](https://firebase.google.com/docs/android/setup#generate-sha-1).

        3. **Check `firebase_options` File:**
        - Ensure your app's `lib/firebase_options.dart` (or `google-services.json` for Android / `GoogleService-Info.plist` for iOS) file is up to date and matches the configuration in your Firebase project.
        - If you recently made changes in Firebase, download the latest config file and replace the old one in your app.

        4. **Check SMS region in firebase:**
        - Ensure you have added your countries in which you want phone auhtentication to work in 'Allow' list in SMS region policy in firebase console as explained in App setup steps

        > **Tip:** After making these changes, clean and rebuild your app to ensure all updates are applied.

---
