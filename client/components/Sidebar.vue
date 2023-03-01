<template>
    <div id="sidebar">
        <van-list class="list-menu flex flex-col">
            <van-cell class="list-menu__item" :icon="item.icon" v-for="item in list" :key="item" :title="item.title"
                :to="item.path" />
        </van-list>
    </div>
</template>
<!-- class="max-[1000px]:hidden" -->

<script setup>
const list = [
    {
        icon: 'shop',
        title: 'Công nghệ mới',
        path: '/cats/cong-nghe-moi',
    },
    {
        icon: 'shop',
        title: 'Phần mềm hữu ích',
        path: '/cats/phan-mem-huu-ich'
    },
    {
        icon: 'shop',
        title: 'Khoa học máy tính',
        path: '/cats/khoa-hoc-may-tinh'
    },
    {
        icon: 'card',
        title: 'Phát minh khoa học',
        path: '/cats/phat-minh-khoa-hoc'
    },
    {
        icon: 'shop',
        title: 'AI - Trí tuệ nhân tạo',
        path: '/cats/ai-tri-tuu-nhan-tao'
    },
    {
        icon: 'shop',
        title: 'Khám phá khoa học',
        path: '/cats/kham-pha-khoa-hoc'
    },
    {
        icon: 'shop',
        title: 'Sinh vật học',
        path: '/cats/sinh-vat-hoc'
    },
    {
        icon: 'shop',
        title: 'Khảo cổ học',
        path: '/cats/khao-co-hoc'
    },
    {
        icon: 'shop',
        title: 'Đại dương học',
        path: '/cats/dai-duong-hoc'
    },
    {
        icon: 'shop',
        title: 'Thế giới động vật',
        path: '/cats/the-gioi-dong-vat'
    },
    {
        icon: 'shop',
        title: 'Danh nhân thế giới',
        path: '/cats/danh-nhan-the-gioi'
    },
    {
        icon: 'shop',
        title: 'Khoa học vũ trụ',
        path: '/cats/Khoa-hoc-vu-tru'
    },
    {
        icon: 'shop',
        title: '1001 bí ẩn',
        path: '/cats/1001-bi-an'
    },
    {
        icon: 'shop',
        title: 'Danh nhân thế giới',
        path: '/cats/danh-nhan-the-gioi'
    },
];
</script>

<style  scoped>
#sidebar {
    width: 200px;
    grid-area: sidebar;
}

.list-menu__item {
    padding: 8px 0;
    cursor: pointer;
}

.list-menu__item:hover {
    color: #008000;
}

:deep .van-list .van-cell__title {
    font-size: 16px;
}

@media only screen and (max-width: 1279px) {
    #sidebar {
        width: 100%;
    }

    .van-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>