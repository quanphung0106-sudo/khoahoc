<template>
    <div class="flex items-center gap-1">
        <NuxtLink href="/" class="h-6"><i class="material-icons">home</i></NuxtLink>
        <div class="flex items-center gap-1">
            <i class="material-icons text-xs text-[#ccc]">arrow_forward_ios</i>
            <NuxtLink :href="`/cats/${breadcrumbs}`" class="hover:text-[#00796b]">
                <span class="text-[14px]">{{ breadcrumbs }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const breadcrumbs = useRoute().fullPath.split('/').filter((segment) => segment !== '')[1]

</script>

<style scoped>
.breadcrumbs__home-icon {
    height: 24px;
}
</style>