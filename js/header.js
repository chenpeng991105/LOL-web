/**
 * 通用头部js
 */
/*头部导航*/
const headerNav = document.querySelector('.header-nav');
/*头部导航hover框*/
const headerNavHover = document.querySelector('.header-nav-hover');
/*头部搜索图标*/
const headerSearch = document.querySelector('.header-search');
/*头部搜索框*/
const headerSearchWrap = document.querySelector('.header-search-wrap');
/*头部搜索框关闭图标*/
const headerSearchWrapClose = document.querySelector('.header-search-wrap .close');
/*头部用户信息*/
const headerUserinfo = document.querySelector('.header-userinfo');
/*头部登录hover框*/
const headerLoginHover = document.querySelector('.header-login-hover');

/*头部导航鼠标移入显示头部导航hover框*/
headerNav.onmouseover = function () {
    headerNavHover.style.display = 'block';
};
/*头部导航hover鼠标移入显示头部导航hover框*/
headerNavHover.onmouseover = function () {
    headerNavHover.style.display = 'block';
};
/*头部导航hover鼠标移出隐藏头部导航hover框*/
headerNavHover.onmouseout = function () {
    headerNavHover.style.display = 'none';
};

/*头部搜索图标点击显示头部搜索框*/
headerSearch.onclick = function () {
    headerSearchWrap.style.display = 'block';
};
/*头部搜索框关闭图标点击隐藏头部搜索框*/
headerSearchWrapClose.onclick = function () {
    headerSearchWrap.style.display = 'none';
};

/*头部用户信息鼠标移入显示头部登录hover框*/
headerUserinfo.onmouseover = function () {
    headerLoginHover.style.display = 'block';
};
/*头部登录hover框鼠标移入显示头部登录hover框*/
headerLoginHover.onmouseover = function () {
    headerLoginHover.style.display = 'block';
};
/*头部登录hover框鼠标移出隐藏头部登录hover框*/
headerLoginHover.onmouseout = function () {
    headerLoginHover.style.display = 'none';
};
