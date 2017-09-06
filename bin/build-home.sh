#!/bin/bash
lein build-home
git add data/2017-18/forecast.json
git commit -m "Updated weather forecast"
git push
