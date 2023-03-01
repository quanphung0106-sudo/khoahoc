<template>
    <div>
        <slot :list="listData" />
        <div class="border-t border-[#eee] flex justify-center pt-[10px] mb-[10px]"> <van-button class="rounded-[3px] hover:bg-[#f8f8f8] hover:text-[#008000]" @click="handleClick">{{ list.length > limitElement ? 'Xem thêm' : 'Thu gọn' }}</van-button></div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const { list, handleData } = defineProps(['list', 'handleData'])
const limitElement = ref(5);
const listData = computed(() => {
    const newArr = list.slice(0, limitElement.value)
    handleData(newArr)
    return newArr
})

const handleClick = () => {
    if (list.length > limitElement.value) {
        limitElement.value += 5;
    } else {
        limitElement.value = 5;
    }
}
</script>
