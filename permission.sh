#!/bin/bash
chmod 751 ~
chmod 755 ~/public_html/index.html
find ~/public_html/index.html -type d -exec chmod 755 {} \;
find ~/public_html/index.html -type f -exec chmod 644 {} \;
