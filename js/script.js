// 实例化编辑器
wangEditor.config.printLog = false;
var editor = new wangEditor('editor');
editor.config.menus = [
    'source',
    '|', // '|' 是菜单组的分割线
    'bold',
    'italic',
    'eraser',
    '|',
    'quote',
    'fontfamily',
    'fontsize',
    'head',
    'unorderlist',
    'orderlist',
    '|',
    'tomarkdown',

];

editor.create();

// 转换MD
function getmd() {
    var content = toMarkdown(editor.$txt.html(), { gfm: true });
    $('#md').html(content);
    $('pre#md').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}
// 剪贴板
new Clipboard('#btn-copy');