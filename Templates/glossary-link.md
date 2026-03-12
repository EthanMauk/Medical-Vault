<%*
let term = tp.file.selection();
let id = term
  .toLowerCase()
  .replace(/[^\w\s]/g, "")
  .replace(/\s+/g, "-");
tR += `[[Glossary#^${id}|${term}]]`;
%>