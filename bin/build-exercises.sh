#!/bin/bash
# run after updating exercises.org
lein build-exercises
git add data/exercises.org
git add data/exercises.json

