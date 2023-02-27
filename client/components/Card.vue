<template>
    <div>
        <NuxtLink v-for="data in list" :key="index" :href="data.path" class="card__link">
            <van-card :title="data.title" :thumb="data.thumb" />
        </NuxtLink>
    </div>
</template>

<script setup>
const list = [
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/23/sao-kim-200-size-80x80-znd.jpg',
        title: 'Sao Kim gần Trái đất nhất, tại sao chúng ta không hạ cánh xuống sao Kim?',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/21/Einstein-and-Newton-200-size-80x80-znd.jpg',
        title: 'Bộ não loài người đang nhỏ dần và tương lai sẽ khó xuất hiện thiên tài như Newton, Einstein',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2019/08/08/loai-ho-200-size-80x80-znd.jpg',
        title: 'Giới thiệu về loài hổ và con hổ to nhất thế giới',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/22/chim-bach-thanh-tan-cong-ran-200-size-80x80-znd.jpg',
        title: 'Loài chim sát thủ chọc mù mắt và hạ gục rắn độc Châu Phi trong chớp mắt',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/18/bao-bay-nguoi-bat-linh-duong-200-size-80x80-znd.jpg',
        title: 'Video: Báo hoa mai bay người lên không trung bắt linh dương và cái kết',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/23/ty-phu-200-size-80x80-znd.jpg',
        title: 'Khoa học lý giải vì sao chỉ cần nhìn khuôn mặt một người đủ biết họ có giàu hay không',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/21/nong-noc-vu-tru-200-size-80x80-znd.jpg',
        title: ' "Nòng nọc vũ trụ" làm lộ chân tướng vật thể khoa học không thể lý giải ',
        path: '/#!'
    },
];
</script>

<style  scoped>
.van-card {
    padding: 10px 0;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
}

.card__link:hover :deep .van-card .van-card__header .van-card__content .van-card__title {
    color: #00796b
}

:deep .van-card .van-card__thumb .van-image img {
    border-radius: 3px;
}

:deep .van-card .van-card__content .van-card__title {
    display: block;
    overflow: unset;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    max-height: fit-content;
}
</style>