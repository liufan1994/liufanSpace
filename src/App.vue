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
        position: relative;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size: 14px;
    }
    img {
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray;
    }
    // 搜索-下拉选择-选择框
    .el-select-dropdown {
        .el-select-dropdown__list {
            .el-select-dropdown__item.selected {
                color: #333;
                font-weight: bold;
            }
            .el-select-dropdown__item.hover,
            .el-select-dropdown__item:hover {
                background-color: #dddddd;
            }
        }
    }
    // 搜索-选择时间段
    .el-date-range-picker.has-sidebar {
        .el-picker-panel__sidebar {
            .el-picker-panel__shortcut:hover {
                color: #333;
                font-weight: bold;
            }
        }
        .el-picker-panel__body {
            .el-date-range-picker__header {
                .el-picker-panel__icon-btn:hover {
                    color: #333;
                    font-weight: bold;
                }
            }
            .el-date-table {
                // .available{
                //     span {
                //         background-color: #333;
                //     }
                // }
                .start-date,
                .end-date {
                    span {
                        background-color: rgb(106, 106, 106);
                    }
                }
                td.in-range,
                td.in-range,
                .el-date-table.is-week-mode .el-date-table__row.current,
                .el-date-table.is-week-mode .el-date-table__row:hover {
                    div,
                    div:hover {
                        background-color: rgb(238, 238, 238);
                    }
                }
                .today {
                    span {
                        color: #333;
                        font-weight: bold;
                    }
                }
                .available:hover {
                    color: #333;
                    font-weight: bold;
                }
            }
        }
    }
</style>
