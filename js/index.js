/**
 * 首页js
 */
/*头部横幅*/
const headerBanner = document.querySelector('.header-banner');
/*轮播图图片*/
const carouselImage = document.querySelector('.carousel .image');
/*轮播图图片标题*/
const carouselImageTitleItem = document.querySelectorAll('.carousel .image-title li');
/*资讯标签*/
const newsTabItem = document.querySelectorAll('.news-tab ul li');
/*资讯内容*/
const newsContentUl = document.querySelectorAll('.news-content-ul ul');
/*热门活动标签*/
const activityTabLi = document.querySelectorAll('.activity-tab li');
/*热门活动内容*/
const activityContentUl = document.querySelectorAll('.activity-content ul');
/*新皮肤*/
const newSkin = document.querySelector('.new-skin');
/*新皮肤hover*/
const newSkinHover = document.querySelector('.new-skin-hover');
/*新皮肤hover视频*/
const newSkinHoverVideo = document.querySelector('.new-skin-hover video');
/*英雄资料ul*/
const heroesWrapUl = document.querySelector('.heroes-wrap ul');
/*英雄资料标签*/
const lolHeroesTabLi = document.querySelectorAll('.lol-heroes-tab li');
/*最新视频标签*/
const newVideoTabLi = document.querySelectorAll('.new-video-tab li');
/*热门专辑标签*/
const hotAlbumTabLi = document.querySelectorAll('.hot-album-tab li');
/*热门专辑内容ul*/
const hotAlbumContentUl = document.querySelector('.hot-album-content ul');
/*热门专辑左按钮*/
const btnLeft = document.querySelector('.hot-album-content .btn-left');
/*热门专辑右按钮*/
const btnRight = document.querySelector('.hot-album-content .btn-right');
/*赛事中心积分榜标题ul*/
const eventInfoTitleUl = document.querySelector('.event-info-title ul');
/*赛事中心积分榜标题li*/
const eventInfoTitleLi = document.querySelectorAll('.event-info-title li');
/*赛事中心赛事信息左按钮*/
const btnLeft1 = document.querySelector('.event-info-title .btn-left');
/*赛事中心赛事信息右按钮*/
const btnRight1 = document.querySelector('.event-info-title .btn-right');
/*赛事中心赛事信息内容ul*/
const eventInfoContentUl = document.querySelectorAll('.event-info-content ul');
/*赛事中心积分榜标签*/
const leagueTabLi = document.querySelectorAll('.league-tab li');
/*赛事中心积分榜表格内容ul*/
const leagueTableContentUl = document.querySelectorAll('.league-table-content ul');
/*侧边栏ul*/
const asideUl = document.querySelector('.aside ul');
/*侧边栏回顶部li*/
const poloToTop = document.querySelector('.aside .polo');
/*侧边栏回顶部图标*/
const poloIcon = document.querySelector('.aside .polo-icon');
/*侧边栏回顶部图片*/
const poloImg = document.querySelector('.aside .polo-img');
/*侧边栏所有li*/
const asideLi = document.querySelectorAll('.aside li');
/*侧边栏热门活动li*/
const asideRmhd = document.querySelector('.aside .rmhd');
/*侧边栏视频中心li*/
const asideSpzx = document.querySelector('.aside .spzx');
/*侧边栏赛事中心li*/
const asideSszx = document.querySelector('.aside .sszx');
/*侧边栏英雄资料li*/
const asideYxzl = document.querySelector('.aside .yxzl');
/*侧边栏fanart创作馆li*/
const asideFanart = document.querySelector('.aside .fanart');
/*热门活动div*/
const rmhd = document.querySelector('#rmhd');
/*视频中心div*/
const spzx = document.querySelector('#spzx');
/*赛事中心div*/
const sszx = document.querySelector('#sszx');
/*英雄资料div*/
const yxzl = document.querySelector('#yxzl');
/*fanart创作馆div*/
const fanart = document.querySelector('#fanart');

/*侧边栏点击定位div元素*/
asideRmhd.onclick = function () {
    scrollTo(0, rmhd.offsetTop - 50);
}
asideSpzx.onclick = function () {
    scrollTo(0, spzx.offsetTop - 200);
}
asideSszx.onclick = function () {
    scrollTo(0, sszx.offsetTop - 240);
}
asideYxzl.onclick = function () {
    scrollTo(0, yxzl.offsetTop - 180);
}
asideFanart.onclick = function () {
    scrollTo(0, fanart.offsetTop - 50);
}

/*侧边栏回顶部*/
let timer = null;
poloToTop.onclick = function () {
    timer = setInterval(() => {
        let curTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (curTop > 0) {
            scrollTo(0, curTop - 200);
        } else {
            clearInterval(timer);
        }
    }, 25);
};

