#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://3qberlin.github.io
# git push -f git@github.com:3qberlin/3qberlin.github.io.git main

# if you are deploying to https://3qberlin.github.io/vite-week6-airbnb
git push -f git@github.com:3qberlin/vite-week6-airbnb.git main:gh-pages

cd -