## /climate-profile-full/server

Server-side APIs and utilities for the **climate-profile-full** app.

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0
4. Firebase CLI (firebase-admin)
   - version 11.16.0
   - installed using NodeJS

### Core Libraries/Frameworks

(See package.json for more information)

1. firebase-admin v11.5.0
2. express v4.18.2

## Installation

### General Set-up and Configuration

1. Install dependencies.<br>
`npm install`

2. Set up the environment variables. Create a `.env` file inside the **/server** directory with reference to the `.env.example` file.

   | Variable Name        | Description                                                                                                                                                                                                                                                                    |
   | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | FIREBASE_SERVICE_ACC | The project's private key file contents, condensed into one line and minus all whitespace characters.<br><br>The service account JSON file is generated from the Firebase project's Project Settings page, on Project Settings -> Service accounts -> Generate new private key |
   | FIREBASE_PRIVATE_KEY | The private_key entry from the service account JSON file.<br><blockquote>**NOTE:** Experiment wrapping this value in double-quotes on WINDOWS OS localhost. Some systems may or may not require the double-quotes (i.e., Ubuntu).</blockquote>                                 |

3. Initialize the Firestore database.
   - Create and initialize the Firestore database.
   - Apply Firestore Security Rules defined in the `/client/firestore.rules` file.
   - Set the Firestore Indexes for querying.
      - Deploy the Firestore Indexes defined in `/client/firestore.indexes.json` using the Firebase CLI, if it hasn't been deployed yet.
      - Run the command using Firebase CLI: `firebase deploy --only firestore:indexes`
      - You can also manually set the Firestore Indexes using the the Firebase Web Console.

4. Initialize Firebase Storage.
   - Allow CORS on Firebase Storage using Google Cloud Shell.
      - Go to your project’s google cloud console on http://console.cloud.google.com/home.
      - Activate the cloud shell by clicking the **Activate Cloud Shell** button on the upper right menu.
      - Create a cors.json file on the cloud shell using any of it's cloud-based text editors. Copy and paste the following contents to the JSON file:
         ```
         [
           {
              "origin": ["*"],
              "method": ["GET"],
              "maxAgeSeconds": 3600
           }
         ]
         ```
      - Run the command on cloud shell. Replace `BUCKET_NAME` with your Firebase Storage bucket name:
         - `gsutil cors set cors.json gs://BUCKET_NAME`
         - `gsutil cors set cors.json gs://mybucket.appspot.com` (Example)
      - View the current cors configuration of a bucket: <br>
         - `gsutil cors get gs://BUCKET_NAME`
   - Deploy the Firebase Storage Security Rules in the `/client/storage.rules` file, if it hasn't been deployed yet.
      - Run the command using Firebase CLI

5. View and run the available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Firebase Setup and Configuration

