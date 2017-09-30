#!/bin/bash
lein build-forecast
git add data/2017-18/forecast.json
git commit -m "Updated weather forecast"
git push
