module.exports = async (params) => {
    const { app } = params;

    // Get the current active Markdown editor
    const view = app.workspace.getActiveViewOfType(app.constructor.plugins.getPlugin("obsidian").MarkdownView) || app.workspace.getActiveViewOfType(app.workspace.MarkdownView);
    const editor = view?.editor;
    if (!editor) return;

    const selection = editor.getSelection();
    if (!selection) return;

    // Create glossary link
    const cleaned = selection.toLowerCase().replace(/\s+/g, "-");
    const link = `[[Glossary#^${cleaned}|${selection}]]`;

    editor.replaceSelection(link);
};