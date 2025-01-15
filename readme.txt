
- 代码拉取
1. 拉取
git clone git@github.com:zhunengjie/zhunengjie.github.io.git
2. 添加主题子模块
 1) 直接添加
    git submodule add https://github.com/gokarna-theme/gokarna-hugo.git themes/gokarna
 2） 使用.gitmodules
    git submodule init
    git submodule update

- 文档 （gokarna主题）
1. 主题官方文档
https://gokarna-hugo.netlify.app/posts/
2. 网站配置参考
https://github.com/gokarna-theme/gokarna-hugo/blob/main/exampleSite/config.toml

- 命令
1. 调试
hugo server
2. 调试草稿
hugo server -D


