<template>
    <div id="rightbar">
        <h1 class="rightbar-title">Tiêu điểm</h1>
        <Card :list="list" />
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

<style scoped>
#rightbar {
    width: 300px;
    grid-area: rightbar;
}

.rightbar-title {
    font-size: 20px;
    color: #00796b;
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin-bottom: 5px;
}

@media only screen and (max-width: 1023px) {
    #rightbar {
        /* width: 100%; */
    }
}
</style>