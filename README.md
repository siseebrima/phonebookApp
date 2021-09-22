you can access the deployed app in the link below
https://rocky-waters-09518.herokuapp.com/

"build:ui": "rm -rf build && cd ../frontend/ && npm run build --prod && cp -r build ../backend",
"deploy": "git push heroku main",
"deploy:full": "npm run build:ui && git add . && git commit -m uibuild && git push && npm run deploy",
"logs:prod": "heroku logs --tail"
