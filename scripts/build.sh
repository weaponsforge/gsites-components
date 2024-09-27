#!/bin/bash

echo "Setting the .firebaserc values..."

if [ "$FIREBASE_TARGET" == "dev" ]; then
  # Replace placeholders with development Firebase settings
  sed -i -e "s/FIREBASE_PROJECT_DEV/${NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID}/g" client/.firebaserc
  sed -i -e "s/FIREBASE_HOSTING_DEV/${FIREBASE_HOSTING_DEV}/g" client/.firebaserc
elif [ "$FIREBASE_TARGET" == "prod" ]; then
  # Replace placeholders with production Firebase settings
  sed -i -e "s/FIREBASE_PROJECT_PROD/${NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID}/g" client/.firebaserc
else
  echo "Error: FIREBASE_TARGET must be 'dev' or 'prod', value: $FIREBASE_TARGET"
  exit 1
fi
