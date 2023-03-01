<template>
    <div>
        <div class="post-detail">
            <h1></h1>
        </div>
    </div>
</template>

<script setup>
const id = useRoute().params

// console.log(id)
const { data } = await useFetch(`http://localhost:8800/api/${id}`, { key: id })
// console.log(data)
// if (!post.value) {
//     throw createError({ statusCode: 404, statusMessage: 'Product not found!!!', fatal: true })
// }
</script>

<style lang="scss" scoped></style>