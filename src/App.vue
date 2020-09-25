<template>
    <div id="app">
        <top></top>
        <router-view />
    </div>
</template>
<script>
import top from './components/top'

export default {
    name: 'app',
    components: { top },
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

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #070707;
    font-size: 14px;
}
</style>
