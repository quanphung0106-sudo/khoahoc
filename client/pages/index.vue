<template>
    <div>
        <Slider />
        <Readmore :list="list.data" :handleData="handleData">
            <Card :list="cardList"/>
        </Readmore>
    </div>
</template>

<script setup>
const { data: list } = await useFetch('http://localhost:8800/api/news?limit=0')
const cardList = ref([])
const handleData = (data) => {
    cardList.value = data
}
</script>

<style lang="scss" scoped></style>