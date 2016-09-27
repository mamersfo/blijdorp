#!/bin/bash
git checkout app/api.js
jspm unbundle
jspm bundle app/main --inject --minify
git add build*
