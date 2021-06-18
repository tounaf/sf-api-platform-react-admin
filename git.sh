#!/usr/bin/bash
git for-each-ref --shell --format="ref=%(refname)" refs/heads | \
while read entry
do
	eval "$entry"
#    echo "$ref"
#    direct="test"
    direct=`dirname $ref`
    feature="refs/heads/feature"
    if [ $direct = $feature ]; then
        echo $ref
    fi

done
