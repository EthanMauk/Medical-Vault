<h1 style="text-align:center;">EMS Home Page</h1>

```dataviewjs
// Create main row
let row = dv.el("div", "", {
  attr: {
    style: `
      display: flex;
      align-items: flex-start;
    `
  }
});

function createPanel(title) {
  // Outer card
  let panel = dv.el("div", "", {
    container: row,
    attr: {
      style: `
        flex: 1;
        min-width: 0;
        border: 0px solid var(--background-modifier-border);
        padding: 0px;
		text-align:center;
        display: flex;
        flex-direction: column;
      `
    }
  });

  // Fixed header
  dv.el("h3", title, { container: panel });

  // Scroll area (separate from title)
  let scrollArea = dv.el("div", "", {
    container: panel,
    attr: {
      style: `
        max-height: 220px;
        overflow-y: auto;
        margin-top: 8px;
      `
    }
  });

  return scrollArea;
}


// =====================
// RECENT FILES
// =====================
let recentContainer = createPanel("Recently Edited");

let recent = dv.pages('"Default"')
  .sort(p => p.file.mtime, 'desc')  // sort descending: newest first
  .slice(0, 30);

for (let page of recent) {
  dv.el("div", dv.fileLink(page.file.path), { container: recentContainer }); // make clickable
}


// =====================
// EMPTY NOTES
// =====================
let emptyContainer = createPanel("Empty Notes");

let files = app.vault.getMarkdownFiles();
let emptyNotes = [];

for (let file of files) {
  let content = await app.vault.read(file);
  let stripped = content
    .replace(/^#.*$/gm, "")
    .replace(/\s/g, "");

  if (stripped.length === 0) {
    emptyNotes.push(file);
  }
}

for (let file of emptyNotes.slice(0, 30)) {
  dv.el("div", dv.fileLink(file.path), { container: emptyContainer });
}
```

--- start-multi-column: ExampleRegion1  
```column-settings  
number of columns: 2  
shadow: off  
border: off  
margin: 10px  
text-align: center
```

Quick Links:
[[Block Exam 1]]
[Textbook](file:///Users/eioia/Documents/EMT%20Textbook.epub)

--- column-break ---

Text displayed in column 2.

--- end-multi-column

```dataviewjs
let page = dv.page("Quotes");
let quotes = page.file.lists.map(l => l.text);

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

let container = dv.el("div", "", {
  attr: {
    style: `
      display: flex;
      justify-content: center;
      text-align: center;
      font-style: italic;
      font-size: 1em;
      padding: 20px;
    `
  }
});

dv.el("div", randomQuote , { container });
```
