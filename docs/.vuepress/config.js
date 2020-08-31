module.exports = {
    base: '/jsStudy/',
    title: 'javaScript',
    description: 'javaScript学习笔记',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        nav: [
            { text: '我的博客', link: 'https://hzjanger.github.io/', target: false}
            // { text: 'Guide', link: '/guide/' },
            // { text: 'External', link: 'https://google.com' },
        ],
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
                title: '基本类型',
                collapsable: true,
                children: [
                    'variableAndRAMProblem/basicTypeAndReferenceType'
                ]
            },
            {
                title: '引用类型',
                collapsable: true,
                children: [
                    'referenceType/ObjectType',
                    'referenceType/ArrayType',
                    'referenceType/dateType',
                    'referenceType/regExpType',
                    'referenceType/functionType'
                ]
            },
            {
                title: '函数',
                collapsable: true,
                children: [
                    '函数/闭包',
                    '函数/原型链',
                    '函数/变量提升和函数提升'
                ]
            },
            {
                title: '对象',
                collapsable: true,
                children: [
                    '对象/对象创建',
                    '对象/继承'
                ]
            },
            {
                title: '线程机制和事件机制',
                collapsable: true,
                children: [
                    '线程机制和事件机制/单线程',
                    '线程机制和事件机制/多线程'
                ]
            },
            {
                title: 'DOM',
                collapsable: true,
                children: [
                    'dom/事件委派',
                    'dom/事件的传播'
                ]
            }
        ]
    }
};
