---
id: eshop-plus-features
title: eShop Plus Features
sidebar_label: Features
description: Comprehensive guide to eShop Plus features and functionality
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<style>
{`
  .feature-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .feature-hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 20px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .feature-hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .feature-hero p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }

  .feature-section {
    background: white;
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  }

  .feature-section h2 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 3px solid #667eea;
    position: relative;
  }

  .feature-section h2::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  .feature-section h3 {
    color: #34495e;
    font-size: 1.5rem;
    margin: 25px 0 15px 0;
    padding-left: 15px;
    border-left: 4px solid #667eea;
  }

  .feature-section h4 {
    color: #5a6c7d;
    font-size: 1.2rem;
    margin: 20px 0 10px 0;
    font-weight: 600;
  }

  .feature-list {
    list-style: none;
    padding: 0;
  }

  .feature-list li {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    position: relative;
    transition: all 0.3s ease;
  }

  .feature-list li:hover {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    transform: translateX(5px);
  }

  .feature-list li::before {
    content: '✓';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    background: #667eea;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }

  .feature-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  .feature-card h4 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .feature-card p {
    color: #5a6c7d;
    line-height: 1.6;
    margin-bottom: 0;
  }

  .step-list {
    counter-reset: step-counter;
    list-style: none;
    padding: 0;
  }

  .step-list li {
    counter-increment: step-counter;
    background: white;
    margin: 15px 0;
    padding: 20px 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
    position: relative;
    transition: all 0.3s ease;
  }

  .step-list li:hover {
    border-color: #667eea;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.1);
  }

  .step-list li::before {
    content: counter(step-counter);
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .image-container {
    text-align: center;
    margin: 25px 0;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .image-container img:hover {
    transform: scale(1.02);
  }

  .highlight-box {
    background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
    border: 1px solid #ffc107;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    position: relative;
  }

  .highlight-box::before {
    content: '💡';
    position: absolute;
    top: -10px;
    left: 20px;
    background: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 16px;
  }

  .warning-box {
    background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
    border: 1px solid #dc3545;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    position: relative;
  }

  .warning-box::before {
    content: '⚠️';
    position: absolute;
    top: -10px;
    left: 20px;
    background: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 16px;
  }

  .info-box {
    background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
    border: 1px solid #17a2b8;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    position: relative;
  }

  .info-box::before {
    content: 'ℹ️';
    position: absolute;
    top: -10px;
    left: 20px;
    background: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 16px;
  }

  .code-block {
    background: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 12px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    margin: 20px 0;
    overflow-x: auto;
  }

  .link-button {
    display: inline-block;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  .link-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    text-decoration: none;
    color: white;
  }

  .divider {
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    border-radius: 2px;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    .feature-hero h1 {
      font-size: 2rem;
    }
    
    .feature-section {
      padding: 20px;
    }
    
    .feature-section h2 {
      font-size: 1.5rem;
    }
  }
`}
</style>

<div className="feature-container">

<div className="feature-hero">
  <h1>🚀 eShop Plus Features</h1>
  <p>Discover the comprehensive features and capabilities that make eShop Plus the ultimate eCommerce solution for modern businesses.</p>
</div>

