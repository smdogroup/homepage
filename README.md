[![deploy gh-pages](https://github.com/smdogroup/smdo-homepage/actions/workflows/deploy.yml/badge.svg)](https://github.com/smdogroup/smdo-homepage/actions/workflows/deploy.yml)

This repo contains the source code for SMDO group's homepage.

## Access
The homepage can be accessed at: [gkennedy.gatech.edu](https://gkennedy.gatech.edu)



## Develop
Push or PR to the main branch will trigger the GitHub workflow to build and
deploy the website, which, upon finished, can be accessed at the URL above.


### Preview the website locally
If you build for the first time, you'll need to install several python packages:
```
cd docs/source && pip install -r requirements.txt
```
Then run
```
cd docs && ./compile.sh
```
to build the website.
If it runs through, host it locally
```
python -m http.server -d build/html
```
then visit
```
localhost:8000/
```
in your browser to preview the website locally.


## TODO
- Resolve compatibility issues on mobile device
- Add current positions for alumni
- Seiyon's profile
