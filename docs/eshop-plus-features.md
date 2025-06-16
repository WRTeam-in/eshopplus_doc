# Eshop Plus Features

## Stores
- If you have multiple businesses like grocery, pharmacy, furniture, or clothing, you can add multiple stores and manage them efficiently.
- You can define store colors, display styles for the web and app, and configure deliverability settings.
- You can check the deliverability flow here:[Product deliverability flow](https://docs.google.com/document/d/1khOpdQ2kfwd_cbX9b2GlxTkqMxA3NThl0oyj0kP4NsQ/edit?tab=t.0).
- Additionally, you can edit, activate, or deactivate a store as needed.
- The entire system is store-based, so adding a store is mandatory.

![Store Management Example](/img/feature/8__pastedGraphic.png)
![Store Color Settings](/img/feature/9__pastedGraphic.png)

---

## Orders

> Only sellers can ship orders. Admin has no rights to edit orders.

### 1. Seller Panel Overview
- In the Seller Panel, you'll notice two tabs: **Order Items** and **Shipments**.
- In the **Order Items** tab, you'll see all the items for your orders.
- In the **Shipments** tab, you'll find a "Create a Parcel" button and Created Parcels List.

![Seller Panel Tabs](/img/feature/pastedGraphic.png)

### 2. Create Parcel
To ship an order, click on the "Create a Parcel" button. You'll be able to select the items you want to ship and then create the parcel.

![Create Parcel](/img/feature/1__pastedGraphic.png)

### 3. Managing Parcels
Once a parcel is created, it will appear in a list with four action buttons:
- **View:** See the items inside the parcel.
- **Invoice:** View or download the invoice for the parcel.
- **Update Status:** Open a window to update the shipping status.
- **Delete:** You can delete a parcel, but only if it hasn't been shipped yet.

![Parcel Actions](/img/feature/2__pastedGraphic.png)

### 4. Updating Shipping Status
When you click **Update Status**, a window will open:
- **Local Shipping:** Select the delivery person and update the status.

![Update Status](/img/feature/3__pastedGraphic.png)

---

## Return Process
- Currently, the method for managing return parcels is manual.
- When a customer requests a return, the admin will receive the request, accept it, and mark the item as returned once the parcel is received.
- **Note:** Sellers cannot update the status for returns.

![Return Process](/img/feature/4__pastedGraphic.png)
![Return Process 2](/img/feature/5__pastedGraphic.png)


---

## Seller Process
- Sellers can select the categories in which they want to sell their products during registration.
- After registration, the seller is marked as not approved by default.
- The admin reviews the seller's details and selected categories.
- The admin can approve or reject the seller registration.
- The admin can also set a commission for the categories and also can add/remove categories from seller profile.



### How to assign categories to sellers?
1. Click on edit seller
![Return Process Example](/img/feature/6__pastedGraphic.png)
2. Add categories and commission and click on save and click on update
![Seller Registration](/img/feature/7__pastedGraphic.png)
There is a permission setting for sellers that requires product approval.
- If enabled, the seller's products will be marked as Not Approved by default.
- The admin will review, verify, and approve the products before they are available for sale.

#### Register the Same Seller in Multiple Stores
- A seller can register using the same personal details for different stores.
- There is an option to register a seller on a different store from the Seller App.
- This allows the same seller to sell their products across multiple stores.



---

## Seller Commission
1. Cron job must be set (For once in a day) on your server for seller commission to be work.
2. Cron job will run every midnight at 12:00 AM.
3. Formula for seller commission is: Sub total (Excluding delivery charge) / 100 * seller commission percentage
4. For example, sub total is 1378 and seller commission is 20% then 1378 / 100 X 20 = 275.6 so 1378 - 275.6 = 1102.4 will get credited into seller's wallet
5. If Order item's status is delivered then only the seller will get commission.
6. **Example 1:** Order placed on 11-Aug-21 and product return days are set to 0 so 11-Aug + 0 days = 11-Aug seller commission will get credited on 12-Aug-21 at 12:00 AM (Mid night)
7. **Example 2:** Order placed on 11-Aug-21 and product return days are set to 7 so 11-Aug + 7 days = 18-Aug seller commission will get credited on 19-Aug-21 at 12:00 AM (Mid night)
8. If the seller commission doesn't work, make sure the cron job is set properly and it is working. If you don't know how to set a cron job for once in a day please take help of server support or search for it.
- Or you can manually set commission from admin panel

![Multi-Store Seller](/img/feature/8__pastedGraphic.png)

---

## Stock Management
- While adding products and combo products, there is an option to select the Product Type.
![Multi-Store Seller](/img/feature/9__pastedGraphic.png)
- If it's a simple product, click on Enable Stock Management, add the details, and click Save Settings.
![Multi-Store Seller](/img/feature/10__pastedGraphic.png)
- If it's a variable product, there are two types of stock management:
  - **Product Level:** Sets the same stock for all variants.
  - **Variant Level:** Manages stock for each variant separately. While adding variants, there is an option to set stock for each variant.

![Stock Management](/img/feature/11__pastedGraphic.png)

---

## Cashback Coupon Process
- There is an option for cashback while adding a promo code.
![Multi-Store Seller](/img/feature/12__pastedGraphic.png)
- A cron job must be set up on your server for the promo code discount to work.
- The cron job runs every midnight at 12:00 AM.
- **Formula for Promo Code Discount:**
  - Subtotal (excluding delivery charges) - Promo code discount (percentage/amount)
- **Example:**
  - If the subtotal is 1300 and the promo code discount is 100, then: 1300 - 100 = 1200
  - 100 will be credited to the user's wallet.
- The promo code discount will be credited only if:
  - The order status is marked as delivered.
  - The return policy period has expired.
- **Example:**
  - Order placed on: 10-Sep-22
  - Return policy days: 1 day
  - Credit date: 11-Sep-22 at 12:00 AM (midnight)
- **Troubleshooting:**
  - If the promo code discount is not working, ensure the cron job is set up correctly.
  - If you're unsure how to set a cron job for once a day, seek help from server support or search online for guidance.



---

## Multi-Tax Option in Product Pricing
- There is an option for multi-tax while adding a product.
![Cashback Coupon Example](/img/feature/13__pastedGraphic.png)
- You can choose between price including tax or price excluding tax.
- **Price Including Tax:**
  - If you enable this option and set the price as 200, the amount already includes tax.
- **Price Excluding Tax:**
  - If this option is not enabled, set the price as 200 and select tax rates (e.g., 20% and 18%).
  - The system will calculate the tax amount separately and add it to the price accordingly.


---

## Variable Product Process
A variable product is a product that comes in different variations, such as size, color, or material. Each variation can have its own price, stock, and images.

**Example of a Variable Product:**
- Product Name: T-Shirt
- Attributes:
  - Size: Small, Medium, Large
  - Color: Red, Blue, Black
- When a customer selects a Red T-Shirt in Medium size, it will have:
  - A specific price (e.g., $15)
  - A specific stock quantity (e.g., 10 units)
  - A specific image showing the Red Medium T-Shirt

**Steps to Add a Variable Product:**
1. Add Attributes & Values (e.g., Size (S, M, L) and Color (Red, Blue, Black))
![Multi-Tax Option](/img/feature/14__pastedGraphic.png)
2. Select "Variable Product" while adding a product.
![Multi-Tax Option](/img/feature/15__pastedGraphic.png)
3. Click on Attributes, choose the attributes, and click Save Settings.
![Multi-Tax Option](/img/feature/16__pastedGraphic.png)
![Multi-Tax Option](/img/feature/17__pastedGraphic.png)
4. Go to the Variants Tab
   - You will see the added attributes.
   - Set price, stock details, and variant images for each combination
   ![Multi-Tax Option](/img/feature/18__pastedGraphic.png)
5. Save the product, and it's done


---

## Cash Collection
- In Cash on Delivery (COD) orders, the order amount is handled by the delivery boy.
- Once the order is delivered, the delivery boy keeps the COD amount.
- The admin can collect the amount from the delivery boy from the cash collection.

![Cash Collection Example](/img/feature/19__pastedGraphic.png)

---

## Fund Transfer
- Used to settle the delivery boy's commission.

![Fund Transfer Example](/img/feature/20__pastedGraphic.png)

- The admin manually pays the delivery boy and records the transaction as a Fund Transfer.

![Fund Transfer Example](/img/feature/21__pastedGraphic.png)



---

## Payment Request
- Seller and admin can send withdrawal requests from their panel or app, and by default, it's set as pending. The admin can approve or reject it.

![Payment Request Example](/img/feature/22__pastedGraphic.png)

![Payment Request Example](/img/feature/23__pastedGraphic.png)

---

## Zone Process
A zone is a combination of cities and zip codes. For example, if you add Zone One, it may include the cities ABC and XYZ, along with their respective zip codes.
- To add a zone, you must first add the city and zipcode.

![Fund Transfer Example](/img/feature/24__pastedGraphic.png)

![Fund Transfer Example](/img/feature/25__pastedGraphic.png)

- After adding the city and zipcode, you can create the zone.

![Zone Process Example](/img/feature/26__pastedGraphic.png)

---

## Product Deliverability Flow
While adding a store, there's an option for deliverability, which can be set either by zip code or city. This setting applies to all sellers registered in this store.

![Zone Process Example](/img/feature/27__pastedGraphic.png)

- There's an option to add city, zip code, and zone in the location settings. You can add the zip code, city, and zone data from there.

![Zone Process Example](/img/feature/28__pastedGraphic.png)

- A zone is a combination of cities and zip codes. For example, if you add Zone One, it may include the cities ABC and XYZ, along with their respective zip codes.
- While adding a seller, you'll see an option to add the zones.

![Zone Process Example](/img/feature/29__pastedGraphic.png)

- While adding products, you'll see an option to choose a zone, which can be set to 'All Zones,' specific, if seller has selected limited zones so it will show seller's selected zones while add product or if seller selected all zones than in product it show all zones.

![Zone Process Example](/img/feature/30__pastedGraphic.png)


- While adding a delivery boy, there's an option to choose the zones where the delivery boy will deliver products.

![Zone Process Example](/img/feature/31__pastedGraphic.png)


- Based on the seller's zone, the delivery boy's zone, and the user's city or zipcode, it will check whether the product is deliverable to the user's address. If the store's deliverability setting is set to zip code-wise, it will check the seller's zip code against the user's zip code. If it's set to city-wise, it will check the city.


---

## Pusher Setting
It's used for live chat in the app.
1. Create an account at [https://pusher.com/](https://pusher.com/).
2. After creating an account, go to [https://dashboard.pusher.com](https://dashboard.pusher.com).
3. Navigate to [https://dashboard.pusher.com/apps](https://dashboard.pusher.com/apps).
4. Click on Create App and create your app.

![Zone Process Example](/img/feature/33__pastedGraphic.png)


5. After creating the app, go to [https://dashboard.pusher.com/apps](https://dashboard.pusher.com/apps).
6. Select your app.
7. Go to "App Keys" and copy the values.

![Zone Process Example](/img/feature/34__pastedGraphic.png)


8. Open the admin panel, go to Settings → Pusher Settings.
9. Paste the values of channel name, app ID, pusher key, pusher secret key, and cluster in the respective fields.

![Pusher Setting Example](/img/feature/35__pastedGraphic.png)

---

## SMTP Settings
SMTP settings are used to send emails, including password reset links.

### Step 1: Enable App Passwords
Why Enable App Passwords?
Some secure apps may be blocked from accessing your email account due to two-step verification. An app-specific password allows these apps or devices to access your account securely.

**How to Create an App Password**
- Go to your Google Account and navigate to Security on the left panel.

![SMTP Settings Example](/img/feature/36__pastedGraphic.png)

- Alternatively, follow this [link](https://www.google.com/url?q=https://myaccount.google.com/apppasswords&sa=D&source=docs&ust=1750081650297593&usg=AOvVaw2WqFnF2bW_wP3Qs7rHC2q-) for the App Password setup.
- Under the Signing into Google section, select App Passwords.

![SMTP Settings Example](/img/feature/37__pastedGraphic.png)

- Click Select app and choose the app you are using.

![SMTP Settings Example](/img/feature/38__pastedGraphic.png)

- Click Select device and choose your device.

![SMTP Settings Example](/img/feature/39__pastedGraphic.png)

- Click Generate.

![SMTP Settings Example](/img/feature/40__pastedGraphic.png)

- Follow the instructions to enter the 16-character App Password displayed in the yellow bar on your device.

![SMTP Settings Example](/img/feature/41__pastedGraphic.png)

- Click Done.


### Step 3: Test the SMTP Configuration
- Use the designated [testing link](https://www.gmass.co/smtp-test) to verify your SMTP settings.
- If you receive the test email successfully, navigate to Settings → SMTP Settings and configure your SMTP details accordingly.

![SMTP Test Example](/img/feature/42__pastedGraphic.png)

---

## Notification Settings

### Step 1: Create Firebase Project
- Login into Firebase - [Firebase Console](https://console.firebase.google.com/)

![Firebase Project Example](/img/feature/43__pastedGraphic.png)

- Click on Console -> Create Project.

![Firebase Project Example](/img/feature/44__pastedGraphic.png)

- After creating the project, go to Settings and copy the Project ID.

![Firebase Project Example](/img/feature/45__pastedGraphic.png)

![Firebase Project Example](/img/feature/46__pastedGraphic.png)
- Paste the Project ID in the admin panel.

![Firebase Project Example](/img/feature/47__pastedGraphic.png)

### Step 2: Generate Service JSON File
- Download the Firebase JSON file by opening your Firebase Project → Project Settings → Service Accounts.
- Click Generate New Key

![Firebase Project Example](/img/feature/48__pastedGraphic.png)

- Upload the downloaded Service JSON file in the admin panel.

![Firebase Service JSON Example](/img/feature/49__pastedGraphic.png) 