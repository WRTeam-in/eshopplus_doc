---
sidebar_position: 30
---
# Change App Logo

This guide explains how to change your app's icon using the `flutter_launcher_icons` package.

## Prerequisites

The app already includes `flutter_launcher_icons` package in `pubspec.yaml`:

```yaml
dev_dependencies:
  flutter_launcher_icons: 0.14.4
```

## Step 1: Prepare Your Icon Images

You need to prepare two icon images:

### 1. Main App Icon (`ic_launcher.png`)
- **Format:** PNG
- **Size:** 512x512 pixels (recommended)
- **Background:** Include your desired background color in the image
- **Usage:** This will be used as the base icon for both Android and iOS

### 2. Transparent Icon (`ic_launcher_transparent.png`)
- **Format:** PNG with transparency
- **Size:** 512x512 pixels (recommended)
- **Background:** Transparent (no background)
- **Usage:** This will be used as the foreground layer for Android adaptive icons

## Step 2: Place Your Icons

Copy your prepared icon files to the following location:

```
assets/images/branding/
├── ic_launcher.png
└── ic_launcher_transparent.png
```

Replace the existing files with your custom icons.

## Step 3: Configure Icon Background Color

Open `pubspec.yaml` and locate the `flutter_launcher_icons` configuration section (around line 76):

```yaml
flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/images/branding/ic_launcher.png"
  adaptive_icon_foreground: "assets/images/branding/ic_launcher_transparent.png"
  adaptive_icon_background: "#B52046"  # Change this to your brand color
  remove_alpha_ios: true
  background_color_ios: "#B52046"      # Change this to your brand color
```

### Key Configuration Options:

- **`adaptive_icon_background`**: Background color for Android adaptive icons (hex color code)
- **`background_color_ios`**: Background color for iOS icons (hex color code)
- **`remove_alpha_ios`**: Set to `true` (required by Apple App Store)

**Important:** Replace `#B52046` with your brand's primary color in hex format (e.g., `#FF5733`).

## Step 4: Generate Icons

After placing your icons and updating the configuration, run the following commands:

```bash
# Install dependencies
flutter pub get

# Generate app icons
flutter pub run flutter_launcher_icons
```

This command will automatically generate all required icon sizes for both Android and iOS platforms:

### Generated Files:

**Android:**
- Multiple density variants: ldpi, mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi
- Adaptive icon foreground layers
- Adaptive icon background configuration

**iOS:**
- All required sizes in `ios/Runner/Assets.xcassets/AppIcon.appiconset/`
- Format: PNG (automatically converted from source)

## Step 5: Verify Changes

1. **Check Android icons:**
   - Navigate to `android/app/src/main/res/`
   - Verify that icons are generated in all `mipmap-*` folders

2. **Check iOS icons:**
   - Navigate to `ios/Runner/Assets.xcassets/AppIcon.appiconset/`
   - Verify all icon sizes are present

3. **Test on device:**
   ```bash
   flutter clean
   flutter run
   ```



## Troubleshooting

**Icons not updating after generation:**
```bash
flutter clean
flutter pub get
flutter pub run flutter_launcher_icons
flutter run
```

**iOS icons not appearing:**
- Make sure `remove_alpha_ios: true` is set
- Clean and rebuild the iOS project in Xcode

**Android adaptive icons not working:**
- Verify both `ic_launcher.png` and `ic_launcher_transparent.png` exist
- Check that `adaptive_icon_background` is a valid hex color

## Additional Resources

For more advanced configurations, visit the [flutter_launcher_icons documentation](https://pub.dev/packages/flutter_launcher_icons).
