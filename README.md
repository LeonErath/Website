# Website


Build the container:
```
docker build -f Dockerfile-prod -t sample-app-prod 
```

Spin up the container:
```
docker run -it -p 80:80 --rm sample-app-prod
