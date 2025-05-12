---
sidebar_position: 260
---
# Run This App

To run the application, follow these steps:

## Run Android App 

1. Open your terminal

2. Navigate to your project directory:
```bash
cd path/to/your/project
```

3. Run the application:
```bash
flutter run
```

4. Select the device to run the app on:
   - Physical device (connected via USB)
   - Emulator/Simulator


5. The app will be built and launched on the selected device

Note: Make sure you have:
- Flutter SDK installed
- Android Studio or Xcode (for IOS) installed
- Device/emulator connected and ready
- All dependencies installed (`flutter pub get`)

## Run IOS App

1. Open your terminal
2. Navigate to your project directory:
```bash
cd path/to/your/project
```

3. Install pods
```bash
cd ios
pod install
```

4. If you face any issues with pods, try running the following command inside ios folder: 
```bash
rm -rf Podfile.lock Pods .symlinks
pod install --repo-update
```


5. Select the device to run the app on:
   - Physical device (connected via USB)
   - Emulator/Simulator
   - iOS Simulator
   - iPad
   - iPhone
   