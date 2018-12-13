[![CircleCI](https://circleci.com/gh/LeonErath/Website/tree/master.svg?style=svg)](https://circleci.com/gh/LeonErath/Website/tree/master) [![Website leonerath.de](https://img.shields.io/website-up-down-green-red/http/leonerath.de.svg)](http://leonerath.de/) [![CodeFactor](https://www.codefactor.io/repository/github/leonerath/website/badge)](https://www.codefactor.io/repository/github/leonerath/website) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=LeonErath/Website)](https://dependabot.com)


# Website


Build the container:
```
docker build -f Dockerfile-prod -t website-prod .
```

Spin up the container:
```
docker run -it -d -p 80:80 --rm website-prod
```



<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
