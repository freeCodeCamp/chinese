#!/bin/bash

if [ "$2" ]; then
  if [[ "$1" =~ ^\[Auto\]* ]]; then
    echo "Ok"
  else
    echo "This issue does not need to generate a markdown file." 1>&2
    exit 1;
  fi;
else
  echo "The description of the issue is empty." 1>&2
  exit 1;
fi;
