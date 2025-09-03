<script setup>
import Sidebar from '@/components/menus/Sidebar.vue';

</script>

<template>
    <div class="layout">
        <Sidebar/>
        <div class="sections-container">
            <div class="menu-section">
                <div class="merda"></div>
            </div>
            <div class="menu-section">
                <div class="merda"></div>
            </div>
            <div class="menu-section">
                <div class="merda"></div>
            </div>
            <div class="menu-section">
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

    padding-top: 15px;

    gap: 15px;
}

.menu-section{
    width: 100%;
    border: solid 1px green;

    display: flex;
    
    gap: 15px;
}

.merda{
    height: 30dvh;
    width: 20dvw;

    background-color: red;
}

</style>