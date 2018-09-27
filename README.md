[![CircleCI](https://circleci.com/gh/LeonErath/Website/tree/master.svg?style=svg)](https://circleci.com/gh/LeonErath/Website/tree/master)
# Website


Build the container:
```
docker build -f Dockerfile-prod -t website-prod .
```

Spin up the container:
```
docker run -it -d -p 80:80 --rm website-prod
