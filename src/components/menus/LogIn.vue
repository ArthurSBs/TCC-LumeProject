<template>
    <BlankMenu>   
        <div class="menu-container">
            <div class="logo link" @click="changeToPage('Main')"></div>
            <div class="main-container center-align">
                <p class="subtext-top">Bem vindo de volta ao <span class="hl-text-blue">Lume</span>!</p>

                <form action="log-in" class="input-container">
                    <div class="data-container center-align">
                        <input type="email" name="text-input" class="text-input" placeholder="Email">
                        <input type="password" name="text-input" class="text-input" placeholder="Senha">
                    </div>
                    <p class="subtext">Não possui uma conta? <span class="link hl-text-blue" @click="goToSignin">Cadastrar</span>.</p>

                    <div class="btn-container center-align">
                        <button type="submit" class="link submit-btn" @click="changeToPage('Dashboard')">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </BlankMenu> 
</template>

<script setup>
import { changeToPage } from '@/router';
import BlankMenu from '../design-components/BlankMenu.vue';
import SignIn from './SignIn.vue';

const emit = defineEmits(['change-view'])

const goToSignin = () => {
    emit('change-view', SignIn)

    console.log('AAAAA CLICOU')
}
</script>

<style scoped lang="scss"">
@import url(@/assets/specific-styles/log-user.scss);
</style>