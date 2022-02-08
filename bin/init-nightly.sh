#!/bin/bash
set -e
SCRIPT_DIR=$(
	cd $(dirname ${BASH_SOURCE[0]})
	pwd
)

cd $SCRIPT_DIR

if [ -f "gvite-$1" ]; then
	echo "gvite-$1 is downloaded."
	exit 0
fi

curl -L https://github.com/vitelabs/go-vite-nightly/releases/download/$1/gvite-$1-$2.tar.gz | tar -xz

mv gvite-$1-$2/gvite gvite-$1

rm -rf gvite-$1-$2