/*侧边栏回顶部元素hover切换效果*/
poloToTop.onmouseover = function () {
    poloIcon.style.display = 'none';
    poloImg.style.display = 'block';
};
poloToTop.onmouseout = function () {
    poloIcon.style.display = 'block';
    poloImg.style.display = 'none';
};

/*头部横幅控制flag*/
let flag = false;
/*是否加载英雄图片，控制图片懒加载只触发一次*/
let isHeroImgLoad = false;

/*滚动条滚动监听函数*/
document.onscroll = function () {
    /*控制头部横幅高度变化只触发一次*/
    if (!flag) {
        headerBanner.style.background = 'url("../img/small-banner.jpg") center no-repeat';
        headerBanner.style.height = '360px';
    }
    flag = true;

    /*滚动条滚动高度*/
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*可视区域高度*/
    let cHeight = document.documentElement.clientHeight;

    /*侧边栏回顶部元素是否显示*/
    if (scrollTop > 200) {
        asideUl.style.height = '358px';
        poloToTop.style.display = 'block';
    } else {
        asideUl.style.height = '298px';
        poloToTop.style.display = 'none';
    }

    /*当滚动条高度小于400时取消所有侧边栏li样式*/
    if (scrollTop < 400) {
        cancelSelected();
    }
    /*div元素进入可视区域时对应侧边栏li添加样式*/
    if (scrollTop + cHeight > rmhd.offsetTop) {
        cancelSelected();
        addAsideLiSpanStyle(asideRmhd);
    }
    if (scrollTop + cHeight > spzx.offsetTop) {
        cancelSelected();
        addAsideLiSpanStyle(asideSpzx);
    }
    if (scrollTop + cHeight > sszx.offsetTop) {
        cancelSelected();
        addAsideLiSpanStyle(asideSszx);
    }
    if (scrollTop + cHeight > yxzl.offsetTop) {
        cancelSelected();
        addAsideLiSpanStyle(asideYxzl);
    }
    if (scrollTop + cHeight > fanart.offsetTop) {
        cancelSelected();
        addAsideLiSpanStyle(asideFanart);
    }

    /*英雄图片懒加载，并控制只触发一次加载*/
    if (scrollTop + cHeight > heroesWrapUl.offsetTop) {
        if (!isHeroImgLoad) {
            console.log('加载英雄图片');
            setTimeout(() => {
                loadHeroImg('All', 151);
            }, 2000);
        }
        isHeroImgLoad = true;
    }
};

/*取消侧边栏li的样式*/
function cancelSelected() {
    asideLi.forEach(item => {
        item.classList.remove('selected');
    })
}

/*给侧边栏li的子元素span加上样式*/
function addAsideLiSpanStyle(obj) {
    obj.classList.add('selected');
}

/*侧边栏li点击添加样式*/
asideLi.forEach((item, i) => {
    item.addEventListener('click', function () {
        changeAsideLi(i);
    })
});

/*改变侧边栏li样式*/
function changeAsideLi(index) {
    asideLi.forEach((item, i) => {
        item.classList.remove('selected');
        if (i == index) {
            item.classList.add('selected');
        }
    })
}

/*轮播图切换*/
let index = 0;

/*切换轮播图图片*/
function changeCarouselImage() {
    index = index + 1;
    if (index > 4) {
        index = 0;
    }
    carouselImage.style.left = -820 * index + 'px';
    changeCarouselImageTitleItem(index);
}

/*轮播图自动播放*/
(function autoPlay() {
    setInterval(() => {
        changeCarouselImage()
    }, 2000);
})();

/*控制轮播图切换*/
carouselImageTitleItem.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
        index = i;
        changeCarouselImageTitleItem(index);
        carouselImage.style.left = -820 * index + 'px';
    })
});

/*切换轮播图标题*/
function changeCarouselImageTitleItem(index) {
    carouselImageTitleItem.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'active';
        }
    })
}

/*资讯切换*/
/*控制切换资讯标签与资讯内容*/
newsTabItem.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
        changeNewsTabItem(i);
        changeNewsContentUl(i);
    })
});

/*切换资讯标签*/
function changeNewsTabItem(index) {
    newsTabItem.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'active';
        }
    })
}

/*切换资讯内容*/
function changeNewsContentUl(index) {
    newsContentUl.forEach((item, i) => {
        item.style.display = 'none';
        if (i == index) {
            item.style.display = 'block';
        }
    })
}

/*活动切换*/
/*控制切换活动标签和活动内容*/
activityTabLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
        changeActivityTabLi(i);
        changeActivityContentUl(i);
    })
});

/*切换活动标签*/
function changeActivityTabLi(index) {
    activityTabLi.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'active';
        }
    })
}

/*切换活动内容*/
function changeActivityContentUl(index) {
    activityContentUl.forEach((item, i) => {
        item.style.display = 'none';
        if (i == index) {
            item.style.display = 'flex';
        }
    })
}

