### ๐ญ personal site currently in progress ๐ญ

install dependencies

- ๐ง `npm i`

start application

- ๐ `npm start`

run tests

- ๐งช `npm test`

using docker

- ๐ณ  building

```
docker build . -t some-tag
```

- ๐ running

```
docker run -it --rm \
  -v ${PWD}:/src/app \
  -v /src/app/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  some-tag
```

