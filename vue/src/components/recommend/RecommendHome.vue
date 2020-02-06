<template>
    <div>
        <link rel="stylesheet" type="text/css"  href="http://localhost:8081/css/re_import.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/plugin/ion.rangeSlider.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/plugin/ion.rangeSlider.skinHTML5.css">
        <link rel="stylesheet"  type="text/css" href="http://localhost:8081/css/plugin/uniform.css">
        <link rel="stylesheet"  type="text/css" href="http://localhost:8081/css/plugin/jquery.scrollbar.css">
        <link rel="stylesheet" type="text/css"  href="http://localhost:8081/css/plugin/selectric.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/re_layout.css">
        <link rel="stylesheet" type="text/css" href=" http://localhost:8081/css/danawaCommon.css">
        <link rel="stylesheet" type="text/css" href=" http://localhost:8081/css/danawaCompare.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/danawaTheme.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/danawaHome.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/dnawaAuto.css">
        <Tab></Tab>
        <router-view />

    </div>
</template>
<script>

    import Tab from "@/components/recommend/RecommendTab.vue"

    export default{
        components:{Tab}
    }
</script>
<style scoped></style>