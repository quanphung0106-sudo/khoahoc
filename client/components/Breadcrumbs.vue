<template>
    <div class="flex items-center gap-1">
        <NuxtLink href="/" class="h-6"><i class="material-icons">home</i></NuxtLink>
        <div v-for="(route, index) in routes" :key="index" class="flex items-center gap-1">
            <i class="material-icons text-xs text-[#ccc]">arrow_forward_ios</i>
            <NuxtLink :href="route.path" class="hover:text-[#00796b]">
                <span class="text-[14px]">{{ route.title }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const routes = [
    {
        path: '/cong-nghe-moi',
        title: 'Công nghệ mới'
    },
]
</script>

<style scoped>
.breadcrumbs__home-icon {
    height: 24px;
}
</style>