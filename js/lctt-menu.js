//  显示MD 功能
(function() {

    // 获取 wangEditor 构造函数和 jquery
    var E = window.wangEditor;
    var $ = window.jQuery;

    // 用 createMenu 方法创建菜单
    E.createMenu(function(check) {

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'tomarkdown';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor, // 编辑器对象
            id: menuId, // 菜单id
            title: '转换为MarkDown', // 菜单标题

            // 正常状态和选中状态下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-desktop"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-desktop"></i></a>')
        });

        // 菜单正常状态下，点击将触发该事件
        menu.clickEvent = function(e) {
            generateMarkdown();
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

})();
// 插入代码功能
(function() {

    // 获取 wangEditor 构造函数和 jquery
    var E = window.wangEditor;
    var $ = window.jQuery;

    // 用 createMenu 方法创建菜单
    E.createMenu(function(check) {

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'code';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor, // 编辑器对象
            id: menuId, // 菜单id
            title: '插入代码', // 菜单标题

            // 正常状态和选中装下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-terminal"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-terminal"></i></a>')
        });


        // panel 内容
        var $container = $('<div><textarea id="insertcode" style="margin: 0px; width: 330px; height: 97px;"></textarea><button class="btn btn-default btn-sm" type="button">插入</button></div>');

        // 插入代码的事件
        $container.on('click', 'button', function(e) {
            var $a = $('#insertcode');
            var s = '<pre>' + $a.val() + '</pre>';

            // 执行插入的命令
            editor.command(e, 'insertHtml', s);
        });

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $container,
            width: 350
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

})();
