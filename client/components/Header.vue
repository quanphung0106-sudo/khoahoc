<template>
    <header class="bg-white">
        <div class="header">
            <div class="header__top">
                <div class="header-logo">
                    <div v-if="!showInputField" class="header-logo__search cursor-pointer" @click="handleShowInputField"><i
                            class="material-icons">search</i>
                    </div>
                    <div v-if="showInputField" class="header-logo__search p-[10px] cursor-pointer"
                        @click="handleShowInputField"><i class="material-icons">close</i>
                    </div>

                    <div v-if="!showInputField" class="header-logo_content">
                        <div class="max-[479px]:hidden">
                            <NuxtLink href="/">
                                <img src="https://khoahoc.tv/themes/default/images/logo.png" alt="logo">
                            </NuxtLink>
                        </div>
                        <div class="min-[480px]:hidden">
                            <NuxtLink href="/">
                                <img src="https://khoahoc.tv/themes/default/images/logo.white.png" alt="logo">
                            </NuxtLink>
                        </div>
                    </div>
                    <van-cell v-if="!showInputField" class="header-popup__action" @click="showPopup">
                        <i class="material-icons">list</i></van-cell>
                    <van-popup :position="resElement >= 479 ? 'center' : 'left'"
                        :class="resElement >= 479 ? 'header-popup' : 'header-popup__sm'"
                        :closeable="resElement >= 479 ? true : false" close-icon="close" v-model:show="show">
                        <van-list class="list-menu list-menu__sm">
                            <van-cell class="list-menu__item" v-for="item in list" :key="item" :to="item.path">
                                <i class="material-icons">{{ item.icon }}</i>
                                <p>{{ item.title }}</p>
                            </van-cell>
                        </van-list>
                    </van-popup>
                    <van-field v-show="showInputField" class="header-field__input" v-model="sms" center clearable
                        placeholder="Được cải tiến bởi Google">
                    </van-field>
                </div>
                <van-cell-group class="header-field" inset>
                    <van-field class="header-field__input" v-model="sms" center clearable
                        placeholder="Được cải tiến bởi Google">
                        <template #button>
                            <van-button size="small" type="primary" style="background-color: #00796b">Send SMS</van-button>
                        </template>
                    </van-field>
                </van-cell-group>
                <div class="header-icon">
                    <i class="material-icons">
                        facebook
                    </i>
                </div>
            </div>
            <van-list class="list-menu">
                <van-cell class="list-menu__item" v-for="item in list" :key="item" :to="item.path">
                    <i class="material-icons">{{ item.icon }}</i>
                    <p>{{ item.title }}</p>
                </van-cell>
            </van-list>
        </div>

    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { routes } from '../utils/seed-data/index.js'

const list = routes.slice(0, 7)
const show = ref(false);
const showInputField = ref(false)
const resElement = ref(null);

const showPopup = () => {
    show.value = true;
};

const handleShowInputField = () => {
    // console.log(showInputField.value)
    showInputField.value = !showInputField.value;
};

onMounted(() => {
    resElement.value = window.innerWidth;
    window.addEventListener('resize', () => {
        resElement.value = window.innerWidth;
    });
});

</script>

<style  scoped>
.header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

}

:deep .list-menu .van-cell:hover {
    color: #ff0;
}

.header-popup__action {
    display: none;
    cursor: pointer;
}

.header-popup__action i {
    color: black;
}

.header-field {
    border: 1px solid #00796b;
    margin: 0;
    border-radius: 3px 0 0 3px;
}

.header-field__input {
    padding: 0;
    height: 30px;
}

:deep .header-field__input .van-button {
    height: 33px;
    border-radius: unset;
}
:deep .header-field__input .van-field__body input {
    min-width: 300px;
    max-width: 100%;
    padding-left: 10px;
    height: 100%;
}

.header-icon {
    display: flex;
    align-items: center;
}

.list-menu,
.list-menu__sm {
    display: flex;
    background-color: #00796b;
    color: white;
    justify-content: flex-start;
}

.list-menu {
    flex-wrap: wrap;
    height: 40px;
    overflow: hidden;
}

.list-menu__item {
    font-size: 17px;
    background-color: transparent;
    color: white;
    width: fit-content;
    cursor: pointer;
}

:deep .list-menu__item .van-cell__value {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 3px;
    color: white;
}

:deep .list-menu__item .van-cell__value:hover {
    color: #ff0;
}

.header-logo__search {
    display: none;
}

@media only screen and (max-width: 1023px) {
    .header {
        padding: 0 20px;
    }
}

@media screen and (max-width: 639px) {
    .header {
        align-items: flex-start;
        flex-direction: column !important;
        padding: 10px;
    }

    .header-field {
        margin: 0 auto;
        margin-top: 10px;
        width: 85%;
    }

    .header-icon {
        display: none;
    }

    .header__top {
        flex-direction: column;
    }

    .header-logo {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    .header-popup__action {
        display: flex;
        width: fit-content;
    }

    .header-popup {
        height: fit-content;
    }

    .header-popup i {
        top: 4px;
        right: 4px;
    }

    .header-popup .list-menu__sm {
        padding: 10px;
    }

    .list-menu {
        display: none;
    }

    .list-menu__sm {
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .list-menu__sm .list-menu__item {
        width: 100%;
    }
}



@media screen and (max-width: 479px) {
    .header {
        background-color: #00796b;
        padding: 5px;
    }

    .header-logo__search {
        display: flex;
    }

    .header-field {
        display: none;
    }

    .header-field__sm {
        display: flex;
    }

    .header__top {
        padding: 0;
    }

    .header-logo {
        flex-direction: row-reverse;
    }



    .header-popup__action {
        padding: 0;
    }

    .header-popup__action i,
    .header-logo i {
        color: #FFFFFF;
        background-color: #00796b;
        display: flex;
    }

    .list-menu__sm {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 18px 10px;
    }
}
</style>