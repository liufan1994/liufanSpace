<template>
    <div class="appTop">
        <div class="topLogo">
            <i class="iconfont iconlflogo"></i>
            <div class="topText">刘帆的空间</div>
        </div>
        <div class="topCenter">
            <div class="topTab">
                <div
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="tabText"
                    :class="{ tabText2: tab.tabShow }"
                    @click="tabFun(index)"
                >
                    {{ tab.name }}
                </div>
            </div>
            <div class="topSearch">
                <el-input
                    placeholder="搜搜你感兴趣的吧"
                    v-model="search"
                    class="input-with-select"
                >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            // 搜索 值
            search: '',
            // tab 数据
            tabs: [
                { name: '所有文章', tabShow: true },
                { name: '最近更新', tabShow: false },
                { name: '个人信息', tabShow: false },
            ],
        }
    },
    methods: {
        // 点击tab
        tabFun(index) {
            this.tabs.map((val, index2) => {
                if (index === index2) {
                    val.tabShow = true
                } else {
                    val.tabShow = false
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.appTop {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 40px;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: #fff;
    .topLogo {
        height: 80px;
        display: flex;
        align-items: center;
        .iconlflogo {
            font-size: 40px;
            color: #3399ff;
            margin-right: 10px;
        }
        .topText {
            font-size: 24px;
            font-weight: bold;
        }
    }
    .topCenter {
        width: 1200px;
        height: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .topTab {
            font-size: 16px;
            display: flex;
            .tabText {
                width: 70px;
                line-height: 32px;
                text-align: center;
                margin-right: 40px;
                cursor: pointer;
            }
            .tabText2 {
                color: #3399ff;
                border-bottom: 3px #3399ff solid;
            }
        }
        .topSearch {
            width: 300px;
        }
    }
}
</style>
