FROM mongo:latest

WORKDIR /data

COPY data/data.js /docker-entrypoint-initdb.d/  

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password

EXPOSE 27017

