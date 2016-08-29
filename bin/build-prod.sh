#!/bin/bash
jspm unbundle
jspm bundle app/main --inject
git add build*
