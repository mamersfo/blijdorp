#!/bin/bash
# run after build-data.sh
lein build-home
git add data/2017-18/forecast.json
# git commit -m "Updated forecast"
# git push