The following steps and instructions requires login to Firebase CLI. Read on the [Firebase CLI Quick Usage Reference](#firebase-cli-quick-usage-reference) section for more information on common Firebase CLI usage and examples.

### Firestore Database

1. Create and initialize a Firestore Database in the [Firebase Web console](https://firebase.google.com/).
2. Deploy the **Firestore Security Rules** defined in the `/client/firestore.rules` file using the Firebase CLI.<br>
`firebase deploy --only firestore:rules`
2. Deploy the **Firestore Indexes** defined in the `/client/firestore.indexes.json` file using the Firebase CLI.<br>
`firebase deploy --only firestore:indexes`
3. (Optional) Deploy the Firestore Security Rules using the Firebase Web Console.
   - Navigate to the **Firestore** -> **Rules** tab
   - Copy + paste the security rules in it's **Edit Rules**, then press the **Publish** button.
4. (Optional) Run the command to create a **.rules** configuration file in your project directory.<br>
`firebase init firestore`

### Firebase Storage

1. Create and initialize a Firestore Storage in the [Firebase Web console](https://firebase.google.com/).
2. Deploy the **Firestore Security Rules** defined in the `/client/storage.rules` file using the Firebase CLI.<br>
`firebase deploy --only storage:dev`
3. (Optional) Deploy the Firestore Security Rules using the Firebase Web Console.
   - Navigate to the **Storage** -> **Rules** tab
   - Copy + paste the security rules in it's **Edit Rules**, then press the **Publish** button.
4. (Optional) Run the command to create a **.rules** configuration file in your project directory.<br>
`firebase init storage`

### Firebase Hosting

Deploy website to Multiple Target Sites under a Firebase Project Hosting

1. Add a Firebase Web App to your Firebase Project under **Project Settings** -> **Add App** -> **Add Firebase to your app**
   - *Select a platform to get started*: Choose Web
2. Create a main Firebase Hosting website in the project.
   - Select the project's **Hosting** tab in the Firebase Web console
   - Press the **Add another site** button to create a Hosting website (for example, let's use  `"my-website"`)
      - Take note of this Hosting site's name `"my-website"`
   - Associate a `"blog"` (alias) deploy target to the `"my-website"` site:<br>
      - `firebase target:apply hosting blog my-website`
3. Update the local project's **firebaserc.json** file with the new target(s) and alias(es):
     ```
     {
       "hosting": [{
         "target": "blog",  // "blog" is the applied target name for the Hosting site "my-website""
         "public": "blog/dist",  // contents of this folder are deployed to the site "my-website"
          // ...
       },
       {
         "target": "app",  // "app" is the applied target name for the Hosting site "myapp-app"
         "public": "app/dist",  // contents of this folder are deployed to the site "myapp-app"
          // ...
         "rewrites": [...]  // You can define specific Hosting configurations for each site
       }
      ]
     }
     ```
4. Serve the firebase hosting website locally.
   - `firebase serve` - Launches all websites
   - `firebase serve --only hosting:TARGET_NAME` - deploy only a specified site
5. Deploy.
   - `firebase deploy` - deploys all sites
   - `firebase deploy --only hosting:TARGET_NAME` - deploy only a specified site


## Firebase CLI Quick Usage Reference

- To install Firebase CLI (using NodeJS), run:<br>
`npm install -g firebase-tools`

- Login/logout to your Firebase account using the Firebase CLI.<br>
   - `firebase login` (login)
   - `firebase logout` (logout)

- Generate a Firebase CI token.<br>
   - `firebase login:ci`
   - Copy the resulting token on the command line.

- Switch/use another firebase project.
   - `firebase use --add`
   - Select a firebase project from the list.

## Available Scripts

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

### `npm run user:create`

Creates a Firebase Auth user with custom claims.<br>
Requires `email`, `password` and `displayname` for CLI input parameters. See below for example usage.<br>

`npm run user:create --email=randomemail@gmail.com --password=anypasasword --displayname="Game Tester" --emailverified=true`

### `npm run user:update`

Updates an existing Firebase Auth user.<br>
Requires one of `email` or `uid` and 1 or more optional flags for CLI input parameter. See below for example usage.<br>

#### Usage:<br>
`npm run user:update --email=randomemail@gmail.com --password=mysecretpassword`<br>
`npm run user:update --email=randomemail@gmail.com --displayname=Hello World --account_level=0 --disabled=false`<br>
`npm run user:update --email=randomemail@gmail.com --emailverified=false`

### Flags

- `--email`
   - Firebase Auth user email
- `--uid`
   - Firebase Auth user ID
- `--password`
   - Password
- `--displayname`
   - Firebase Auth user display name
- `--disabled`
   - Disables a Firebase Auth user account
   - Setting to `--disabled=false` enables the accouunt
- `--emailverified`
   - Sets a Firebase Auth user account's `"emailVerified"` status to true
   - Setting to `--emailverified=false` sets the account's `"emailVerified"` status to false
- `--account_level`
   - Sets a Firebase Auth user account's `account_level` custom claims


### `npm run user:delete`

Deletes an existing Firebase Auth user.<br>
Requires `email` for CLI input parameter. See below for example usage.<br>

Usage:<br>
`npm run user:delete --email=randomemail@gmail.com`

### `npm run cards:webscrape`

Extracts Card data from https://basiclandart.com and uploads them to Firestore to use as sample data to use for educational purposes.<br>

To run this script smoothly, be sure to supply all the **server** required environment variables in the `.env` file.<br>
Additionally, hard-code an existing Firebase user account's Auth ID in the `AUTH_UID` variable.

## References

<sup>[[1]](https://firebase.google.com/docs/cli#windows-npm)</sup> Firebase CLI Installation

@weaponsforge<br>
20230427
