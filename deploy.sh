#!/bin/sh
pushd $(dirname $(realpath $0)) > /dev/null

yarn run build
touch out/.nojekyll

DIR=$(mktemp -d)
mv out $DIR

git checkout production
mv $DIR/out .
git add .
git commit -m "auto deployement"
git push
git checkout -

popd > /dev/null
