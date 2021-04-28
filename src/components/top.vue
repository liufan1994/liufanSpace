<template>
    <div class="appTop">
        <div class="topCenter" :class="{ topCenter2: isTab2 }">
            <!-- logo -->
            <div class="topLogo">
                <div class="topLogoTitle">
                    <i
                        class="iconfont iconlflogo"
                        :class="{ iconlflogo2: isTab2 }"
                    ></i>
                    <div class="topText" :class="{ topText2: isTab2 }">
                        帆空间
                    </div>
                </div>
                <div class="topLogoText" :class="{ topLogoText2: isTab2 }">
                    — 技术分享网站
                </div>
            </div>
            <div class="topSearchTab" :class="{ topSearchTab2: isTab2 }">
                <!-- 搜索 -->
                <div class="topSearch" :class="{ topSearch2: isTab2 }">
                    <el-select
                        class="searchSelect"
                        v-model="value"
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-input
                        v-if="value === 1"
                        placeholder="请输入您要搜索的关键词"
                        v-model="search"
                        class="input-with-select"
                    >
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                        ></el-button>
                    </el-input>
                    <el-date-picker
                        v-if="value === 2"
                        v-model="valueTime"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                </div>
                <!-- tab -->
                <topTab class="topTab"></topTab>
            </div>
            <!-- 个人信息 -->
            <div class="individual">
                <div class="individualCon">
                    <i class="iconfont icondenglu"></i>
                    <div class="individualConText">登录 / 注册</div>
                </div>
                <div class="individualCon individualCon2 individualConText">
                    我的收藏
                </div>
            </div>
        </div>
        <div class="topBottom" :class="{ topBottom2: isTab2 }">
            <div class="topBottomCon">
                <div class="topBottomSort">所有分类</div>
                <!-- tab -->
                <topTab :isStyle="isTab2"></topTab>
                <div class="topBottomSeat"></div>
            </div>
        </div>
    </div>
</template>
<script>
import topTab from './topTab'

export default {
    name: 'app',
    components: { topTab },
    data() {
        return {
            // 是否触发动画
            isTab2: false,
            // 搜索 类型
            options: [
                {
                    value: 1,
                    label: '标题',
                },
                {
                    value: 2,
                    label: '时间',
                },
            ],
            // 搜索 类型-选中
            value: 1,
            // 搜索 值
            search: '',
            // 时间段值
            pickerOptions: {
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            )
                            picker.$emit('pick', [start, end])
                        },
                    },
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            )
                            picker.$emit('pick', [start, end])
                        },
                    },
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            )
                            picker.$emit('pick', [start, end])
                        },
                    },
                ],
            },
            // 所选时间段
            valueTime: '',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            let scrollY = document.documentElement.scrollTop
            if (scrollY >= 14) {
                this.isTab2 = true
            } else {
                this.isTab2 = false
            }
        },
    },
}
</script>

