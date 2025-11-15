---
sidebar_position: 90
---
# Firebase Settings

Please visit our [Firebase Setup Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase) for comprehensive instructions on Firebase configuration.

### Firebase Configuration in app code

1. If you havent't created firebase apps thtough firebase CLI then dont forget to edit the `lib/firebase_options.dart` file and add your firebase configurations. (you can find the relevant values from your firebase project and firebase json files you have added in android and ios folder)

2. You need to create only one firebase project for all 3 apps (Customer, Seller and Deliveryboy). Just create different apps inside same firebase project.