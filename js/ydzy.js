/**
 * 云顶之弈js
 */
/*云顶之弈命运之轮预告视频按钮*/
const ydzyVideo = document.querySelector('.btn-video-wrap .ydzy');
/*天选之人视频按钮*/
const txzrVideo = document.querySelector('.wrap1 li .txzr');
/*月神视频按钮*/
const ysVideo = document.querySelector('.wrap1 li .ys');
/*腥红之月-加里奥视频按钮*/
const jlaVideo = document.querySelector('.wrap1 li .jla');
/*羁绊视频按钮*/
const jibanVideo = document.querySelector('.wrap3 h3 .jiban');
/*装备视频按钮*/
const equipmentVideo = document.querySelector('.wrap4 h3 .equipment');
/*小小英雄视频按钮*/
const smallHeroVideo = document.querySelector('.wrap5 h3 .small-hero');
/*棋盘视频按钮*/
const checkerboardVideos = document.querySelectorAll('.wrap6 .btn-video');
/*播放视频div*/
const videoPlayerWrap = document.querySelector('.video-player-wrap');
/*视频元素*/
const videoPlayer = document.querySelector('.video-player-wrap video');
/*关闭视频按钮*/
const videoPlayerClose = document.querySelector('.video-player-wrap .close');
/*棋盘左边金币li*/
const heroBoxLeftLi = document.querySelectorAll('.hero-box-left li');
/*棋盘右边英雄图片ul*/
const heroBoxRightUl = document.querySelectorAll('.hero-box-right');
/*一金币棋盘英雄*/
const heroBoxRightOne = document.querySelector('.hero-box .one');
/*棋盘英雄分页上一页*/
const heroBoxPre = document.querySelector('.hero-box-bottom .pre');
/*棋盘英雄分页下一页*/
const heroBoxNext = document.querySelector('.hero-box-bottom .next');
/*棋盘英雄分页数字*/
const heroBoxNum = document.querySelectorAll('.hero-box-bottom .num');
/*羁绊导航左*/
const navLeft = document.querySelector('.nav-left');
/*羁绊导航右*/
const navRight = document.querySelector('.nav-right');
/*羁绊-特质*/
const jibanFeature = document.querySelector('.wrap3 .feature');
/*羁绊-职业*/
const jibanCareer = document.querySelector('.wrap3 .career');
/*装备中心ul*/
const equipmentCenterUl = document.querySelector('.equipment-center ul');
/*小小英雄li*/
const smallHeroesLi = document.querySelectorAll('.small-heroes li');
/*小小英雄详情li*/
const smallHeroesDetailLi = document.querySelectorAll('.small-heroes-detail li');

/*视频按钮绑定点击播放视频事件*/
ydzyVideo.addEventListener('click', playVideo);
txzrVideo.addEventListener('click', playVideo);
ysVideo.addEventListener('click', playVideo);
jlaVideo.addEventListener('click', playVideo);
jibanVideo.addEventListener('click', playVideo);
equipmentVideo.addEventListener('click', playVideo);
videoPlayerClose.addEventListener('click', closeVideo);
smallHeroVideo.addEventListener('click', playVideo);

/*棋盘视频循环绑绑定击播放视频事件*/
checkerboardVideos.forEach(item => {
    item.addEventListener('click', playVideo);
})

/*播放视频*/
function playVideo() {
    videoPlayerWrap.style.display = 'block';
    videoPlayer.src = this.dataset.src;
    videoPlayer.currentTime = 0;
    videoPlayer.play();
}

