<template>
    <div class="container center-align">
        <div class="main">
            <div class="section main-section center-align">
                <div class="title-container center-align"><h2>Seja Bem Vindo ao <span class="hl-text-orange">Lume!</span></h2></div>
                <p class="explanation-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi tenetur temporibus odit dolor debitis sequi vero veniam unde voluptate incidunt quia, deleniti cupiditate nulla deserunt in, quisquam molestias qui!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cupiditate reiciendis qui mollitia. Laborum esse cupiditate possimus magnam, similique exercitationem, consectetur dicta dolor fuga quos sunt repellat ea ex modi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nisi molestias. Alias odio consequatur nihil in earum necessitatibus laboriosam, rem enim est, suscipit ut iusto ab dolorem maiores unde eaque.
                </p>
                <div class="button-container center-align"><input type="button" @click="changeToPage('LogUser')" value="Iniciar"></div>
            </div>
            <div class="section secondary-section"></div>
        </div>
    </div>
</template>

<script setup>
import { changeToPage } from '@/router';
</script>

<style lang="scss">
/*{
    border: solid 1px green;
}*/

.container{
    width: 100%;
    height: 100vh;

}
.main{
    height: 80vh;
    width: 80%;
    display: flex;

    border-radius: 10px;
    
    overflow: hidden;

}
.section{
    height: 100%;
    

}
.main-section{
    width: 80vh;

    justify-content: space-between;
    flex-direction: column;

    padding-inline: 50px;

    background-color: var(--main-color);

    border-right: var(--contrast-border);
    box-shadow: inset .25px 0px 10px .5px #ffffffa1;

   .title-container{
    margin-top: 50px;

    h2{
        font-size: 40px;
        color: var(--text-color);
        span{
            color: var(--main-orange-secondary);
        }
    }
   }
   .explanation-text{
    height: 60%;

    display: flex;
    align-items: center;

    font-size: 20px;
    color: var(--text-color);
    text-align: justify;
   }
   .button-container{
    width: 100%;
    height: 5.5vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 50px;

    input[type="button"]{
        height: 100%;
        width: 10vw;
        font-size: 15px;
        border-radius: 5px;
        background-color: var(--main-orange-secondary);
        color: var(--text-color);
        border: none;
        cursor: pointer;
    }
   }
}
.secondary-section{
    flex: 1;
    background-color: var(--main-blue-secondary);
    box-shadow: inset -.25px 0px 10px .5px #ffffffa1;
}
</style>