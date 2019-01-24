<template>
    <div class="icons">
        <router-link to="./pig">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">猪(目前开发阶段只有点击这个有效)</p>
        </div>
        </router-link>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">test</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">test</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">test</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">none</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">null</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">null</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">null</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">null</p>
        </div>


        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">null</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
            </div>
            <p class="icon-desc">null</p>
        </div>

    </div>
</template>

<script>

export default {
    name:'icon',
    methods: {
        // goPig () {
        //     this.$router.push({path:'/pig'});
        // }
    }
}
</script>
<style lang="stylus" scoped>
.icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
        overflow: hidden
        float: left
        height: 0
        width: 25%
        padding-bottom: 25%
        position: relative
        touch-action: none
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            // 下面是图片居中处理
            .icon-img-content
                display: block
                margin: 0 auto 
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            color: #333
            text-align: center
            touch-action: none

</style>
