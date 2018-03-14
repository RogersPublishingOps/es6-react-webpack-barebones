# ES6 React Webpack Barebones

A bare-bones ES6 React starter using Webpack as an application bundler.

### Setup

All dependencies are local to the repository. No need to install anything globally.

```shell
npm install
```

### Development

You can produce a static development build or run a development server:

```shell
npm run build:dev

// OR

npm run start:dev
```

### Production

```shell
npm run build
```

You can view the static build by running a server:
```shell
npm start
```

### Testing

```shell
npm test
```

---

### Docker Container
***Note***: *It is not recommended that you use the Docker image for production. Once built, the static files exist in "public". Place these files in the root folder of your static web server.*

To run the Docker image you can either pull the image from DockerHub:
```shell
docker pull robertfairley/es6-react-webpack-barebones

docker run -p [PORT]:1234 --name [LOCAL_NAME] robertfairley/es6-react-webpack-barebones
```

Or you can build the image file from this folder so you can view changes you've made
within the Docker container environment.

1. Clone this repo.
2. Build the image:
```shell
docker build -t [IMAGE_NAME] .
```
3. Run the container:
```shell
docker run -p [PORT]:1234 --name [LOCAL_NAME] [IMAGE_NAME]
```
