#!/bin/bash
# run after updating uitslagen.json and matches.json
lein build-data
git add data/2017-18/stats.json
git add data/2017-18/stand.json
git add data/2017-18/uitslagen.json
