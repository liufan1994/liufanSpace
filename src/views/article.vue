<template>
    <!-- 文章 -->
    <div class="article">
        <div class="articleLeftA" :class="{articleLeftA2:isTab}">
            <div class="articleLeft">
                <div class="articleLeftConText" v-for="(classif, index) in classifs" :key="index">
                    {{ classif.name }}
                </div>
            </div>
        </div>
        <div class="articleRight">
            <div class="articleRightCon" v-for="(itme, index) in articleTexts" :key="index">
                <img class="articleRightImg" :src="require('../assets/' + itme.ref)" />
                <div class="articleRightConText">
                    <div class="articleRightConTitle">{{ itme.title }}</div>
                    <div class="articleRightConTime">{{ itme.time }}</div>
                    <div class="articleRightConTT">{{ itme.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'article',
        data() {
            return {
                // 是否触发动画
                isTab: false,
                // 左边栏分类
                classifs: [
                    {
                        name: 'HTML/CSS',
                    },
                    {
                        name: 'JavaScript',
                    },
                    {
                        name: 'Vue.js',
                    },
                    {
                        name: 'Node.js',
                    },
                    {
                        name: '小程序',
                    },
                    {
                        name: '其它',
                    },
                ],
                articleTexts: [
                    {
                        ref: 'img6.jpg',
                        title: '标题标题标题标题',
                        time: '2021-04-29 00:00:00',
                        text:
                            '内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容',
                    },
                    {
                        ref: 'img6.jpg',
                        title: '标题标题标题标题',
                        time: '2021-04-29 00:00:00',
                        text:
                            '内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容',
                    },
                    {
                        ref: 'img6.jpg',
                        title: '标题标题标题标题',
                        time: '2021-04-29 00:00:00',
                        text:
                            '内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容',
                    },
                    {
                        ref: 'img6.jpg',
                        title: '标题标题标题标题',
                        time: '2021-04-29 00:00:00',
                        text:
                            '内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容',
                    },
                    {
                        ref: 'img6.jpg',
                        title: '标题标题标题标题',
                        time: '2021-04-29 00:00:00',
                        text:
                            '内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容内容内容，内容内容内容内容内容内容内容内，容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容，内容内容内容',
                    },
                ],
            }
        },
        mounted() {
            // 监听事件
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
                // 获取滚动条位置
                let scrollY = document.documentElement.scrollTop
                if (scrollY >= 14) {
                    this.isTab = true
                } else {
                    this.isTab = false
                }
            },
        },
    }
</script>
<style lang="scss" scoped>
    .article {
        width: 1200px;
        display: flex;
        justify-content: flex-end;
        @keyframes articleLeftA {
            from {
                position: fixed;
                top: 226px;
            }
            to {
                position: fixed;
                top: 280px;
            }
        }
        .articleLeftA {
            width: 1200px;
            position: fixed;
            top: 280px;
            left: 50%;
            right: 50%;
            transform: translate(-50%, -50%);
            animation: articleLeftA 0.5s;
            -moz-animation: articleLeftA 0.5s; /* Firefox */
            -webkit-animation: articleLeftA 0.5s; /* Safari 和 Chrome */
            -o-animation: articleLeftA 0.5s; /* Opera */
            .articleLeft {
                width: 140px;
                color: #fff;
                font-size: 16px;
                background-color: rgba(0, 0, 0, 0.5);
                .articleLeftConText {
                    width: 100%;
                    line-height: 60px;
                    text-align: center;
                    cursor: pointer;
                }
                .articleLeftConText:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
            }
        }
        @keyframes articleLeftA2 {
            from {
                position: fixed;
                top: 280px;
            }
            to {
                position: fixed;
                top: 226px;
            }
        }
        .articleLeftA2 {
            position: fixed;
            top: 226px;
            animation: articleLeftA2 0.5s;
            -moz-animation: articleLeftA2 0.5s; /* Firefox */
            -webkit-animation: articleLeftA2 0.5s; /* Safari 和 Chrome */
            -o-animation: articleLeftA2 0.5s; /* Opera */
        }
        .articleRight {
            width: 960px;
            margin: 60px 0;
            z-index: 1;
            .articleRightCon {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
                cursor: pointer;
                .articleRightImg {
                    width: 260px;
                    height: 180px;
                    border-radius: 4px;
                    margin-right: 20px;
                    object-fit: cover;
                }
                .articleRightConText {
                    .articleRightConTitle {
                        font-size: 22px;
                    }
                    .articleRightConTime {
                        color: #999;
                        margin-bottom: 20px;
                    }
                    .articleRightConTT {
                        overflow: hidden;
                        text-overflow: ellipsis; //溢出用省略号显示
                        display: -webkit-box;
                        -webkit-line-clamp: 3; //行数
                        -webkit-box-orient: vertical;
                    }
                }
            }
            .articleRightCon:hover {
                background-color: #f0f0f0;
            }
        }
    }
</style>
