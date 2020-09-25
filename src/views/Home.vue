<template>
    <div class="home">
        <div class="articleList">
            <div
                class="articleListCon"
                v-for="(itme, index) in articleLists"
                :key="index"
            >
                <img
                    class="articleImg"
                    :src="require('../assets/' + itme.img)"
                />
                <div class="articleCon">
                    <div class="articleConTitle">{{ itme.title }}</div>
                    <div class="articleConText">{{ itme.text }}</div>
                    <div class="articleConSee">
                        <div class="articleSeeOper">
                            <div class="articleSeeCon">
                                <i class="iconfont iconliulan"></i>
                                <div>{{ itme.seeNum }}</div>
                            </div>
                            <div class="articleSeeCon">
                                <i class="iconfont iconliuyan"></i>
                                <div>{{ itme.messageNum }}</div>
                            </div>
                            <div class="articleSeeCon">
                                <i class="iconfont icondianzan"></i>
                                <div>{{ itme.giveNum }}</div>
                            </div>
                        </div>
                        <div class="articleSeeTime">{{ itme.time }}</div>
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
            articleLists: [
                {
                    img:
                        '0163ad5b3adc63a80121b994c775d1.jpg@1280w_1l_2o_100sh.jpg',
                    title: '标题标题标题标题标题标题标题标题',
                    text:
                        '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                    seeNum: 6,
                    messageNum: 0,
                    giveNum: 2,
                    time: '2020-09-22 14:31:12',
                },
                {
                    img:
                        '0163ad5b3adc63a80121b994c775d1.jpg@1280w_1l_2o_100sh.jpg',
                    title: '标题标题标题标题标题标题标题标题',
                    text:
                        '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                    seeNum: 6,
                    messageNum: 0,
                    giveNum: 2,
                    time: '2020-09-22 14:31:12',
                },
                {
                    img:
                        '0163ad5b3adc63a80121b994c775d1.jpg@1280w_1l_2o_100sh.jpg',
                    title: '标题标题标题标题标题标题标题标题',
                    text:
                        '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                    seeNum: 6,
                    messageNum: 0,
                    giveNum: 2,
                    time: '2020-09-22 14:31:12',
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    box-sizing: border-box;
    // 内容列表
    .articleList {
        width: 1200px;
        margin: 40px 0;
        // 列表内容
        .articleListCon {
            width: 100%;
            height: 180px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            cursor: pointer;
            .articleImg {
                width: 280px;
                height: 100%;
                object-fit: cover;
                margin-right: 60px;
                border-radius: 6px;
            }
            .articleCon {
                width: 860px;
                .articleConTitle {
                    font-size: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis; //溢出用省略号显示
                    white-space: nowrap;
                }
                .articleConText {
                    line-height: 22px;
                    color: #999;
                    margin: 24px 0;
                    overflow: hidden;
                    text-overflow: ellipsis; //溢出用省略号显示
                    display: -webkit-box;
                    -webkit-line-clamp: 2; //行数
                    -webkit-box-orient: vertical;
                }
                .articleConSee {
                    display: flex;
                    justify-content: space-between;
                    color: #999;
                    .articleSeeOper {
                        display: flex;
                        .articleSeeCon {
                            display: flex;
                            margin-right: 30px;
                            .iconfont {
                                margin-right: 6px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
