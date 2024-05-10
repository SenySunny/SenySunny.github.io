var posts=["2016/03/30/hello-world/","2024/05/10/hexo博客搭建（一）：在PC上搭建Hexo博客系统，并设置博客主题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };