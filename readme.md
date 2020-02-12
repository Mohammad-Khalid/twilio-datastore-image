Twilio Datastore Docker Image
================
It's a Express based MongoDB image that provides API endpoints to store data into the MongoDB container.

# Requirements

## Create Account
Create an account on [Docker Hub](https://hub.docker.com/).

## Install Docker
Install Docker on your local machine. [Refer to the Docker Getting Started Guide](https://docs.docker.com/get-started/).

## Login to Docker Hub
`docker login` with your credentials. [Refer to the docker login docs](https://docs.docker.com/engine/reference/commandline/login/).

```
docker login --username=yourhubusername --password=yourpassword
```

## Pull twilio-datastore-server image

```
docker pull khalid0807/twilio-datastore-server
```

## Run the Service

```
cd twilio-datastore-server/
docker-compose up --build
```