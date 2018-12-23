#!/bin/bash

docker run -it -v ${PWD}:/srv -v ${PWD}/nginx-custom.conf:/etc/nginx/conf.d/default.conf -p 80:80 wood1y/syno-audio:prod