<div className="feature-section">
  <h2>🏪 Store Management</h2>
  
  <ul className="feature-list">
    <li>If you have multiple businesses like grocery, pharmacy, furniture, or clothing, you can add multiple stores and manage them efficiently.</li>
    <li>You can define store colors, display styles for the web and app, and configure deliverability settings.</li>
    <li>You can check the deliverability flow here: <a href="https://docs.google.com/document/d/1khOpdQ2kfwd_cbX9b2GlxTkqMxA3NThl0oyj0kP4NsQ/edit?tab=t.0" className="link-button">Product deliverability flow</a></li>
    <li>Additionally, you can edit, activate, or deactivate a store as needed.</li>
    <li>The entire system is store-based, so adding a store is mandatory.</li>
  </ul>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🔄 Return & Refund Process</h2>
  
  <div className="image-container">
    <img src="/img/feature/4__pastedGraphic.png" alt="Return Process" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/5__pastedGraphic.png" alt="Return Process 2" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>👥 Seller Process</h2>
  
  <ul className="feature-list">
    <li>Sellers can select the categories in which they want to sell their products during registration.</li>
    <li>After registration, the seller is marked as not approved by default.</li>
    <li>The admin reviews the seller's details and selected categories.</li>
    <li>The admin can approve or reject the seller registration.</li>
    <li>The admin can also set a commission for the categories and also can add/remove categories from seller profile.</li>
  </ul>

  <h3>How to assign categories to sellers?</h3>
  <ol className="step-list">
    <li>Click on edit seller</li>
    <li>Add categories and commission and click on save and click on update</li>
  </ol>

  <div className="image-container">
    <img src="/img/feature/6__pastedGraphic.png" alt="Return Process Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/7__pastedGraphic.png" alt="Seller Registration" />
  </div>

  <div className="info-box">
    <strong>Permission Setting:</strong> There is a permission setting for sellers that requires product approval. If enabled, the seller's products will be marked as Not Approved by default. The admin will review, verify, and approve the products before they are available for sale.
  </div>

  <h4>Register the Same Seller in Multiple Stores</h4>
  <ul className="feature-list">
    <li>A seller can register using the same personal details for different stores.</li>
    <li>There is an option to register a seller on a different store from the Seller App.</li>
    <li>This allows the same seller to sell their products across multiple stores.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/8__pastedGraphic.png" alt="Multi-Store Seller" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>💰 Commission Management</h2>
  
  <ul className="feature-list">
    <li>Or you can manually set commission from admin panel</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/9__pastedGraphic.png" alt="Multi-Store Seller" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>📊 Stock Management</h2>
  
  <ul className="feature-list">
    <li>While adding products and combo products, there is an option to select the Product Type.</li>
    <li>If it's a simple product, click on Enable Stock Management, add the details, and click Save Settings.</li>
    <li>If it's a variable product, there are two types of stock management:</li>
    <li><strong>Product Level:</strong> Sets the same stock for all variants.</li>
    <li><strong>Variant Level:</strong> Manages stock for each variant separately. While adding variants, there is an option to set stock for each variant.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/10__pastedGraphic.png" alt="Multi-Store Seller" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/11__pastedGraphic.png" alt="Stock Management" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🎫 Cashback Coupon Process</h2>
  
  <ul className="feature-list">
    <li>There is an option for cashback while adding a promo code.</li>
    <li>A cron job must be set up on your server for the promo code discount to work.</li>
    <li>The cron job runs every midnight at 12:00 AM.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/12__pastedGraphic.png" alt="Multi-Store Seller" />
  </div>

  <div className="warning-box">
    <strong>Important:</strong> If you're unsure how to set a cron job for once a day, seek help from server support or search online for guidance.
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>💸 Multi-Tax Option in Product Pricing</h2>
  
  <ul className="feature-list">
    <li>There is an option for multi-tax while adding a product.</li>
    <li>You can choose between price including tax or price excluding tax.</li>
    <li><strong>Price Including Tax:</strong> If you select "Price Including Tax," the system will calculate the tax amount separately and deduct it from the price accordingly.</li>
    <li><strong>Price Excluding Tax:</strong> If you select "Price Excluding Tax," the system will calculate the tax amount separately and add it to the price accordingly.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/13__pastedGraphic.png" alt="Cashback Coupon Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🎨 Variable Products</h2>
  
  <p><strong>Steps to Add a Variable Product:</strong></p>
  <ol className="step-list">
    <li>Add Attributes & Values (e.g., Size (S, M, L) and Color (Red, Blue, Black))</li>
    <li>Select "Variable Product" while adding a product.</li>
    <li>Click on Attributes, choose the attributes, and click Save Settings.</li>
    <li>Go to the Variants Tab</li>
    <li>You will see the added attributes.</li>
    <li>Set price, stock details, and variant images for each combination</li>
    <li>Save the product, and it's done</li>
  </ol>

  <div className="image-container">
    <img src="/img/feature/14__pastedGraphic.png" alt="Multi-Tax Option" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/15__pastedGraphic.png" alt="Multi-Tax Option" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/16__pastedGraphic.png" alt="Multi-Tax Option" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/17__pastedGraphic.png" alt="Multi-Tax Option" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/18__pastedGraphic.png" alt="Multi-Tax Option" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🚚 Cash Collection</h2>
  
  <ul className="feature-list">
    <li>The admin can collect the amount from the delivery boy from the cash collection.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/19__pastedGraphic.png" alt="Cash Collection Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>💳 Fund Transfer</h2>
  
  <ul className="feature-list">
    <li>Used to settle the delivery boy's commission.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/20__pastedGraphic.png" alt="Fund Transfer Example" />
  </div>
  
  <ul className="feature-list">
    <li>The admin manually pays the delivery boy and records the transaction as a Fund Transfer.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/21__pastedGraphic.png" alt="Fund Transfer Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>💸 Payment Request</h2>
  
  <ul className="feature-list">
    <li>Seller and admin can send withdrawal requests from their panel or app, and by default, it's set as pending. The admin can approve or reject it.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/22__pastedGraphic.png" alt="Payment Request Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/23__pastedGraphic.png" alt="Payment Request Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🗺️ Zone Process</h2>
  
  <p>A zone is a combination of cities and zip codes. For example, if you add Zone One, it may include the cities ABC and XYZ, along with their respective zip codes.</p>
  <ul className="feature-list">
    <li>To add a zone, you must first add the city and zipcode.</li>
    <li>After adding the city and zipcode, you can create the zone.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/24__pastedGraphic.png" alt="Fund Transfer Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/25__pastedGraphic.png" alt="Fund Transfer Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/26__pastedGraphic.png" alt="Zone Process Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>📦 Product Deliverability Flow</h2>
  
  <p>While adding a store, there's an option for deliverability, which can be set either by zip code or city. This setting applies to all sellers registered in this store.</p>

  <div className="image-container">
    <img src="/img/feature/27__pastedGraphic.png" alt="Zone Process Example" />
  </div>
  
  <ul className="feature-list">
    <li>There's an option to add city, zip code, and zone in the location settings. You can add the zip code, city, and zone data from there.</li>
    <li>A zone is a combination of cities and zip codes. For example, if you add Zone One, it may include the cities ABC and XYZ, along with their respective zip codes.</li>
    <li>While adding a seller, you'll see an option to add the zones.</li>
    <li>While adding products, you'll see an option to choose a zone, which can be set to 'All Zones,' specific, if seller has selected limited zones so it will show seller's selected zones while add product or if seller selected all zones than in product it show all zones.</li>
    <li>While adding a delivery boy, there's an option to choose the zones where the delivery boy will deliver products.</li>
    <li>Based on the seller's zone, the delivery boy's zone, and the user's city or zipcode, it will check whether the product is deliverable to the user's address. If the store's deliverability setting is set to zip code-wise, it will check the seller's zip code against the user's zip code. If it's set to city-wise, it will check the city.</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/28__pastedGraphic.png" alt="Zone Process Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/29__pastedGraphic.png" alt="Zone Process Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/30__pastedGraphic.png" alt="Zone Process Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/31__pastedGraphic.png" alt="Zone Process Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🔔 Push Notifications</h2>
  
  <p><strong>Step 1: Create Pusher Account</strong></p>
  <ol className="step-list">
    <li>Go to <a href="https://pusher.com/" className="link-button">https://pusher.com/</a></li>
    <li>Sign up for a free account</li>
    <li>Navigate to <a href="https://dashboard.pusher.com/apps" className="link-button">https://dashboard.pusher.com/apps</a></li>
    <li>Click on Create App and create your app</li>
    <li>After creating the app, go to <a href="https://dashboard.pusher.com/apps" className="link-button">https://dashboard.pusher.com/apps</a></li>
    <li>Select your app</li>
    <li>Go to "App Keys" and copy the values</li>
    <li>Open the admin panel, go to Settings → Pusher Settings</li>
    <li>Paste the values of channel name, app ID, pusher key, pusher secret key, and cluster in the respective fields</li>
  </ol>

  <div className="image-container">
    <img src="/img/feature/33__pastedGraphic.png" alt="Zone Process Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/34__pastedGraphic.png" alt="Zone Process Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/35__pastedGraphic.png" alt="Pusher Setting Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>📧 SMTP Configuration</h2>
  
  <p><strong>Step 1: Gmail SMTP Settings</strong></p>
  <ul className="feature-list">
    <li>SMTP Host: smtp.gmail.com</li>
    <li>SMTP Port: 587</li>
    <li>Encryption: TLS</li>
    <li>Username: Your Gmail address</li>
    <li>Password: Your App Password (not your regular Gmail password)</li>
  </ul>

  <p><strong>Step 2: Create App Password</strong></p>
  <ul className="feature-list">
    <li>Go to your Google Account and navigate to Security on the left panel</li>
    <li>Alternatively, follow this <a href="https://www.google.com/url?q=https://myaccount.google.com/apppasswords&sa=D&source=docs&ust=1750081650297593&usg=AOvVaw2WqFnF2bW_wP3Qs7rHC2q-" className="link-button">link</a> for the App Password setup</li>
    <li>Under the Signing into Google section, select App Passwords</li>
    <li>Click Select app and choose the app you are using</li>
    <li>Click Select device and choose your device</li>
    <li>Click Generate</li>
    <li>Follow the instructions to enter the 16-character App Password displayed in the yellow bar on your device</li>
    <li>Click Done</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/36__pastedGraphic.png" alt="SMTP Settings Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/37__pastedGraphic.png" alt="SMTP Settings Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/38__pastedGraphic.png" alt="SMTP Settings Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/39__pastedGraphic.png" alt="SMTP Settings Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/40__pastedGraphic.png" alt="SMTP Settings Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/41__pastedGraphic.png" alt="SMTP Settings Example" />
  </div>

  <p><strong>Step 3: Test the SMTP Configuration</strong></p>
  <ul className="feature-list">
    <li>Use the designated <a href="https://www.gmass.co/smtp-test" className="link-button">testing link</a> to verify your SMTP settings</li>
    <li>If you receive the test email successfully, navigate to Settings → SMTP Settings and configure your SMTP details accordingly</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/42__pastedGraphic.png" alt="SMTP Test Example" />
  </div>
