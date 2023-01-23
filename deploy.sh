#!/bin/bash

# build project
yarn run build

if [[ $? != 0 ]]; then
    echo Project has errors, aborting...
    exit 1
fi

DIR=$(mktemp -d)

git clone --depth 1 --single-branch --branch production $(git remote get-url origin) "$DIR"

# replace whole directory except .git
find "$DIR" -maxdepth 1 ! -name '.git' -exec rm -rf {} +
mv out/* "$DIR"

pushd "$DIR" > /dev/null # set cwd to temp repo root
    touch .nojekyll
    git add .
    git commit -m "auto deployement"
    git push
popd > /dev/null

rm -rf "$DIR"
