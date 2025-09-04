<script setup>
import BlankMenu from '@/components/design-components/BlankMenu.vue';
import Sidebar from '@/components/menus/Sidebar.vue';

</script>

<template>
    <div class="layout ">
        <Sidebar class="on-top"/>
        <div class="sections-container">
            <div class="menu-section">
                <BlankMenu class="user-info-area">

                </BlankMenu>
                
                <BlankMenu class="user-stats-area">

                </BlankMenu>
            </div>
            <div class="menu-section">
                <BlankMenu class="class-activity-area">

                </BlankMenu>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
:root{
    --gap-between: 1rem;
}
</style>

<style scoped lang="scss">

.on-top{
    z-index: 5;
}

.layout{
    display: flex;
    flex-direction: row;

    overflow: visible;
}

.sections-container{
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-direction: column; // stack sections vertically
}

.menu-section{
    padding: 1rem;

    display: flex;
    
    
    gap: var(--gap-between);
}

.user-info-area{
    height: 45dvh;
    width: 20%;

    border-radius: 5px;
}

.user-stats-area{
    height: 45dvh;
    width: 80%;

    border-radius: 5px;
}

.class-activity-area{
    height: 45dvh;
    width: 100%;

    border-radius: 5px;
}

</style>