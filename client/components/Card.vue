<template>
    <div>
        <div class="card__container">
            <NuxtLink v-for="(data, index) in list" :key="index" :href="data.path" class="card__link">
                <van-card :class="{ 'van-card__res': data.desc }" :title="data.title" :thumb="data.thumb"
                    :desc="data.desc ? data.desc : ''" />
            </NuxtLink>
        </div>
    </div>
</template>
  
<script setup>
const { list } = defineProps(['list']);
</script>

<style  scoped>
.van-card {
    padding: 10px 0;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
}

:deep .van-card__res .van-card__header .van-card__content .van-card__title {
    font-size: 23px;
    line-height: 30px;
}

:deep .van-card__res .van-card__header .van-card__content .van-card__desc {
    font-size: 14px;
    line-height: 24px;
}

:deep .van-card .van-card__header .van-card__title,
:deep .van-card .van-card__header .van-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: normal;
    display: -webkit-box !important;
}

:deep .van-card .van-card__header .van-ellipsis {
    overflow: unset;
}

.card__link:hover :deep {
    cursor: pointer;
}

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


@media only screen and (min-width: 1279px) {
    :deep .van-card__res .van-card__thumb {
        width: 200px;
        height: 150px;
    }

    :deep .van-card__content {
        -webkit-line-clamp: 4;
    }
}

@media only screen and (min-width: 1001px) and (max-width: 1279px) {
    :deep .van-card__res .van-card__thumb {
        width: 200px;
        height: 150px;
    }
}

@media only screen and (max-width: 1000px) {
    :deep .van-card__res .van-card__thumb {
        width: 150px;
        height: 100px;
    }

    :deep .van-card .van-card__header .van-card__title,
    :deep .van-card .van-card__header .van-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        white-space: normal;
        display: -webkit-box !important;
    }

    :deep .van-card__res .van-card__header .van-card__content .van-card__title {
        font-size: 18px;
    }
}

@media only screen and (max-width: 639px) {
    :deep .van-card__res .van-card__header .van-card__content .van-card__title {
        font-size: 14px;
    }
}

@media only screen and (max-width: 479px) {
    :deep .van-card__res .van-card__header .van-card__content .van-card__title {
        font-size: 14px;
    }
}
</style>