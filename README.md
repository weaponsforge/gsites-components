## climate-profile-full

This project creates rich CSS-styled blog-like **Posts** or **Card-like** thumbnail web pages for embedding in Google Sites as external websites.

It also features a lightweight Content Management System (CMS) for creating and managing Google Site embeddable blog-like **Posts** and **Card** content.

### Using with Google Sites

1. Copy a File Card's `IFrame Embed URL`.
2. Paste the `IFrame Embed URL` in Google Site's **Embed from the web** - By URL input prompt.

Google Sites Sample Web page:<br>
https://sites.google.com/view/gsites-embed-app/home

![gsites-embed-03-ez-optimized](https://github.com/weaponsforge/climate-profile-full/assets/56998001/21c07402-904d-4e41-9988-9108c8c683cc)

### Online Demo

#### Production App
https://weaponsforge.github.io/climate-profile-full/

#### Development App
https://climate-profile-dev.web.app/

```
EXAMPLE USER (Development App Only)
email: user@gmail.com
password: useruser
```

## Requirements

1. Windows, Linux or Mac OS
2. NodeJS LTS v16.14.2
3. Firebase Project

### Core Libraries/Frameworks

1. **NextJS v13.0.4** (client-side SSG)
   - NextJS is one of the @latest React frameworks officially endorsed on the react.dev website
   - NextJS's Static Side Generation (SSG) feature, combined with Incremental Static Generation (ISG) creates SEO-optimized websites fit for uploading on static hosting services such as GitHub Pages.
   - NextJS offers code automatic code-splitting, enabling a smaller download footprint per page route
2. **React 18.2.0**
   - React version 18's is the latest react version as of this writing
3. **@reduxjs/toolkit v1.9.3**
   - Redux offers a structured, organized, and centralized global "state management" system as a single source of truth that occasionally syncs with the database.
   - Redux states are available across all components using intuitively-named hooks.
   - Redux states are more predictable, consistent and less prone to errors by
     - promoting data normalization (which is optional), and
     - use of reducers which ensures data immutability
   - Its async data fetching mechanisms and middleware sync well with complex store states and of informing the client app of the loading state.
   - Redux states are easy to debug using the Redux Dev tools.
   - People can easily follow where the centralized data stores and async data fetching methods are located in the code base when working in teams, especially for large, complex enterprise apps.
   - Redux state management will scale well with this app's incoming feature updates containing more complex data models and states.
   - Redux has excellent documentation and a thriving community, and it has proven to be one of the most mature react state management libraries of all times.
4. **firebase v9.18.0**
   - Firebase, being a Backend-as-a-Service (Baas) makes it possible to create apps without creating a separate backend server app.
     - Firebase offers a Web (JavaScript) SDK for working on frontend (websites), and the Firebase Admin SDK for client-side scripting.
   - Firebase offers ready to use Authentication systems
   - Firestore database provides a light-weight document database useful for storing and querying simple data. Security Rules are enforced thru Firebase Security Rules.
   - Firebase Storage provides an easy to use and access container for rich-data content. Security Rules are enforced thru Firebase Storage Security Rules.
   - Firebase offers generous limits for testing and playing around with it's Spark (standard) plan after which users can opt to upgrade to the Blaze (paid) Plan as needed.
5. **firebase-admin v11.5.0**
   - The Firebase Admin SDK allows elevated scripting access to various Firebase services which are not available in the Firebase (JavaScript) SDK.

## Installation

1. Clone this repository.<br>
`git clone https://github.com/weaponsforge/climate-profile-full.git`

2. Install dependencies in the **/client** and **/server** directories.<br>
   ```
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd server
   npm install
   ```

2. Follow the instructions in the README files inside the **/client** and **/server** directories for more information on configuring and using the client and server apps.

@weaponsforge<br>
20230326
