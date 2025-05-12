---
sidebar_position: 40
---
# Change App Version

## Android Version Update

1. Go to `pubspec.yaml`
2. Update version: A.B.C+X in pubspec.yaml
3. For Android:
   - A.B.C represents the versionName (e.g., 1.0.0)
   - X (the number after the +) represents the versionCode (e.g., 1, 2, 3)
4. For iOS:
   - A.B.C represents the CFBundleShortVersionString (e.g., 1.0.0)
   - X (the number after the +) represents the CFBundleVersion (e.g., 1, 2, 3)
5. After updating, run one of these commands:
   ```bash
   flutter packages get
   flutter build
   flutter run
   ```