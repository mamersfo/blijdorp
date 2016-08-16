## Blijdorp U11 (1)

Usage:

    cd blijdorp
    # get jspm if not yet installed
    npm install jspm --save-dev
    jspm install
    jspm bundle app/**/* - [app/**/*] dependency-bundle.js --inject
    # get serve if not yet installed
    cd ..
    npm install -g serve
    serve

Bundle for production:

    jspm bundle app/main --inject
