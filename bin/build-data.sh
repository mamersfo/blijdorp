#!/bin/bash
# run after updating uitslagen.json and matches.json
lein build-data
git add data/2016-17/doelpunten.json
git add data/2016-17/assists.json
git add data/2016-17/stand.json
