#!/bin/bash
pushd $(dirname $0) > /dev/null # set cwd to project root

# build project
yarn run build

DIR=$(mktemp -d)
TEMP_GIT=$(mktemp -d)

git clone --single-branch --branch production $(git remote get-url origin) $DIR
mv $DIR/.git $TEMP_GIT

# replace whole directory
rm -rf $DIR
mv out $DIR

# reconstrtuct git repo
mv $TEMP_GIT/.git $DIR

pushd $DIR > /dev/null # set cwd to temp repo root
    touch .nojekyll
    git add .
    git commit -m "auto deployement"
    git push
popd > /dev/null

rm -rf $DIR
popd > /dev/null
