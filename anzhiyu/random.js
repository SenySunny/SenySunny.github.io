var posts=["Web/hexo博客使用的一些常见问题/","Web/hexo博客搭建（一）：在PC上搭建Hexo博客系统，并设置博客主题/","Web/hexo博客搭建（三）：部署Linux服务器，搭建宝塔Linux面板，实现远程或域名访问/","Web/hexo博客搭建（四）：本地Linux系统部署，搭建宝塔Linux面板，通过内网穿透实现域名访问/","Web/hexo博客搭建（二）：把hexo博客部署到github网页托管，实现通过类似xxx-github-io来访问博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };