<template>
    <div class="bkg"></div>
</template>

<script setup>
</script>

<style lang="scss">
.bkg{
    position: fixed;

    z-index: -1;

    width: 100dvw;
    height: 100dvh;

    background: var(--main-color);
    background: linear-gradient(150deg, var(--top-grad) -50%, var(--main-color) 50%, var(--bot-grad) 150%);
}
</style>