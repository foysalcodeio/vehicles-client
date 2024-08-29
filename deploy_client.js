/**
 * CLIENT SITE DEPLOY
 * -------------------
 * 1. npm install -g firebase-tools
 * 2. firebase init
 * 
 * ** QUESTION AND ANSWER
 *      - Are you ready to proceed? Yes
 *      - Configure a security rules file for Realtime Database and (optionally) provision default instance, Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 *      - Please select an option: Use an existing project
        - Select a default Firebase project for this directory: vehicles-54ebd (vehicles)
        == if DATABASE error or asking something like this
            -> firebase init database
            - Are you ready to proceed? Yes
            - It seems like you haven’t initialized Realtime Database in your project yet. Do you want to set it up? Yes
            - Please choose the location for your default Realtime Database instance: asia-southeast1
            -  File database.rules.json already exists. Do you want to overwrite it with the Realtime Database Security Rules for vehicles-54ebd-default-rtdb from the Firebase console? Yes

    3. npm run build

    4. firebase init database
    5. firebase deploy

 */