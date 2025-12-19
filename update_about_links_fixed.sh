#!/bin/bash

# Find all index.html files and update the About link
find "/Volumes/Seagate/Red Beam Digital Agency" -name "index.html" -type f | while read -r file; do
    echo "Updating $file"
    # First, make a backup of the file
    cp "$file" "${file}.bak"
    
    # Replace any variation of the About link with the correct one
    perl -i -pe 's{<a class="item" href="[^"]*/(?:About|About/|About/index\.html|AboutUs|AboutUs/|AboutUs/index\.html)"[^>]*>[^<]*</a>}{<a class="item" href="/AboutUs/">About Us</a>}g' "$file"
    
    # Check if the file was modified
    if ! diff -q "$file" "${file}.bak" > /dev/null; then
        echo "  - Updated About link in $file"
        rm "${file}.bak"
    else
        # No changes were made, remove the backup
        rm "${file}.bak"
    fi
done

echo "All About links have been updated successfully!"
