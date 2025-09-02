<template>
    <BlankMenu>   
        <div class="logo link" @click="changeToPage('Main')"></div>
        <div class="main-container center-align">
            <p>Bem vindo ao <span class="hl-text-blue">Lume</span>!</p>

            <form action="log-in" class="input-container">

                <div class="data-container center-align">
                    <input type="email" name="text-input" class="text-input" placeholder="Email">
                    <input type="password" name="text-input" class="text-input" placeholder="Senha">
                    <input type="password" name="text-input" class="text-input" placeholder="Confirmar Senha">
                </div>
                <p class="subtext">Já possui uma conta? <span class="link hl-text-blue" @click="goToLogin">Entrar</span>.</p>

                <div class="btn-container center-align">
                    <button type="submit" class="link submit-btn">Cadastrar</button>
                </div>
            </form>
        </div>
    </BlankMenu> 
</template>

<script setup>
import { changeToPage } from '@/router';
import BlankMenu from '../design-components/BlankMenu.vue';
import LogIn from './LogIn.vue';

const emit = defineEmits(['change-view'])

const goToLogin = () => {
    emit('change-view', LogIn)
}
</script>

<style scoped lang="scss">
/*{
    border: solid 1px green;
}*/

.center-align{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.logo{
    &:hover{
        transition: box-shadow 0.3s ease, transform 0.3s ease;

        transform: scale(1.05);
        box-shadow: inset 0px 0px 6.9px 4px #ffffff52;
    }

    transition: box-shadow 0.3s ease, transform 0.3s ease;

    margin-top: 5dvh;

    position: relative;

    width: 7.25dvw*1.15;
    height: 15dvh*1.15;

    background-color: gray;
    
    border-radius: 50%;
}

.main-container{
    width: 90%;
    height: 60%;

    flex-direction: column;
}

.input-container{
    width: 90%;
    height: 75%;

    flex-direction: column;
}
.data-container{
    height: 60%;
    justify-content: space-between;
    flex-direction: column;
}
.text-input{
    width: 100%;
    height: 5dvh;

    border-radius: 4px;
    border: none;

    padding-left: 10px;
    text-align: left;
}

.subtext{
    margin-top: 10px;
}

.btn-container{
    height: 40%;
    flex-direction: column;
}

.submit-btn{
    height: 5dvh;
    width: 7.75dvw;

    border-radius: 5px;
    border: none;

    color: var(--text-color);
    background-color: var(--btn-color-blue);
    font-size: 18px;

    transition: box-shadow 0.3s ease, transform 0.3s ease;
    &:hover{
        transition: box-shadow 0.3s ease, transform 0.3s ease;

        transform: scale(1.05);
        box-shadow: inset 0px 0px 6.9px 4px #ffffff52;
    }
}

p{
  color: var(--text-color);
}

</style>