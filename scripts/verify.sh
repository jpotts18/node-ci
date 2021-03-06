#!/bin/bash

# Test
npm test

# Lint
node_modules/.bin/eslint .

# Check for debug code
# FILES_PATTERN='\.(js)(\..+)?$'
# FORBIDDEN='console.log'
# git diff --cached --name-only | \
#     grep -E $FILES_PATTERN | \
#     GREP_COLOR='4;5;37;41' xargs grep --color --with-filename -n $FORBIDDEN && echo 'COMMIT REJECTED Found $FORBIDDEN references. Please remove them before commiting'
