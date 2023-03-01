<template>
    <div>
        <van-pagination v-model="currentPage" :total-items="total" :items-per-page="limit"
            :force-ellipses="windowWidth >= 640 ? true : false" :show-page-size="showPageSize" :prev-text="false"
            @change="handleChange">
            <template #prev-text>
                Quay lại
            </template>
            <template #next-text>
                <span>Xem thêm</span>
            </template>
        </van-pagination>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const { total, limit } = defineProps(['total', 'limit', 'getData'])
const currentPage = ref(1)
const windowWidth = ref(null)
const { cat } = useRoute().params

const handleChange = async (data) => {
    await useFetch(`http://localhost:8800/api/news?cat=${cat}&page=${data}`, { key: cat })
}

const showPageSize = computed(() => {
    if (windowWidth.value < 640) return 1
})

onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
    });
});

</script>

<style scoped>
:deep .van-pagination {
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    line-height: 30px;
}

:deep .van-pagination__items {
    gap: 5px;
    justify-content: center;
}

:deep .van-pagination__items .van-pagination__item--disabled {
    display: none;
}

:deep .van-pagination__items .van-pagination__item {
    border-radius: 3px;
    padding: 0 10px;
    max-width: 90px;
    padding: 0 10px;
    border: 1px solid #ccc;
    margin: 0 5px;
    color: black;
}

:deep .van-pagination__items .van-pagination__item--prev,
:deep .van-pagination__items .van-pagination__item--next {
    max-width: 90px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 0 5px;
    color: black;
}

:deep .van-pagination__items .van-pagination__item--prev:hover,
:deep .van-pagination__items .van-pagination__item:hover,
:deep .van-pagination__items .van-pagination__item--next:hover {
    color: #00796b;
    background: #f8f8f8;
}

:deep .van-pagination__item--active {
    background: #f8f8f8;
}
</style>