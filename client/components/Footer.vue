<template>
    <footer class="flex items-center justify-between py-5 mx-5 border-t-[1px] border-[#00796b]">
        <van-list class="flex items-center justify-start gap-3">
            <NuxtLink href="/"><van-cell title="Trang chủ" /></NuxtLink>
            <NuxtLink href="/"><van-cell title="Liên hệ" /></NuxtLink>
            <NuxtLink href="/"><van-cell title="Bảo mật" /></NuxtLink>
            <NuxtLink href="/"><van-cell title="Facebook" /></NuxtLink>
        </van-list>
        <span>Copyright © 2023 KhoaHoc.tv</span>
    </footer>
</template>

<script setup>

</script>

<style  scoped>
:deep .van-cell {
    padding: 0;
}

:deep .van-cell__title:hover {
    color: #00796b
}

@media screen and (max-width: 639px) {
    footer {
        flex-direction: column;
    }
}
</style>