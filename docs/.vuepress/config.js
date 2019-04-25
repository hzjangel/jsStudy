module.exports = {
    base: '/jsStudy/',
    title: 'js学习',
    description: 'js学习笔记',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
        //假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'hzjanger/jsStudy',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        //每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        sidebar: [
            {
                title: '第一章',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: '变量、作用域和内存问题',
                collapsable: false,
                children: [
                    '变量、作用域和内存问题/基本类型和引用类型'
                ]
            },
            {
                title: '引用类型',
                collapsable: false,
                children: [
                    '引用类型/Object类型',
                    '引用类型/Array类型'
                ]
            }
        ]
    }
};
