<template>
    <div class="menu">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BlankMenu",
}
</script>

<style scoped lang="scss">
    .menu{
    position: relative;

    background-color: var(--main-color);

    box-shadow: inset 0px 0px 6.9px 2px #ffffff52;
    border-radius: 25px;
}
</style>