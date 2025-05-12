---
sidebar_position: 250
---
# Configure Force Update

If you want to force users to update to the latest app version, you can enable the Force Update feature in the admin panel.

1. **Go to admin panel:**
   - Navigate to Settings -> System Settings -> App Settings
   - Enable Version System Status

   ![Force Update Step 1](./img/forceUpdate1.png)

2. **Get the version number:**
   - In your app code, go to `pubspec.yaml`
   - Copy the version number of the application

   ![Force Update Step 2](./img/forceUpdate2.png)

3. **Configure versions:**
   - Enter the copied version number into Android and iOS Version fields
   - Note: If you have different versions for Android and iOS apps, enter the version numbers accordingly
   - Repeat this process for Customer, Seller, and Delivery Boy apps

   ![Force Update Step 3](./img/forceUpdate3.png)