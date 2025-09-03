<script setup>
import Sidebar from '@/components/menus/Sidebar.vue';

</script>

<template>
    <div class="layout">
        <Sidebar/>
        <div class="sections-container">
            <div class="section-top">
                <div class="merda"></div>
            </div>
            <div class="section-top">
                <div class="merda"></div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
.layout{
    display: flex;
    flex-direction: row;
    height: 100%;

    gap: 15px;
}

.sections-container{
    display: flex;
    flex-direction: column; // stack sections vertically
    gap: 15px;
}

.section-top{
    width: 100%;
    border: solid 1px green;

    display: flex;
}

.merda{
    height: 30dvh;
    width: 20dvw;

    background-color: red;
}

</style>