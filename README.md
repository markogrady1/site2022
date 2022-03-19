### 🍭 personal site currently in progress 🍭

install dependencies

- 🔧 `npm i`

start application

- 🚀 `npm start`

run tests

- 🧪 `npm test`

using docker

- 🐳  building

```
docker build . -t some-tag
```

- 🏃 running

```
docker run -it --rm \
  -v ${PWD}:/src/app \
  -v /src/app/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  some-tag
```