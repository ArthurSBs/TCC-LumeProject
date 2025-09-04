<script setup>
import ActivityCard from '@/components/design-components/ActivityCard.vue';
import BlankMenu from '@/components/design-components/BlankMenu.vue';
import TaskRow from '@/components/design-components/TaskRow.vue';
import Sidebar from '@/components/menus/Sidebar.vue';

import { ref, onMounted, onBeforeUnmount } from 'vue';

const horizontalScroll = ref(null);

function onWheel(e) {
  if (!horizontalScroll.value) return;
  
  if (e.deltaY !== 0) {
    e.preventDefault();
    horizontalScroll.value.scrollLeft += e.deltaY;
  }
}

onMounted(() => {
  if (horizontalScroll.value) {
    horizontalScroll.value.addEventListener('wheel', onWheel, { passive: false });
  }
});

onBeforeUnmount(() => {
  if (horizontalScroll.value) {
    horizontalScroll.value.removeEventListener('wheel', onWheel);
  }
});

</script>

<template>
    <div class="layout ">
        <Sidebar class="on-top"/>
        <div class="sections-container">
            <div class="menu-section">
                <BlankMenu class="user-info-area">
                    <div class="user-picture-container">
                        <div class="user-picture">
                            <div class="user-status"></div>
                        </div>
                    </div>
                    <div class="user-id-container">
                        <p class="profile-id">ID: 957ff112</p>
                    </div>
                    <div class="user-info-container">
                        <p>Nome: Arthur S. Barbosa</p>
                        <p>Sala: 3DS</p>
                        <p>Rank: #67</p>
                        <p>Email: arthur@etec.sp.gov.br</p>
                    </div>
                </BlankMenu>
                
                <BlankMenu class="user-stats-area">

                </BlankMenu>
            </div>
            <div class="menu-section">
                <BlankMenu class="class-activity-area">
                    <div class="activity-card-layout" ref="horizontalScroll">
                        <ActivityCard class="activity-card"/>
                        <ActivityCard class="activity-card"/>
                        <ActivityCard class="activity-card"/>
                        <ActivityCard class="activity-card"/>
                        <ActivityCard class="activity-card"/>
                        <ActivityCard class="activity-card"/>
                        <ActivityCard class="activity-card"/>
                    </div>
                </BlankMenu>
            </div>
            <div class="menu-section">
                <BlankMenu class="task-activity-area">
                    <div class="task-row-layout">
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                        <TaskRow class="task-row"></TaskRow>
                    </div>
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

    display: flex;
    flex-direction: column;

    color: var(--text-color);

    .user-picture-container {
        //border: solid 1px green;

        width: 100%;
        height: 45%;

        display: flex;
        justify-content: center;
        align-items: center;

        .user-picture{
            width: 5dvw *1.25;
            height: 11dvh *1.25;

            background-color: var(--top-grad);

            border-radius: 50%;
            
            display: flex;
            justify-content: right;
            align-items: end;

            .user-status{
                width: 5dvw * .25;
                height: 11dvh *.25;

                background-color: #a5dda5;

                border-radius: 50%;

                margin-right: 5px;
                margin-bottom: 5px;
            }
        }
    }

    .user-id-container{
        width: 100%;
        height: 3%;

        text-align: center;
        font-size: 10px;
    }

    .user-info-container{
        //border: solid 1px green;

        text-align: left;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;

        width: 100%;
        height: 50%;

        padding-left: 2dvw;
    }
}

.user-stats-area{
    height: 45dvh;
    width: 80%;

    border-radius: 5px;
}

.class-activity-area{
    height: 45dvh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    .activity-card-layout{
        //border: solid 1px green;

        overflow-x: auto;
        overflow-y: hidden;

        height: 85%;
        width: 97.5%;

        display: flex;
        justify-content: left;
        align-items: center;

        gap: 2rem;

        padding: .5rem;
    }

    .activity-card{
        height: 95%;
        min-width: 15%;
        max-width: 15%;
        flex-shrink: 0;
        flex-grow: 0;
    }

    ::-webkit-scrollbar{
    height: 5px;
    }
    ::-webkit-scrollbar-track{
        height: 5px;
        background: var(--main-color);
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--scroll-color-light);
        border-radius: 10px;
        border: 2px solid transparent;

        &:hover{
        background-color: var(--scroll-light-hover);
        }
    }
}

.task-activity-area{
    height: 45dvh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    .task-row-layout{

        overflow-x: hidden;
        overflow-y: auto;

        height: 85%;
        width: 97.5%;

        display: flex;
        flex-direction: column;

        gap: 1rem;

        padding: .5rem;
    }

    .task-row{
        width: 100%;
        min-height: 12.5%;
        
        flex-shrink: 0;

        transition: box-shadow 0.3s ease, transform 0.3s ease;
        &:hover{
            transition: box-shadow 0.3s ease, transform 0.3s ease;

            transform: scale(1.005);
            box-shadow: inset 0px 0px 6.9px 4px #ffffff25;
        }
    }

    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-track{
        height: 5px;
        background: var(--main-color);
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--scroll-color-light);
        border-radius: 10px;
        border: 2px solid transparent;

        &:hover{
        background-color: var(--scroll-light-hover);
        }
    }
}

</style>