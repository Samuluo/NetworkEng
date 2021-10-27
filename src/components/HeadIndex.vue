<template>
    <!--<div class="site-top">
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
    </div>-->
    <div id="header" style="opacity: 1;">
        <div class="scrollCls" id="scrollInfo" style="width: 0%"></div>
        <div class="site-branding" id="blogTitle">
        <span class="logolink moe-mashiro">
            <a href="/" alt="我是头粪">
                <ruby>
                    <span class="sakuraso">我是头</span>
                    <span class="no"></span>
                    <span class="shironeko">粪</span>
                    <rt class="chinese-font">我是头粪</rt>
                </ruby>
            </a>
        </span>
        </div>
        <!--<a href="#" class="cd-top faa-float animated cd-fade-out" style="top: -900px;"></a>
        <div class="esa-mobile-menu"></div>-->
        <div id="navigator">
            <ul id="navList">
                <li><a id="nav_sitehome" class="menu">首页</a> </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "HeadIndex",
    }
</script>

<style scoped>
    @import "../assets/css/page.css";
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
