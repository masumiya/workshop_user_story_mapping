#!/bin/sh

cwd=`dirname "${0}"`
expr "${0}" : "/.*" > /dev/null || cwd=`(cd "${cwd}" && pwd)`
cd "${cwd}/.."

docker run --name gitbook -p 4000:4000 -v $PWD:/srv/gitbook fellah/gitbook