<style>
@font-face {
    font-family: '汉真广标';
    src: url('../ttf-style/汉真广标.ttf') format('truetype');
}
@font-face {
    font-family: '中國龍創藝體';
    src: url('../ttf-style/中國龍創藝體.TTF') format('truetype');
}
</style>
<style lang="scss" scoped>
.appTop {
    width: 100%;
    @keyframes topCenter {
        from {
            height: 46px;
        }
        to {
            height: 60px;
        }
    }
    .topCenter {
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        padding: 0 40px;
        box-sizing: border-box;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        z-index: 100;
        overflow: hidden;
        animation: topCenter 0.5s;
        -moz-animation: topCenter 0.5s; /* Firefox */
        -webkit-animation: topCenter 0.5s; /* Safari 和 Chrome */
        -o-animation: topCenter 0.5s; /* Opera */
        .topLogo {
            height: 30px;
            display: flex;
            align-items: flex-end;
            .topLogoTitle {
                height: 100%;
                display: flex;
                align-items: center;
                margin-right: 20px;
                @keyframes iconlflogo {
                    from {
                        font-size: 24px;
                    }
                    to {
                        font-size: 28px;
                    }
                }
                .iconlflogo {
                    font-size: 28px;
                    color: rgb(74, 74, 74);
                    margin-right: 10px;
                    animation: iconlflogo 0.5s;
                    -moz-animation: iconlflogo 0.5s; /* Firefox */
                    -webkit-animation: iconlflogo 0.5s; /* Safari 和 Chrome */
                    -o-animation: iconlflogo 0.5s; /* Opera */
                }
                @keyframes iconlflogo2 {
                    from {
                        font-size: 28px;
                    }
                    to {
                        font-size: 24px;
                    }
                }
                .iconlflogo2 {
                    font-size: 24px;
                    animation: iconlflogo2 0.5s;
                    -moz-animation: iconlflogo2 0.5s; /* Firefox */
                    -webkit-animation: iconlflogo2 0.5s; /* Safari 和 Chrome */
                    -o-animation: iconlflogo2 0.5s; /* Opera */
                }
                @keyframes topText {
                    from {
                        font-size: 20px;
                    }
                    to {
                        font-size: 24px;
                    }
                }
                .topText {
                    font-size: 24px;
                    font-family: 汉真广标;
                    color: rgb(74, 74, 74);
                    animation: topText 0.5s;
                    -moz-animation: topText 0.5s; /* Firefox */
                    -webkit-animation: topText 0.5s; /* Safari 和 Chrome */
                    -o-animation: topText 0.5s; /* Opera */
                }
                @keyframes topText2 {
                    from {
                        font-size: 24px;
                    }
                    to {
                        font-size: 20px;
                    }
                }
                .topText2 {
                    font-size: 20px;
                    animation: topText2 0.5s;
                    -moz-animation: topText2 0.5s; /* Firefox */
                    -webkit-animation: topText2 0.5s; /* Safari 和 Chrome */
                    -o-animation: topText2 0.5s; /* Opera */
                }
            }
            @keyframes topLogoText {
                from {
                    font-size: 14px;
                }
                to {
                    font-size: 16px;
                }
            }
            .topLogoText {
                color: rgb(106, 106, 106);
                font-size: 16px;
                animation: topLogoText 0.5s;
                -moz-animation: topLogoText 0.5s; /* Firefox */
                -webkit-animation: topLogoText 0.5s; /* Safari 和 Chrome */
                -o-animation: topLogoText 0.5s; /* Opera */
            }
            @keyframes topLogoText2 {
                from {
                    font-size: 16px;
                }
                to {
                    font-size: 14px;
                }
            }
            .topLogoText2 {
                font-size: 14px;
                animation: topLogoText2 0.5s;
                -moz-animation: topLogoText2 0.5s; /* Firefox */
                -webkit-animation: topLogoText2 0.5s; /* Safari 和 Chrome */
                -o-animation: topLogoText2 0.5s; /* Opera */
            }
        }
        @keyframes topSearchTab {
            from {
                position: absolute;
                top: -60px;
            }
            to {
                position: absolute;
                top: 10px;
            }
        }
        .topSearchTab {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            animation: topSearchTab 0.5s;
            -moz-animation: topSearchTab 0.5s; /* Firefox */
            -webkit-animation: topSearchTab 0.5s; /* Safari 和 Chrome */
            -o-animation: topSearchTab 0.5s; /* Opera */
            // 搜索
            & ::v-deep .topSearch {
                width: 376px;
                display: flex;
                margin-left: 26px;
                // 下拉选择
                .searchSelect {
                    margin-right: 2px;
                    .el-input__inner {
                        color: #333;
                        width: 80px;
                        border: unset;
                        background-color: #f8f8f8;
                        border-radius: 4px 0 0 4px;
                    }
                    .el-input__suffix {
                        .el-select__caret {
                            color: #333;
                        }
                    }
                }
                // 搜索框
                .input-with-select {
                    .el-input__inner,
                    .el-input-group__append {
                        border-radius: 0 4px 4px 0;
                        border: unset;
                        background-color: #f8f8f8;
                    }
                    .el-input-group__append {
                        color: #333;
                        padding: 0 15px 0 0;
                    }
                }
                .el-range-editor.is-active,
                .el-range-editor.is-active:hover {
                    border-color: #c0c4cc;
                }
                // 时间段选择-背景框
                .el-input__inner {
                    border: unset;
                    background-color: #f8f8f8;
                    .el-date-editor,
                    .el-range__icon {
                        color: #333;
                    }
                    .el-range-input {
                        background-color: unset;
                    }
                }
            }
        }
        @keyframes topSearchTab2 {
            from {
                position: absolute;
                top: 10px;
            }
            to {
                position: absolute;
                top: -43px;
            }
        }
        .topSearchTab2 {
            position: absolute;
            top: -43px;
            animation: topSearchTab2 0.5s;
            -moz-animation: topSearchTab2 0.5s; /* Firefox */
            -webkit-animation: topSearchTab2 0.5s; /* Safari 和 Chrome */
            -o-animation: topSearchTab2 0.5s; /* Opera */
        }
        .individual {
            display: flex;
            .individualCon {
                display: flex;
                align-items: center;
                padding: 0 14px;
                border-right: 1px #dddddd solid;
                cursor: pointer;
                .icondenglu {
                    font-size: 22px;
                    margin-right: 6px;
                }
            }
            .individualConText:hover {
                color: rgb(28, 28, 28);
                font-weight: bold;
            }
            .individualCon2 {
                border-right: unset;
                padding-right: 0;
            }
        }
    }
    @keyframes topCenter2 {
        from {
            height: 60px;
        }
        to {
            height: 46px;
        }
    }
    .topCenter2 {
        height: 46px;
        animation: topCenter2 0.5s;
        -moz-animation: topCenter2 0.5s; /* Firefox */
        -webkit-animation: topCenter2 0.5s; /* Safari 和 Chrome */
        -o-animation: topCenter2 0.5s; /* Opera */
    }
    @keyframes topBottom {
        from {
            height: 0px;
        }
        to {
            height: 40px;
        }
    }
    .topBottom {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        background-color: #1f1f1f;
        color: #fff;
        margin-top: 60px;
        animation: topBottom 0.5s;
        -moz-animation: topBottom 0.5s; /* Firefox */
        -webkit-animation: topBottom 0.5s; /* Safari 和 Chrome */
        -o-animation: topBottom 0.5s; /* Opera */
        .topBottomCon {
            width: 1200px;
            display: flex;
            justify-content: space-between;
            .topBottomSort {
                width: 140px;
                line-height: 40px;
                text-align: center;
                background-color: rgb(206, 206, 206);
                font-size: 16px;
                color: #1f1f1f;
                font-weight: bold;
            }
            .topBottomSeat {
                width: 140px;
            }
        }
    }
    @keyframes topBottom2 {
        from {
            height: 40px;
        }
        to {
            height: 0px;
        }
    }
    .topBottom2 {
        height: 0;
        animation: topBottom2 0.5s;
        -moz-animation: topBottom2 0.5s; /* Firefox */
        -webkit-animation: topBottom2 0.5s; /* Safari 和 Chrome */
        -o-animation: topBottom2 0.5s; /* Opera */
    }
}
</style>
