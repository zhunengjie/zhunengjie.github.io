- 基本信息
1. github地址
https://github.com/zhunengjie/zhunengjie.github.io
2. 网站地址
nengjie.site

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
3. 发布网站
hugo

- 图片
1. 图片url
路径：static/images/
https://nengjie.site/images/avatar.webp
2. icon下载
https://simpleicons.org/
路径：/static/svg/icons/


- 部署
1. 改了项目源码
docker compose restart
或 docker compose up
2. 更新了 docker-compose.yml
docker compose down
docker compose pull          # 可选，拉取新镜像
docker compose up --build -d