#!/bin/bash
# run after adding a news article in /data/news
lein build-news
git add data/news
