# Tno, just a ghost theme

(中文在后)

## Overview

`Tno` is a ghost theme derivated from [Dale Anthony's Uno](https://github.com/daleanthony/uno)and [casper](https://github.com/TryGhost/Casper). The theme features a minimal, responsive design with a cover page, disqus comment integration, font icons and various color options and the mobile has a good experience.

I fixed some unexpected behaviors and changed some style and detail, making it more suitable for Chinese language content and improved the user experience of mobile. Please find a live demo of the theme running as my personal blog, [tindy's blog](http://www.typeof.cn).

## Features

### tools
use [bower](http://bower.io) to manange package and [gulp](http://gulpjs.com) to built project.

### Cover page

There is a beautiful full screen landing page for you to display a cover image with blur effect. I suppied several color for you to choose for the cover, while of course you can add your own. You can also place your avatar, blog title, your bio and some social button here.

### Responsive and Animation

Tno is following the responsive design and works well in mobile devices. You may find some events is driven by great animation, thanks to the [Animate.css](http://daneden.github.io/animate.css/), which makes all these possible.

### Disqus comments and Font Awesome

Integrate comment system with a simple user name input with [Disqus](https://disqus.com). Use [Font Awesome](http://fontawesome.io) icon to express yourself better. They are perfect for a personal site (such as blog), as well as some commercial CMS.

### SASS

Tno is built on SASS, but it is not a must flow. If you know HTML and CSS, making modifications to the theme should be super simple.

### Code highlight

[prism.js](http://http://prismjs.com) is used as the code highlight engine of this theme. You can get a clean and good-look code block in your tech blog.

### mobile

[fastclick](https://github.com/ftlabs/fastclick) polyfill to remove click delays on browsers with touch UIs

[slideout](https://github.com/Mango/slideout) a touch slideout navigation menu for your mobile web apps
## Usage

### Install

You should already set up a [ghost blog](https://ghost.org). If you are not prepared yet, please refer to the official [installation page](http://docs.ghost.org/installation/).

When you get ready, just clone the repo to a folder under your blog's theme folder: `content/themes/`. Restart ghost and you can find the `Tno` in the blog setting panle.

### Cover

#### Image and Color

Place your cover image under `assets/images/` folder and replace the default image file `background-cover.jpg`. You can change the cover overlap color as well. Change the `cover-orange` in the line of `<div class="panel-cover--overlay cover-orange"></div>` in `partials/side-panel.hbs` to the color you like. There are 7 options by default:

* `cover-blue` - #2568A3
* `cover-green` - #156F78
* `cover-purple` - #493252
* `cover-red` - #E25440
* `cover-orange` - #FB9C50
* `cover-slate` - #3D4260
* `cover-disabled` - Transparent

#### Avatar and Bio

The avatar will be the logo of your blog. Change it in your blog setting.

You can write a short bio on the landing page. See `partials/side-panel.hbs` file and you will find how to deal with that. :)

#### Navigation Buttons

Also in the `partials/side-panel.hbs` file. Don't forget to change it to your own links. You may not change the `/#blog` link, which will trigger an animation to your blog main page.

#### Social Buttons

You should update the links and icons in `partials/social.hbs`. The icons comes from Font Awesome, see [here](http://fontawesome.io/icons/) for all icons you can use.

### Disqus

You need to know your `short name` of Disqus. Add it to `disqus_shortname` in `comments.hbs` and then replace the `{{!-- {{> comments}} --}}` with `{{> comments}}` in `post.hbs` to enable Disqus for your blog.

### Code highlight theme

Tno is using the classic [okaidia](http://prismjs.com/) theme as a default. You can select your favourite color scheme and put it under `assets/css` folder directly. Then change the `css/okaidia.css` in `default.hbs` to make it live. For more color schemes, see [this site](http://prismjs.com/).

## Development

### bower

Use bower installation bourbon/fastclick/prism/slideout and other package
```
bower install
```
### gulp

Use gulp compression merge scripts , and style sheets packaged specified directory
```
gulp
```

### Good luck

Enjoy it and give me feedback. welcome to pull request !

## Licence

Great thanks to [Dale Anthony](https://github.com/daleanthony) and his [Uno](https://github.com/daleanthony/uno). Tno is based on Uno, and contains a lot of modification on page layout, animation, font and some more things I can not remember.

Tno is followed with Uno and be licensed as [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/). See the link for more information.

---

## 总览

`Tno` 是一个从 [Dale Anthony 的 Uno](https://github.com/daleanthony/uno)和官方的 [casper](https://github.com/TryGhost/Casper)派生出的 Ghost 主题。它遵从简洁和响应式的设计风格，拥有一个独立的封面，易于集成的 Disqus 评论系统，字体图标以及多种颜色,并且在移动端有不错的体验。

我在原来的基础上对一些预料外的行为进行了修正，并且改变了一些样式和细节，这样主题在中文 上表现得更好,并且加强了移动端的用户体验。我的个人博客 [tindy's blog](http://www.typeof.cn) 正在使用这个主题，您可以看看实际的效果。

## 特性

### 工具
这里使用[bower](http://bower.io)包的依赖并且用[gulp](http://gulpjs.com)来构建工程

### 移动端

[fastclick](https://github.com/ftlabs/fastclick) 移除click事件的延迟

[slideout](https://github.com/Mango/slideout) 一个移动端的滑动菜单

### 封面

主题有一个全屏的带有模糊（和半透明）效果的封面页，您可以选择喜欢的颜色，当然也可以添加您自己喜欢的颜色。您可以在封面页上放置头像，博客名字，简介以及社交网络导航等等。

### 响应式设计和动画

Tno 遵循响应式设计，所以应该能在各种设备上都表现良好。很多事件是由动画驱动的，这要感谢 [Animate.css](http://daneden.github.io/animate.css/) 的帮助。

### Disqus 评论系统和 Font Awesome 字体

如果您打算使用 [Disqus](https://disqus.com) 的话，集成评论系统就只是填一个用户名那么简单。您也可以使用 [Font Awesome](http://fontawesome.io) 的图标字体来获得更好的表现。这些不仅对于个人站点 (比如博客) 来说是很好的选择，对于一些商用的 CMS (内容管理系统) 来说也是不错的解决方案。

### SASS

Tno 是基于 SASS 创建的，但是如果您不再希望继续维护可扩展性，您也可以忽略这个再开发的流程。不过如果您懂一些 HTML 和 CSS 的话，对现有主题做出修改是轻而易举的。

### 代码高亮

使用了 [highlight.js](http://highlightjs.org) 作为主题的代码高亮引擎。您可以在您的技术博客上以简洁优美的形式呈现您的代码。

## 使用

### 安装

您应该已经建立了一个可用的 [ghost 博客](https://ghost.org)。如果您还没有准备好，请参考[官方的安装页面](http://docs.ghost.org/installation/)来配置一个属于您自己的 ghost 博客。

一旦您准备就绪，只需要将这个 repo clone 到您博客的主题文件夹下：`content/themes/`，然后重启 ghost，您应该就能在博客的设定面板中看到 `Tno` 了。

### 封面

#### 图片和颜色

将您的封面图片放到主题的 `assets/images/` 下，替换掉原来的 `background-cover.jpg` 文件即可。您也可以改变封面的颜色。找到 `partials/side-panel.hbs` 文件，将 `<div class="panel-cover--overlay cover-orange"></div>` 中的 `cover-orange` 替换成您需要的颜色即可。默认为您提供了七种选择：

* `cover-blue` - #2568A3
* `cover-green` - #156F78
* `cover-purple` - #493252
* `cover-red` - #E25440
* `cover-orange` - #FB9C50
* `cover-slate` - #3D4260
* `cover-disabled` - 透明

#### 头像和简介

头像直接使用了您的博客的 logo。在博客的设定页面中可以进行更改。

您还可以在封面页上写一个简短的介绍。只要您瞄一眼 `partials/side-panel.hbs` 应该就知道怎么做了 :)

#### 导航按钮

也在 `partials/side-panel.hbs` 文件中定义。不要忘了把它们换成您自己的链接。您不应该更改或者至少保留 `/#blog` 链接，因为这个链接将触发一个转场到您的博客主页面的动画。

#### 社交按钮

可以在 `partials/social.hbs` 中按照例子将社交网络的按钮替换成您需要的链接和图标。图标都来自 Font Awesome，您可以访问它们的[网站](http://fontawesome.io/icons/)来查看您能使用的所有图标。

### Disqus

为了使用 Disqus 的评论系统，您需要从 Disqus 获取您自己的 `short name`。将其添加到 `comments.hbs` 的 `disqus_shortname` 中就可以了。然后您还需要将 `post.hbs` 中的 `{{!-- {{> comments}} --}}` 替换为 `{{> comments}}` 来使 Disqus 生效。


### 代码高亮主题

Tno 使用经典的 [tomorrow](http://jmblog.github.io/color-themes-for-highlightjs/tomorrow/) 主题作为默认的代码高亮配色。您也可以选择和使用您最喜欢的配色，将配色文件直接放到 `assets/css` 文件夹下， 然后将 `default.hbs` 中的 `css/tomorrow.css` 改为您的文件来使配置生效。想要更多的配色方案的话，可以看看这个[站点](http://jmblog.github.com/color-themes-for-highlightjs/)。

## 开发

### bower

使用bower安装Bourbon/fastclick/prism/slideout等包
```
bower install
```

### gulp

使用gulp压缩合并脚本和样式表，打包指定目录
```
gulp
```

### 祝你好运

欢迎 pull request！

如果您觉得这个主题还不错的话，欢迎加颗星星或者 follow 我一下以示支持，这将对我和我的项目的发展提供不可估量的帮助。再次感谢。

## 许可

非常感谢 [Dale Anthony](https://github.com/daleanthony) 和他的 [Uno](https://github.com/daleanthony/uno)。Tno 是一个基于 Uno 大量工作的主题，我在页面布局，动画，字体，移动端以及其他的地方做出了不少改动。

Tno 遵循 Uno 的要求按照 [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/) 进行授权。点击上面的链接可以了解到更多信息。
