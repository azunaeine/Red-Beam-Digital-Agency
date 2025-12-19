#!/bin/bash

# Find all index.html files and update the About link
find "/Volumes/Seagate/Red Beam Digital Agency" -name "index.html" -type f | while read -r file; do
    echo "Updating $file"
    # Replace any variation of the About link with the correct one
    sed -i '' -E 's|<a class="item" href="[^"]*/(About|About/|About/index\.html|AboutUs|AboutUs/|AboutUs/index\.html)"[^>]*>[^<]*</a>|<a class="item" href="/AboutUs/">About Us</a>|g' "$file"
done

echo "All About links have been updated successfully!"
