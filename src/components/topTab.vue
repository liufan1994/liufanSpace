<template>
    <div class="topTab" :class="{ topTab2: !isStyle }">
        <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="tabText"
            :class="{
                tabText2: tab.tabShow,
                tabText3: !isStyle,
                tabText4: tab.tabShow && !isStyle,
            }"
            @click="tabFun(index)"
        >
            {{ tab.name }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'topTab',
    props: {
        // 是否触发动画
        isStyle: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            // tab 数据
            tabs: [
                { name: '首页', tabShow: true, url: '/' },
                { name: '文章', tabShow: false, url: '/article' },
                { name: '个人信息', tabShow: false, url: '/a' },
            ],
        }
    },
    watch: {
        // 监听页面路由-使刷新后默认选中页面与路由显示页面一致
        $route: {
            handler(newVal) {
                this.tabs.forEach((val) => {
                    if (newVal.path === val.url) {
                        val.tabShow = true
                    } else {
                        val.tabShow = false
                    }
                })
            },
        },
    },
    created() {},
    methods: {
        // 点击tab
        tabFun(index) {
            this.tabs.map((val, index2) => {
                if (index === index2) {
                    val.tabShow = true
                    this.$router.push(val.url)
                } else {
                    val.tabShow = false
                }
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.topTab {
    height: 100%;
    font-size: 16px;
    display: flex;
    justify-content: center;
    .tabText {
        line-height: 46px;
        text-align: center;
        margin: 0 30px;
        cursor: pointer;
    }
    .tabText:hover,
    .tabText2 {
        font-weight: bold;
        border-bottom: 3px #333 solid;
    }
    .tabText3 {
        line-height: 40px;
    }
    .tabText3:hover,
    .tabText4 {
        font-weight: bold;
        border-bottom: 3px #fff solid;
    }
}
.topTab2 {
    height: 98%;
}
</style>
