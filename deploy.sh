#!/bin/bash
git checkout production
git merge --no-edit --no-ff main
git push
git checkout -
