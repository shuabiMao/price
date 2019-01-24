<template>
        <div>

            <div class="ele">
                <el-select class="ele-search" v-model="value7" placeholder="请选择你的城市">
                    <el-option-group
                    v-for="group in options3"
                    :key="group.label"
                    :label="group.label">
                    <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-option-group>
                </el-select>
            </div>

            <div class="buyer-img border-bottom">
                <img class="buyer-img-content"
                 src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
                 >
            <div class="item-info">
                <div class="item-title">收大猪</div>
                <div class="item-desc">电话1888888888888</div>
                <button class="item-button">查看详情</button>
            </div>
         </div> 

          <div class="buyer-img border-bottom">
                <img class="buyer-img-content"
                 src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
                 >
            <div class="item-info">
                <div class="item-title">name</div>
                <div class="item-desc">地址为：啊啊啊啊</div>
                <button class="item-button">查看详情</button>
            </div>
         </div> 

          <div class="buyer-img border-bottom">
                <img class="buyer-img-content"
                 src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
                 >
            <div class="item-info">
                <div class="item-title">name</div>
                <div class="item-desc">地址为：啊啊啊啊</div>
                <button class="item-button">查看详情</button>
            </div>
         </div> 

          <div class="buyer-img border-bottom">
                <img class="buyer-img-content"
                 src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"
                 >
            <div class="item-info">
                <div class="item-title">name</div>
                <div class="item-desc">地址为：啊啊啊啊</div>
                <button class="item-button">查看详情</button>
            </div>
         </div> 

    </div>
</template>
<script>
export default {
    name:'buyer',
    data() {
      return {
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: ''
      }
    }
  }
</script>
<style lang="stylus" scoped> 
.ele
    overflow: hidden
    .ele-search
        width: 100%
.buyer-img
    display: flex
    overflow: hidden
    height: 1.9rem
    .buyer-img-content
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
        .item-desc
            line-height: .4rem
            color: #ccc
        .item-button
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
</style>
