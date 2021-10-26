[![deploy gh-pages](https://github.com/smdogroup/smdo-homepage/actions/workflows/deploy.yml/badge.svg)](https://github.com/smdogroup/smdo-homepage/actions/workflows/deploy.yml)

This repo contains the source code for SMDO group's homepage.

## Develop
The website is currently under development and is offline.
But there're 2 ways to preview it:

### 1. Build locally
If you build for the first time, you'll install several python packages.
This can be done by ```cd docs/source && pip install -r requirements.txt```.
Then you can run ```docs/compile.sh``` to build the website.
If it runs through, the main page can be accessed by opening 
```docs/build/html/index.html```.

### 2. Utilize Github action
If you have trouble building locally, you could let github build the whole thing 
for you.
You'll need to push your changes to main branch, which will
trigger the auto-deploy to branch gh-pages.
The status can be viewed by clicking [Actions](https://github.com/smdogroup/smdo-homepage/actions).
When it's done, run ```git checkout gh-pages``` and ```git pull```, then you should have
the ```index.html``` in the root folder.

## TODO
- Resolve compatibility issues on mobile device
- Populate page `People`
- Add latest articles to page `Publications`
