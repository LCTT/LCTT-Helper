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

// 转换MD
function getmd() {
    var content = toMarkdown(editor.$txt.html(), { gfm: true });
    content = content + '\n\n--------------------------------------------------------------------------------\n\nvia: 网址\n\n作者：[ ][a]\n\n译者：[译者ID](https://github.com/译者ID)\n\n校对：[校对者ID](https://github.com/校对者ID)\n\n本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出';
    lctteditor.insertValue(content);
    lctteditor.focus();
}

var lctteditor;
lctteditor = editormd({
    id: "editormd",
    width: "100%",
    height: "553px",
    path: "js/lib/",
    toolbarIcons: function() {
        return ["undo", "redo", "|", "bold", "hr", "|", "preview", "|", "fullscreen", "info", "||", "watch", "fullscreen", "preview"]
    },
});