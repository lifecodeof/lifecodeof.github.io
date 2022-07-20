#!/bin/bash
git checkout production
git merge --no-edit main
git push
git checkout -
