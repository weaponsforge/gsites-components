#!/bin/bash

# Stops and deletes ALL Docker resources
docker image prune
docker rmi $(docker images -a -q)
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker system prune -f
docker system prune -a
docker volume prune -f
