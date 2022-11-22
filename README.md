## climate-profile-full

Testing display of all related content based on a URL query string.

## Requirements

1. Windows, Linux or Mac OS
2. NodeJS LTS v16.14.2

### Core Libraries/Frameworks

1. NextJS v13.0.4
2. React 18.2.0

## Installation

1. Install dependencies.<br>
`npm install`

2. Set up the environment variables. Create a `.env`, `.env.local` and a `.env.development` files inside the root project directory with reference to the `.env.example` file.<br>

   | Variable Name         | Description                                                                                                                                                                                                                                                                                                                                               |
   | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | NEXT_PUBLIC_BASE_PATH | Directory name of assets and media that NextJS uses for the app.<br><br>Set its value to blank `''` when working on development mode in localhost.<br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when deploying on a repository (sub-directory) of a root GitHub Pages site. |

## Usage

1. Run the app in development mode.<br>
`npm run dev`

2. Launch the development website from:<br>
`http://localhost:3000`

3. Check for lint errors.
   - `npm run lint` (check lint errors)
   - `npm run lint:fix` (fix lint errors)

4. Export the static website.<br>
`npm run export`

@weaponsforge<br>
2022112
