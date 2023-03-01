<template>
    <div>
        <van-rate v-model="data" :readonly="true" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" />
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
const { rate } = defineProps(["rate"])
const data = ref(rate)
computed(() => {
    data.value = rate;
})
</script>

<style lang="scss" scoped></style>