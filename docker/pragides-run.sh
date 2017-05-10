#!/bin/bash

# Filename: pragides-run.sh
# Author: Paolo Pragides

app_stop(){
	local name=$1
	local state=$(docker inspect --format "{{.State.Running}}" $name 2>/dev/null)

	if [[ "$state" == "true" ]]; then
		docker stop -t 1 $name
	fi
}

del_stopped(){
	local name=$1
	local state=$(docker inspect --format "{{.State.Running}}" $name 2>/dev/null)

	if [[ "$state" == "false" ]]; then
		docker rm $name
	fi
}

SERVICES=(
	"pragides-local"
	"pragides-static"
	"pragides-app"
	"consul"
)

while getopts :nsc: opt; do
	echo $opt
	case $opt in
		n)
			echo "Install NPM modules..."
			NPM_INSTALL=1
		;;
		s)
			echo "Stopping services..."
			for SERVICE in ${SERVICES[@]}

			do
				app_stop ${SERVICE}
				del_stopped ${SERVICE}
			done
			exit 0
		;;
		\?)
			echo "Invalid option"
			exit 1
		;;
	esac
done


# Loop through and stop/delete existing docker instances of the same name.
for SERVICE in ${SERVICES[@]}
do
    app_stop ${SERVICE}
    del_stopped ${SERVICE}

done

# Set the project root. This assumes all directories are in this project root dir.
PROJECT_ROOT=$(pwd)
GIT_URL="/home/ppragides/git"
NODE_VERSION=v0.12.15
PRAGIDES_DIR= pragides-static
PRAGIDES_APP_DIR= pragides-app

# Blow away existing repos and start fresh
if [[ $FRESH_CLONE ]]; then
	echo "Removing existing local repos (may require sudo)..."
	sudo rm -r $PROJECT_ROOT/$PRAGIDES_DIR
	ls -l
fi

if [ ! -e $PRAGIDES_DIR ]; then
	git clone --recursive $GIT_URL/pragides-static.git $PRAGIDES_DIR
fi

if [ ! -e $PRAGIDES_APP ]; then
	git clone --recursive $GIT_URL/pragides-app.git $PRAGIDES_APP_DIR
fi

if [[ $GIT_PULL ]]; then
	echo "Pulling changes down..."
	cd $PROJECT_ROOT/$PRAGIDES_DIR; git pull $GIT_URL/pragides-static.git
	cd $PROJECT_ROOT/$PRAGIDES_APP_DIR; git pull $GIT_URL/pragides-app.git
fi


# Install all the node-modules for shaw-music repo, if they do not exist
#if [[ ! -e "$PROJECT_ROOT/$PRAGIDES_DIR/app/node_modules" || $NPM_INSTALL ]]; then
#	echo Installing npm modules...
#	docker run --rm \
#		-v $PROJECT_ROOT/$PRAGIDES_DIR/app:/noderoot \
#		-e UID=1000 \
#		-e GID=1000 \
#		registry.labs.eng.shaw.ca/buildtools/npm:$NODE_VERSION
#fi

# NGINX container
docker run -d \
	-p 81:81 \
	-p 444:444 \
	--restart=always \
	--net container:pragides-local \
	-v $PROJECT_ROOT/$PRAGIDES_DIR/webroot/:/var/www/mcs/shaw-music/webroot \
	-v $PROJECT_ROOT/$PRAGIDES_DIR/etc/nginx/conf.d/:/etc/nginx/conf.d/ \
	-v /etc/localtime:/etc/localtime:ro \
	--name pragides-static \
	nginx:latest

# Consul DB container
docker run -d \
	-p 1440:1440 \
	--net container:pragides-local \
	-e CONSUL_BIND_INTERFACE=eth0 \
	--name consul \
	consul:latest \
	agent -dev -log-level=WARN -data-dir=/dev/shm -client=0.0.0.0