/*关闭视频*/
function closeVideo() {
    videoPlayerWrap.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

/*棋盘左边金币li*/
heroBoxLeftLi.forEach((item, i) => {
    item.onclick = function () {
        changeHeroBoxLeftLi(i);
        changeHeroBoxRightUl(i);
    }
});

/*切换棋盘左边金币*/
function changeHeroBoxLeftLi(index) {
    heroBoxLeftLi.forEach((item, i) => {
        item.className = '';
        if (index == i) {
            item.className = 'on';
        }
        if (index == 0) {
            loadPiece(heroBoxRightOneLis, 10);
            heroBoxNum[1].classList.remove('on');
            heroBoxNum[1].style.display = 'block';
            heroBoxPre.style.pointerEvents = 'auto';
            heroBoxNext.style.pointerEvents = 'auto';
        } else {
            heroBoxNum[0].classList.add('on');
            heroBoxNum[1].style.display = 'none';
            heroBoxPre.style.pointerEvents = 'none';
            heroBoxNext.style.pointerEvents = 'none';
        }
    })
}

/*切换棋盘右边英雄图片ul*/
function changeHeroBoxRightUl(index) {
    heroBoxRightUl.forEach((item, i) => {
        item.style.display = 'none';
        if (index == i) {
            item.style.display = 'block';
        }
    })
}

/*羁绊导航切换*/
navLeft.onclick = function () {
    navLeft.classList.add('on');
    navRight.classList.remove('on');
    jibanFeature.style.display = 'flex';
    jibanCareer.style.display = 'none';
}
navRight.onclick = function () {
    navLeft.classList.remove('on');
    navRight.classList.add('on');
    jibanFeature.style.display = 'none';
    jibanCareer.style.display = 'flex';
}

/*生成装备图片*/
for (let i = 1; i < 46; i++) {
    let imgSrc = '../img/ydzy/allzb/zb (' + i + ').png';
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = imgSrc;
    li.appendChild(img);
    equipmentCenterUl.appendChild(li);
}

/*一金币英雄li数组*/
const heroBoxRightOneLis = [
    '<li>\n' +
    '                                <img src="../img/ydzy/one/239.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>腥红之月</p>\n' +
    '                                        <p>魔法师</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">崔斯特</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/224.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>永恒之森</p>\n' +
    '                                        <p>斗士</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">茂凯</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/202.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>腥红之月</p>\n' +
    '                                        <p>神盾使</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">伊莉丝</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/244.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>天神</p>\n' +
    '                                        <p>重装战士</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">孙悟空</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/240.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>灵魂莲华夜幽</p>\n' +
    '                                        <p>神射手</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">薇恩</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/227.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>三国猛将</p>\n' +
    '                                        <p>神射手</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">奈德丽</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/206.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>三国猛将</p>\n' +
    '                                        <p>重装战士</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">盖伦</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/205.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>玉剑仙</p>\n' +
    '                                        <p>决斗大师</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">菲奥娜</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/221.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>月神</p>\n' +
    '                                        <p>耀光使</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">丽桑卓</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/201.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>月神</p>\n' +
    '                                        <p>刺客</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">黛安娜</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/246.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>浪人</p>\n' +
    '                                        <p>决斗大师</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">亚索</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/235.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>福星</p>\n' +
    '                                        <p>斗士</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">塔姆</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>',
    '<li>\n' +
    '                                <img src="../img/ydzy/one/226.jpg" alt="" class="hero">\n' +
    '                                <div class="box">\n' +
    '                                    <div class="top">\n' +
    '                                        <p>玉剑仙</p>\n' +
    '                                        <p>魔法师</p>\n' +
    '                                    </div>\n' +
    '                                    <div class="bottom">\n' +
    '                                        <span class="name">娜美</span>\n' +
    '                                        <span class="price">\n' +
    '                                            1\n' +
    '                                            <img src="../img/ydzy/icon-m2-jb.png" alt="">\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>'
];

/*生成棋盘一金币英雄图片*/
function loadPiece(arr, num) {
    heroBoxRightOne.innerHTML = '';
    for (let i = 0; i < num; i++) {
        heroBoxRightOne.insertAdjacentHTML('beforeend', arr[i]);
    }
}

loadPiece(heroBoxRightOneLis, 10);

/*棋盘英雄分页绑定点击事件*/
heroBoxPre.addEventListener('click', preHeroBox);
heroBoxNext.addEventListener('click', nextHeroBox);
heroBoxNum[0].addEventListener('click', preHeroBox);
heroBoxNum[1].addEventListener('click', nextHeroBox);

/*下一页英雄图片*/
function nextHeroBox() {
    let array = heroBoxRightOneLis.slice(10);
    loadPiece(array, array.length);
    heroBoxNum[0].classList.remove('on');
    heroBoxNum[1].classList.add('on');
}

/*上一页英雄图片*/
function preHeroBox() {
    loadPiece(heroBoxRightOneLis, 10);
    heroBoxNum[0].classList.add('on');
    heroBoxNum[1].classList.remove('on');
}

/*小小英雄li循环绑定点击事件*/
smallHeroesLi.forEach((item, i) => {
    item.addEventListener('click', function () {
        changeSmallHeroesLi(i);
        changeSmallHeroesDetailLi(i);
    })
});

/*切换小小英雄li*/
function changeSmallHeroesLi(index) {
    smallHeroesLi.forEach((item, i) => {
        item.className = '';
        if (i == index) {
            item.className = 'on';
        }
    })
}

/*切换小小英雄详情li*/
function changeSmallHeroesDetailLi(index) {
    smallHeroesDetailLi.forEach((item, i) => {
        item.style.display = 'none';
        if (i == index) {
            item.style.display = 'block';
        }
    })
}
