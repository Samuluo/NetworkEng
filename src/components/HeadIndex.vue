<template>
    <div class="site-top">
        <div class="site-branding">
            <span class="site-title">
                <span class="logolink moe-mashiro">
                    <a href="/">
                        <span class="sakurasono">我是头</span>
                        <span class="shironeko">粪</span>
                    </a>
                </span>
            </span>
        </div>
        <div class="searchbox search-form-submit">
            <i class="iconfont js-toggle-search iconsearch icon-search">
            </i>
        </div>
        <div id="show-nav" class="showNav mobile-fit">
            <div class="line line1">
            </div>
            <div class="line line2">
            </div>
            <div class="line line3">
            </div>
        </div>
        <div class="lower-cantiner">
            <div class="lower">
                <nav class="mobile-fit-control hide">
                     <i class="fa fa-archive faa-shake" aria-hidden="true"></i>

                </nav>
            </div>
        </div>
    </div>
</template>

<script>

    import goIntoNormalMode from '../assets/js/main'
    export default {
        name: "HeadIndex",
        mounted(){
                goIntoNormalMode();
        }
    }
</script>

<style scoped>
    @import "../assets/css/page.css";
    @import "../assets/css/lib.min.css";
    .site-top {
        width: 100%;
        display: block;
        margin: 0 auto;
        padding: 0 20px;
    }
    .site-title {
        margin: 0;
    }
</style>
