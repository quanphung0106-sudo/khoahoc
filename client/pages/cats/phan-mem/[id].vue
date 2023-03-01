<template>
    <div>
        <div class="post-detail">
            <Breadcrumbs />
            <h1 class="text-2xl leading-[34px] font-bold mb-[10px]">{{ data?.title }}</h1>
            <div class="post-detail__rating">
                <Rating :rate="data?.rating ?? 3" />
                <div class="post-detail__rating-views">
                    <i class="material-icons h-6">visibility</i>
                    <span>276</span>
                </div>
            </div>
            <div class="post-detail__content">
                <p>{{ data?.content }}</p>
                <div class="post-detail__content-img">
                    <img :src="data?.thumb" :alt="data?.imgDesc">
                    <p>{{ data.imgDesc }}</p>
                </div>
            </div>
        </div>
        <Card :tag="getTag" :list="listData.data" header="Phần mềm" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const getTag = useRoute().fullPath.split('/').filter((segment) => segment !== '')[1]
const { data } = await useFetch(`http://localhost:8800/api/news/${id}`, { key: id })
const {data: listData} = await useFetch(`http://localhost:8800/api/news/?cat=${getTag}`, { key: getTag })

console.log(listData.value)

if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found!!!', fatal: true })
}
</script>

<style scoped>
.post-detail__rating {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.post-detail__rating-views {
    display: flex;
    align-items: center;
    gap: 5px;
}
.post-detail__content-img {
    margin: 10px 0;
}

.post-detail__content-img img {
    width: 100%;
    object-fit: cover;
}

.post-detail__content-img p {
    text-align: center;
    margin-top: 15px;
}

</style>