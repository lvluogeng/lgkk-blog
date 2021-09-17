(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{566:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"解决百度无法收录搭建在github上的静态博客的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决百度无法收录搭建在github上的静态博客的问题"}},[s._v("#")]),s._v(" 解决百度无法收录搭建在GitHub上的静态博客的问题")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("如果你正在寻找本博客的搭建文档，博主建议您查看这个仓库的"),n("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"}},[s._v("README"),n("OutboundLink")],1),s._v("。")])]),s._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),n("p",[s._v("由于GitHub禁止百度爬虫访问，造成托管在GitHub Pages上的博客无法被百度收录。相关问题可以通过百度站长平台的"),n("code",[s._v("抓取诊断")]),s._v("再现，每次都是403 Forbidden的错误。")]),s._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),n("p",[s._v("同时将博客同时同步托管到GitHub Pages和"),n("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coding pages"),n("OutboundLink")],1),s._v("上，解决百度不收录问题。最后发现在国内使用coding pages打开速度特别快，而且还会被百度收录，因此我把coding pages的站点作为主站点，原本在github pages的作为分站点。")]),s._v(" "),n("p",[s._v("步骤：")]),s._v(" "),n("p",[s._v("1、注册"),n("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coding"),n("OutboundLink")],1),s._v("账号，创建仓库，把代码推送到coding仓库，并开启pages服务。")]),s._v(" "),n("blockquote",[n("p",[s._v("git 操作部分和使用github的差不多，不了解git操作的可以看我的另一篇文章："),n("a",{attrs:{href:"https://xugaoyi.com/pages/9a7ee40fc232253e/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git使用手册"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("2、我的博客项目使用vuepress搭建的，使用的是如下自动部署脚本，同时将代码推送到github和conding。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b.xugaoyi.com'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:xugaoyi/blog.git master:gh-pages "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到github")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# coding")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xugaoyi.com'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@git.dev.tencent.com:xugaoyi/xugaoyi.git master "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到coding")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" - "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退回开始所在目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf docs/.vuepress/dist\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("blockquote",[n("p",[s._v("因为我想给两个平台上绑定不同的自定义域名，因此我分开创建了CNAME文件。")])]),s._v(" "),n("p",[s._v("3、有自定义域名的，也可以在coding pages绑定自定义域名，域名DNS解析中添加CNAME记录指向coding pages的站点地址即可。（没有自定义域名的可忽略，同时把自动部署脚本中的创建CNAME文件的脚本去掉）")]),s._v(" "),n("p",[s._v("最后，使用百度站长的抓取诊断，发现抓取成功啦，再使用百度站长的"),n("a",{attrs:{href:"https://ziyuan.baidu.com/linksubmit/index",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接提交"),n("OutboundLink")],1),s._v("功能，把链接提交给百度，过一段时间就可能在百度搜索中搜索到啦。")]),s._v(" "),n("h3",{attrs:{id:"如何知道百度有没有收录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何知道百度有没有收录"}},[s._v("#")]),s._v(" 如何知道百度有没有收录？")]),s._v(" "),n("p",[s._v("在百度搜索框中使用site:<链接地址>，如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("site:xugaoyi.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"相关文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[s._v("#")]),s._v(" 相关文章")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://xugaoyi.com/pages/f44d2f9ad04ab8d3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《GitHub Actions 定时运行代码：每天定时百度链接推送》"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);