#!/bin/bash
jspm unbundle
jspm bundle app/**/* - [app/**/*] dependency-bundle.js --inject
mv app/api~.js app/api.js
