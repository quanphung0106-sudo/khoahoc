<template>
    <div>
        <NuxtLink v-for="data in list" :key="index" :href="data.path" class="card__link">
            <van-card :title="data.title" :thumb="data.thumb" :desc="data.desc ? data.desc : ''" />
        </NuxtLink>
    </div>
</template>

<script setup>

const { list } = defineProps(['list'])
</script>

<style  scoped>
.van-card {
    padding: 10px 0;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
}

:deep .van-card .van-card__header .van-card__content {}

.card__link:hover :deep .van-card .van-card__header .van-card__content .van-card__title {
    color: #00796b
}

:deep .van-card .van-card__thumb .van-image img {
    border-radius: 3px;
}

:deep .van-card .van-card__content .van-card__title {
    display: block;
    overflow: unset;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    max-height: fit-content;
}
:deep .van-card .van-card__content .van-card__desc {
   white-space: normal;
}

@media only screen and (max-width: 1000px) {
    .van-card {
    }
}
@media only screen and (max-width: 639px) {
    .van-card {
    }
}

@media only screen and (max-width: 479px) {
    .van-card {
    }
}
</style>