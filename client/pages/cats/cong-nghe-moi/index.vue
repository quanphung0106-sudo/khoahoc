<template>
    <div>
        <Breadcrumbs />
        <Card :list="data?.data" :tag="tag" />
        <Pagination :total="data?.total" :limit="data?.limit" :tag="tag" />
    </div>
</template>

<script setup>
const tag = "cong-nghe-moi"
const { data } = await useFetch(`http://localhost:8800/api/news?cat=${tag}`, { key: tag })
</script>

<style lang="scss" scoped></style>