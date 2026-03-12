---
cssclasses: default
---
# Untitled 2
**Untitled 2**

```dataviewjs
// Use dv.page to get the note by filename
let page = dv.page("Glossary"); // <-- replace "Glossary" with your note's filename without .md

if (page && page.file && page.file.content) {
    const text = page.file.content;

    // find all block IDs
    const matches = text.match(/\^[A-Za-z0-9\-_]+/g) || [];

    dv.paragraph(`**Number of block IDs:** ${matches.length}`);
} else {
    dv.paragraph("Could not load the glossary note. Check the filename.");
}