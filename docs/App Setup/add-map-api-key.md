---
sidebar_position: 180
---
# Add Map API Key for Address

To add Google Maps API key for address functionality, follow these steps:

1. Go to [Google Cloud Platform](https://cloud.google.com/)
   ![Google Cloud Console](./img/mapAPI1.png)

2. Select your Firebase Project
   ![Select Project](./img/mapAPI2.png)

3. Enable the following APIs:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Maps Embed API  
   - Geocoding API
   - Geolocation API
   ![Enable APIs](./img/mapAPI3.png)
   ![Enable APIs Step 2](./img/mapAPI4.png)
   ![API List](./img/mapAPI5.png)

4. Get your API keys from the Credentials tab
   ![API Keys](./img/mapAPI6.png)

5. Configure the API keys:

   For Android:
   - Open `android/app/src/main/AndroidManifest.xml`
   - Add the following in the application tag:
   ```xml
   <meta-data android:name="com.google.android.geo.API_KEY"
       android:value="YOUR_API_KEY_HERE" />
   ```
   ![Android Setup](./img/mapAPI7.png)

   For iOS:
   - Open `ios/Runner/AppDelegate.swift`
   - Add the following line:
   ```swift
   GMSServices.provideAPIKey("YOUR_API_KEY_HERE")
   ```
   ![iOS Setup](./img/mapAPI8.png) 

6. If you face issue in loading map, then you can check the following steps:
   - Open [Google Cloud Platform](https://cloud.google.com/)
   - Select your Firebase Project
   - Go to APIs & Services -> Credentials
   - Click on Edit key for Android and iOS
   - Then check in the `API key restrictions` section
   - If you see `Restrict key` then check the APIs you have enabled in first step are selected or not
   - If not then select them and save

   ![Google Cloud Platform](./img/mapAPI10.png)
   

   ![Google Cloud Platform](./img/mapAPI9.png)

   For Android key add APIs: 
   - Maps SDK for Android
   - Maps Embed API
   - Geocoding API
   - Geolocation API

   For iOS key add APIs:   
    - Maps SDK for iOS
    - Maps Embed API
    - Geocoding API
    - Geolocation API

   Note : After adding APIs, it may take some time to reflect in the platform.

   