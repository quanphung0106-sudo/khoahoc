<template>
    <div id="sidebar">
        <van-list class="list-menu flex flex-col">
            <van-cell class="list-menu__item" v-for="item in routes" :key="item" :to="item.path">
                <i class="material-icons">{{ item.icon }}</i>
                <p>{{ item.title }}</p>
            </van-cell>
        </van-list>
    </div>
</template>

<script setup>
import { routes } from '../utils/seed-data/index.js'
</script>

<style  scoped>
#sidebar {
    width: 200px;
    grid-area: sidebar;
}

.list-menu__item {
    padding: 8px 0;
    cursor: pointer;
}

:deep .list-menu__item .van-cell__value {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 3px;
    font-weight: 400;
    color: black;
}

:deep .list-menu__item .van-cell__value:hover {
    color: #008000;
}
:deep .van-list .van-cell__title {
    font-size: 16px;
}

@media only screen and (max-width: 1279px) {
    #sidebar {
        width: 100%;
    }

    .van-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>