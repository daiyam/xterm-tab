#!/bin/bash

set -ex

should_publish() {
  VERSION="$(node -p -e "require('./package.json').version")"
  NAME="$(node -p -e "require('./package.json').name")"

  npm view $NAME versions | grep "$VERSION"
}

npm config set loglevel=silent

if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd headless
if [[ -z $( should_publish ) ]]; then
  cd ..
  yarn package-headless
  cd headless
  npm publish --access=public
fi

cd ../addons/addon-clipboard
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-image
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-ligatures
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-progress
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-search
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-serialize
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-unicode11
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi

cd ../addon-webgl
if [[ -z $( should_publish ) ]]; then
  npm publish --access=public
fi
