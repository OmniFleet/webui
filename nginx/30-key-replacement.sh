#!/bin/sh

set -e

cd /usr/share/nginx/html/static/js
echo "API KEY: ${GOOGLE_MAPS_API_KEY}"
echo "GATEWAY URL: ${API_GATEWAY_URL}"

for i in *.js; do
  sed -i "s/__GOOGLE_API_KEY__/${GOOGLE_MAPS_API_KEY}/g" $i
  sed -i "s~__API_GATEWAY_URI__~${API_GATEWAY_URL}~g" $i
done
