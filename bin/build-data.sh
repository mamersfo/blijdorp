#!/bin/bash
# run after updating uitslagen.json and matches.json
lein run
git add data/2016-17/doelpunten.json
git add data/2016-17/assists.json
git add data/2016-17/stand.json