</div>

<div className="divider"></div>

<div className="feature-section">
  <h2>🔥 Firebase Configuration</h2>
  
  <p><strong>Step 1: Create Firebase Project</strong></p>
  <ul className="feature-list">
    <li>Login into Firebase - <a href="https://console.firebase.google.com/" className="link-button">Firebase Console</a></li>
    <li>Click on Console → Create Project</li>
    <li>After creating the project, go to Settings and copy the Project ID</li>
    <li>Paste the Project ID in the admin panel</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/43__pastedGraphic.png" alt="Firebase Project Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/44__pastedGraphic.png" alt="Firebase Project Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/45__pastedGraphic.png" alt="Firebase Project Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/46__pastedGraphic.png" alt="Firebase Project Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/47__pastedGraphic.png" alt="Firebase Project Example" />
  </div>

  <p><strong>Step 2: Generate Service JSON File</strong></p>
  <ul className="feature-list">
    <li>Download the Firebase JSON file by opening your Firebase Project → Project Settings → Service Accounts</li>
    <li>Click Generate New Key</li>
    <li>Upload the downloaded Service JSON file in the admin panel</li>
  </ul>

  <div className="image-container">
    <img src="/img/feature/48__pastedGraphic.png" alt="Firebase Project Example" />
  </div>
  
  <div className="image-container">
    <img src="/img/feature/49__pastedGraphic.png" alt="Firebase Service JSON Example" />
  </div>
</div>

</div> 