/*神龙尊者视频鼠标移入显示并播放*/
newSkin.onmouseover = function () {
    newSkinHover.style.display = 'block';
    newSkinHoverVideo.play();
};
/*神龙尊者视频鼠标移出隐藏并暂停*/
newSkin.onmouseout = function () {
    newSkinHover.style.display = 'none';
    newSkinHoverVideo.pause();
};

/*英雄分类切换*/
/*控制切换英雄标签和英雄内容*/
lolHeroesTabLi.forEach((item, i) => {
    item.onclick = function () {
        changeLolHeroesTabLi(i);
        changeHeroesWrapUl(i);
    }
});

/*切换英雄标签*/
function changeLolHeroesTabLi(index) {
    lolHeroesTabLi.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'selected';
        }
    })
}

/*切换英雄内容*/
function changeHeroesWrapUl(index) {
    switch (index) {
        case 1:
            loadHeroImg('Fighter', 66);
            break;
        case 2:
            loadHeroImg('Mage', 59);
            break;
        case 3:
            loadHeroImg('Assassin', 37);
            break;
        case 4:
            loadHeroImg('Tank', 43);
            break;
        case 5:
            loadHeroImg('Marksman', 28);
            break;
        case 6:
            loadHeroImg('Support', 33);
            break;
        default:
            loadHeroImg('All', 151);
    }
}

/*加载英雄图片，传入类型和数量加载不同分类英雄*/
function loadHeroImg(type, num) {
    heroesWrapUl.innerHTML = '';
    for (let i = 1; i <= num; i++) {
        let imgSrc = '../img/heroes/' + type + '/hero (' + i + ').png';
        let li = document.createElement('li');
        let img = document.createElement('img');
        let a = document.createElement('a');
        a.href = '';
        img.src = imgSrc;
        a.appendChild(img);
        li.appendChild(a);
        heroesWrapUl.appendChild(li);
    }
}

/*加载标签封装函数*/
function loadTabLi(obj) {
    obj.forEach((item, i) => {
        item.addEventListener('click', function () {
            changeTabLi(obj, i);
        })
    });
};

/*切换标签封装函数*/
function changeTabLi(obj, index) {
    obj.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'active';
        }
    })
}

loadTabLi(newVideoTabLi);
loadTabLi(hotAlbumTabLi);

/*指定热门专辑标签显示周几*/
function getDayToHotAlbumTabLi() {
    let day = new Date().getDay();
    hotAlbumTabLi.forEach(item => {
        if (item.dataset.day == day) {
            item.className = 'active';
        }
    })
};
getDayToHotAlbumTabLi();

/*热门专辑轮播*/
let curIndex = 0;
let left = 0;
btnLeft.onclick = function () {
    curIndex = curIndex - 1;
    if (curIndex < 0) {
        curIndex = 4;
    }
    left = -curIndex * 513;
    hotAlbumContentUl.style.left = left + 'px';
}
btnRight.onclick = function () {
    curIndex = curIndex + 1;
    if (curIndex > 4) {
        curIndex = 0;
    }
    left = -curIndex * 513;
    hotAlbumContentUl.style.left = left + 'px';
}

/*赛事标题切换*/
let eulIndex = 0;
/*获取赛事信息标题当前激活li的index*/
eventInfoTitleLi.forEach((item, i) => {
    if (item.className.indexOf('active') > -1) {
        eulIndex = i - 4;
    }
})

btnLeft1.onclick = function () {
    eulIndex--;
    if (eulIndex >= 0) {
        eventInfoTitleUl.style.left = -eulIndex * 140 + 'px';
    }
}
btnRight1.onclick = function () {
    eulIndex++;
    if (eulIndex <= 3) {
        eventInfoTitleUl.style.left = -eulIndex * 140 + 'px';
    }
}

/*赛事信息标题li循环绑定点击事件*/
eventInfoTitleLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
        changeEventInfoTitleLi(i);
        changeEventInfoContentUl(i);
    })
});

/*切换赛事信息标题*/
function changeEventInfoTitleLi(index) {
    eventInfoTitleLi.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'active';
        }
    })
}

/*切换赛事信息内容*/
function changeEventInfoContentUl(index) {
    eventInfoContentUl.forEach((item, i) => {
        item.style.display = 'none';
        if (i == index) {
            item.style.display = 'block';
        }
    })
}

/*积分榜小组切换*/
leagueTabLi.forEach((item, i) => {
    item.addEventListener('click', function () {
        changeLeagueTabLi(i);
        changeLeagueTableContentUl(i);
    })
});

/*切换小组标签*/
function changeLeagueTabLi(index) {
    leagueTabLi.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'active';
        }
    })
}

/*切换小组战队积分*/
function changeLeagueTableContentUl(index) {
    leagueTableContentUl.forEach((item, i) => {
        item.style.display = 'none';
        if (i == index) {
            item.style.display = 'block';
        }
    })
}
