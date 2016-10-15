// 实例化编辑器
wangEditor.config.printLog = false;
var editor = new wangEditor('editor');
editor.config.menus = [
    'source',
    '|', // '|' 是菜单组的分割线
    'bold',
    'italic',
    'quote',
    'code',
    'head',
    'unorderlist',
    'orderlist',
    '|',
    'eraser',
    'tomarkdown',

];

editor.create();
// 生成Number Link 
function getLink(element, index, array) {
    num = index + 1;
    lctteditor.insertValue("\n[" + num + "]:[" + element + "]")
}
// 转换MD
function getmd() {
    var content = toMarkdown(editor.$txt.html(), { gfm: true });
    content = content + '\n\n--------------------------------------------------------------------------------\n\nvia: 网址\n\n作者：[ ][a]\n\n译者：[译者ID](https://github.com/译者ID)\n\n校对：[校对者ID](https://github.com/校对者ID)\n\n本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出';
    lctteditor.insertValue(content);
    lctteditor.insertValue("\n\n[a]:");
    linkarry.forEach(getLink);
    lctteditor.focus();
}
// 复制内容
function copy() {
    superClipBoard.copy(lctteditor.getValue());
}

var lctteditor;
lctteditor = editormd({
    id: "editormd",
    width: "100%",
    height: "553px",
    path: "js/lib/",
    toolbarIcons: function() {
        return ["undo", "redo", "|", "bold", "h1", "h2", "h3", "h4", "h5", "|", "link", "image", "code", "table", "|", "list-ul", "list-ol", "hr", "|", "preview", "|", "search", ]
    },
});