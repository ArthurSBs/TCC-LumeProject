<template>
    <BlankMenu>   
        <div class="menu-container">
            <div class="logo link" @click="changeToPage('Main')"></div>
            <div class="main-container center-align">
                <p class="subtext-top">Bem vindo ao <span class="hl-text-blue">Lume</span>!</p>

                <form action="log-in" class="input-container">
                    <div class="data-container center-align">
                        <input type="email" name="text-input" class="text-input" placeholder="Email">
                        <input type="password" name="text-input" class="text-input" placeholder="Senha">
                        <input type="password" name="text-input" class="text-input" placeholder="Confirmar Senha">
                    </div>
                    <p class="subtext">Já possui uma conta? <span class="link hl-text-blue" @click="goToLogin">Entrar</span>.</p>

                    <div class="btn-container center-align">
                        <button type="submit" class="link submit-btn" @click="changeToPage('Dashboard')">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </BlankMenu> 
</template>

<script scoped setup>
import { changeToPage } from '@/router';
import BlankMenu from '../design-components/BlankMenu.vue';
import LogIn from './LogIn.vue';

const emit = defineEmits(['change-view'])

const goToLogin = () => {
    emit('change-view', LogIn)
}
</script>

<style scoped lang="scss"">
@import url(@/assets/specific-styles/log-user.scss);
</style>