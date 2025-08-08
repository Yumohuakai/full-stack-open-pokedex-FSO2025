#!/bin/bash

echo "Build script"
echo "Content of server directory before build step"
ls

# add the commands here
npm ci
npm run build
echo "Content of server directory after build step"
ls