<template>
    <div class="home">
        <div class="banner">
            <el-carousel trigger="click" height="150px">
                <!-- banner -->
                <el-carousel-item v-for="(item, index) in imgs" :key="index">
                    <img
                        class="bannerImg"
                        :src="require('../assets/' + item)"
                    />
                </el-carousel-item>
                <!-- banner-左侧边栏 -->
                <div class="bannerLeft">
                    <div class="bannerLeftCon">
                        <div
                            class="bannerLeftConText"
                            v-for="(classif, index) in classifs"
                            :key="index"
                        >
                            {{ classif.name }}
                        </div>
                    </div>
                </div>
                <!-- banner-底部 -->
                <div class="bannerBottom">
                    <div class="bannerBottomCon">
                        <div class="bannerConIntro">
                            <i class="iconfont icontouru"></i>
                            <div>持之以恒</div>
                        </div>
                        <div class="bannerConIntro">
                            <i class="iconfont iconziyuantuozhan"></i>
                            <div>好学不倦</div>
                        </div>
                        <div class="bannerConIntro">
                            <i class="iconfont iconshujufenxi"></i>
                            <div>力争上游</div>
                        </div>
                    </div>
                </div>
            </el-carousel>
        </div>
        <div class="classifyCon">
            <!-- 最新上线 -->
            <div class="classify">
                <div class="classifyTitle">
                    <div class="classifyTitleZh">最新上线</div>
                    <div class="classifyTitleEg">Latest Online</div>
                </div>
                <div class="classifyContent">
                    <div class="classifyContentCon">
                        <div
                            v-for="(itme, index) in contentImg"
                            :key="index"
                            class="classifyContentConImg"
                            :class="{ classifyContentConImg2: index === 3 }"
                        >
                            <img
                                class="classifyContentImg"
                                :src="require('../assets/' + itme)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 热门推荐 -->
            <div class="classify">
                <div class="classifyTitle">
                    <div class="classifyTitleZh">热门推荐</div>
                    <div class="classifyTitleEg">Popular recommendation</div>
                </div>
                <div class="classifyContent">
                    <div class="hotStyleLeft">
                        <div
                            class="hotStyleLeft1"
                            v-for="(itme, index) in hotStyles"
                            :key="index"
                        >
                            <img
                                class="hotStyleLeft1Img"
                                :src="require('../assets/' + itme.ref)"
                            />
                            <div class="hotStyleLeft1Con">
                                <div class="hotStyleLeft1ConTitle">
                                    {{ itme.title }}
                                </div>
                                <div class="hotStyleLeft1ConTime">
                                    {{ itme.time }}
                                </div>
                                <div class="hotStyleLeft1ConText">
                                    {{ itme.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hotStyleRight">
                        <img
                            class="hotStyleRightImg"
                            src="../assets/img4.jpg"
                        />
                        <div class="hotStyleRightMask">
                            <div class="hotStyleRightMaskCon">
                                <div class="hotStyleRightTitle">
                                    Vue Cli3 项目打包优化
                                </div>
                                <div class="hotStyleRightTime">
                                    2021-04-28 00:00:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 个人信息 -->
            <div class="classify">
                <div class="classifyTitle">
                    <div class="classifyTitleZh">个人信息</div>
                    <div class="classifyTitleEg">Personal Information</div>
                </div>
                <div class="personalCon">
                    <div class="personalContent">
                        <img class="personalImg" src="../assets/img8.jpg" />
                        <div class="personalContentC">
                            <div class="personalContentCon">
                                <div class="personalContentTitle">
                                    刘帆的个人简介
                                </div>
                                <div class="personalContentText">
                                    刘帆的个人简介内容刘帆的个人简介内容，刘帆的个人简介内容刘帆的个人简介内容刘帆的个人简介内容刘帆的个人，简介内容刘帆的个人简介内容刘帆的个人，简介内容刘帆的个人简介内容刘帆的个人简介内容刘帆的个人简介内容刘帆的个人简介内容刘帆的个人简介内容刘帆的个人简介内容
                                </div>
                                <div class="personalContentMore">更多 ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            // banner图片
            imgs: ['img1.jpg', 'img2.jpg', 'img5.jpg', 'img8.jpg'],
            // banner-左边栏分类
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
            // 最新上线
            contentImg: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img9.jpg'],
            // 热门推荐
            hotStyles: [
                {
                    ref: 'img3.jpg',
                    title: 'Vue Cli3 项目打包优化',
                    time: '2021-04-28 00:00:00',
                    text:
                        '使用 vue-cli3 构建一个初始的Vue项目：Cli3 官方文档 因为使用了cli3，很多目录结构不见了，而相关配置是放在vue.config.js里面的，因此在根目录，新建一个vue.config.js',
                },
                {
                    ref: 'img5.jpg',
                    title: 'Vue Cli3 项目打包优化',
                    time: '2021-04-28 00:00:00',
                    text:
                        '使用 vue-cli3 构建一个初始的Vue项目：Cli3 官方文档 因为使用了cli3，很多目录结构不见了，而相关配置是放在vue.config.js里面的，因此在根目录，新建一个vue.config.js',
                },
                {
                    ref: 'img6.jpg',
                    title: 'Vue Cli3 项目打包优化',
                    time: '2021-04-28 00:00:00',
                    text:
                        '使用 vue-cli3 构建一个初始的Vue项目：Cli3 官方文档 因为使用了cli3，很多目录结构不见了，而相关配置是放在vue.config.js里面的，因此在根目录，新建一个vue.config.js',
                },
            ],
        }
    },
    created() {},
}
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .banner {
        width: 100%;
        height: 470px;
        & ::v-deep .el-carousel {
            height: 100%;
            position: relative;
            .el-carousel__container {
                height: 100% !important;
                display: flex;
                flex-direction: column;
                align-items: center;
                .bannerImg {
                    width: 100%;
                    height: 470px;
                    object-fit: cover;
                }
                // banner-左边栏
                .bannerLeft {
                    width: 1200px;
                    height: calc(100% - 50px);
                    position: absolute;
                    top: 0;
                    z-index: 2;
                    .bannerLeftCon {
                        width: 140px;
                        height: 100%;
                        color: #fff;
                        font-size: 16px;
                        background-color: rgba(0, 0, 0, 0.5);
                        .bannerLeftConText {
                            width: 100%;
                            line-height: 60px;
                            text-align: center;
                            cursor: pointer;
                        }
                        .bannerLeftConText:hover {
                            background-color: rgba(0, 0, 0, 0.8);
                        }
                    }
                }
                // banner-底部
                .bannerBottom {
                    width: 100%;
                    height: 50px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    color: #fff;
                    background-color: rgba(0, 0, 0, 0.8);
                    z-index: 2;
                    .bannerBottomCon {
                        width: 1200px;
                        line-height: 50px;
                        display: flex;
                        .bannerConIntro {
                            height: 100%;
                            display: flex;
                            align-items: center;
                            margin-right: 50px;
                            .iconfont {
                                width: 26px;
                                line-height: 26px;
                                border-radius: 50%;
                                background-color: #fff;
                                color: #1f1f1f;
                                font-size: 16px;
                                font-weight: bold;
                                text-align: center;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
            .el-carousel__indicators--horizontal {
                left: unset;
                transform: unset;
                right: 60px;
                line-height: 50px;
                .el-carousel__indicator--horizontal {
                    padding: 0 6px;
                    .el-carousel__button {
                        width: 10px;
                        height: 10px;
                    }
                }
            }
        }
    }
    // 内容列表
    .classifyCon {
        width: 1200px;
        margin: 60px 0;
        .classify {
            width: 100%;
            margin-bottom: 80px;
            .classifyTitle {
                width: 100%;
                border-bottom: 1px #dddddd solid;
                padding-bottom: 14px;
                .classifyTitleZh {
                    font-size: 28px;
                    font-weight: bold;
                }
                .classifyTitleEg {
                    font-size: 20px;
                }
            }
            .classifyContent {
                width: 100%;
                margin: 30px 0;
                display: flex;
                justify-content: center;
                overflow: hidden;
                .classifyContentCon {
                    width: 100%;
                    display: flex;
                    flex-wrap: nowrap;
                    .classifyContentConImg {
                        width: 24%;
                        margin-right: 16px;
                        cursor: pointer;
                        transition: width 0.5s;
                        -webkit-transition: width 0.5s; /* Safari */
                        .classifyContentImg {
                            width: 100%;
                            height: 340px;
                            object-fit: cover;
                        }
                    }
                    .classifyContentConImg:hover {
                        width: calc(24% + 240px);
                    }
                    .classifyContentConImg2 {
                        margin-right: 0px;
                    }
                }
                .hotStyleLeft {
                    width: 70%;
                    height: 460px;
                    .hotStyleLeft1 {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 20px;
                        padding-right: 40px;
                        .hotStyleLeft1Img {
                            width: 240px;
                            height: 140px;
                            object-fit: cover;
                            margin-right: 20px;
                            border-radius: 4px;
                        }
                        .hotStyleLeft1Con {
                            width: calc(100% - 260px);
                            .hotStyleLeft1ConTitle {
                                font-size: 18px;
                            }
                            .hotStyleLeft1ConTime {
                                font-size: 12px;
                                color: #999;
                                margin-bottom: 14px;
                            }
                            .hotStyleLeft1ConText {
                                color: #666;
                                text-align: justify; // 所有行两端对齐
                                text-align-last: left; // 最后一行对齐方式
                            }
                        }
                    }
                    .hotStyleLeft1:hover {
                        background-color: #f0f0f0;
                    }
                }
                .hotStyleRight {
                    position: relative;
                    width: 30%;
                    height: 460px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    .hotStyleRightImg {
                        width: 100%;
                        object-fit: cover;
                        transition: width 0.5s;
                        -webkit-transition: width 0.5s; /* Safari */
                    }
                    .hotStyleRightMask {
                        display: none;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        padding: 60px 40px;
                        color: #fff;
                        box-sizing: border-box;
                        .hotStyleRightMaskCon {
                            .hotStyleRightTitle {
                                font-size: 26px;
                                font-weight: bold;
                            }
                        }
                    }
                }
                .hotStyleRight:hover .hotStyleRightImg {
                    width: 130%;
                }
                .hotStyleRight:hover .hotStyleRightMask {
                    display: block;
                }
            }
            .personalCon {
                width: 100%;
                margin: 50px 0 0 0;
                border-bottom: 2px #999 solid;
                .personalContent {
                    width: 900px;
                    display: flex;
                    justify-content: center;
                    .personalImg {
                        width: 280px;
                        height: 360px;
                        object-fit: cover;
                    }
                    .personalContentC {
                        position: relative;
                        width: 240px;
                        height: 360px;
                        background: rgb(245, 245, 245);
                        .personalContentCon {
                            position: relative;
                            top: 120px;
                            left: 140px;
                            width: 480px;
                            .personalContentTitle {
                                font-size: 28px;
                                font-weight: bold;
                            }
                            .personalContentText {
                                margin: 14px 0;
                                text-align: justify; // 所有行两端对齐
                                text-align-last: left; // 最后一行对齐方式
                            }
                            .personalContentMore {
                                color: #666;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
