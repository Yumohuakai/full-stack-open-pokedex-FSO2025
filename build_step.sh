#!/bin/bash

echo "Build script"
echo "Content of server directory"
ls

# add the commands here
npm run build
npm run start-prod