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

<style lang="scss">
    .menu{
    position: relative;

    width: 25dvw;
    height: 70dvh;

    background-color: var(--main-color);

    box-shadow: inset 0px 0px 6.9px 2px #ffffff52;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>