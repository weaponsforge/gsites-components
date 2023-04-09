## /climate-profile-full/server

Server-side APIs and utilities for the **climate-profile-full** app.

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0

### Core Libraries/Frameworks

(See package.json for more information)

1. firebase-admin v11.5.0
2. express v4.18.2

## Installation and Usage

1. Install dependencies.<br>
`npm install`

2. Set up the environment variables. Create a `.env` file inside the **/server** directory with reference to the `.env.example` file.

   | Variable Name        | Description                                                                                                                                                                                                                                                                    |
   | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | FIREBASE_SERVICE_ACC | The project's private key file contents, condensed into one line and minus all whitespace characters.<br><br>The service account JSON file is generated from the Firebase project's Project Settings page, on Project Settings -> Service accounts -> Generate new private key |
   | FIREBASE_PRIVATE_KEY | The private_key entry from the service account JSON file.<br><blockquote>**NOTE:** Experiment wrapping this value in double-quotes on WINDOWS OS localhost. Some systems may or may not require the double-quotes (i.e., Ubuntu).</blockquote>                                 |

3. Initialize the Firestore database.
   - Create and initialize the Firestore database.
   - Set the Firestore indices for querying.
   - Apply Firestore Security Rules defined in the `/client/firestore.rules` file.

5. Initialize Firebase Storage.
   - Allow CORS on Firebase Storage.

6. View and run the available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

### `npm run user:create`

Creates a Firebase Auth user with custom claims.<br>
Requires `email`, `password` and `displayname` for CLI input parameters. See below for example usage.<br>

`npm run user:create --email=randomemail@gmail.com --password=anypasasword --displayname="Game Tester" --emailverified=true`

### `npm run user:delete`

Deletes an existing Firebase Auth user.<br>
Requires `email` for CLI input parameter. See below for example usage.<br>

Usage:<br>
`npm run user:delete --email=randomemail@gmail.com`

@weaponsforge<br>
20230427
