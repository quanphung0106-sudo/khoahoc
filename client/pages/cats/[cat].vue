<template>
    <div>
        <Card :list="data?.data" />
        <Pagination :total="data?.total" :limit="data?.limit"/>
    </div>
</template>

<script setup>
const { cat } = useRoute().params
const { data } = await useFetch(`http://localhost:8800/api/news?cat=${cat}`, { key: cat })
</script>

<style lang="scss" scoped></style>