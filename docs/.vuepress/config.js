module.exports = {
  title: '小白Coding日志',
  description: '这里是小白Coding日志公众号,会以轻松简单的方式,通过分享编程学习日常,帮助大家一步步掌握编程技能!',
  // 网站主题
  them: '@vuepress/blog',
  themeConfig: {
    // 网站logo
    logo: '',
    // 导航栏
    nav: [
      {text: '掘金', link: 'https://juejin.cn/user/515006730085735'},
      {text: 'Github', link: 'https://github.com/it1998-web'},
    ],
    // 侧边栏
    sidebar: [
      {
        title: '学习',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/notes/study/01.md',
          '/notes/study/03.md',
        ]
      },
      {
        title: '生活',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/notes/life/01.md'
        ]
      }
    ]
  }
}