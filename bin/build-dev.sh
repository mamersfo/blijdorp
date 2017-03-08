#!/bin/bash
jspm unbundle
jspm bundle app/**/* - [app/**/*] dependency-bundle.js --inject
cp app/api~.js app/api.js
