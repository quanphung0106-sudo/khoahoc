<template>
    <div>
        <Slider />
        <Readmore :list="list" :handleData="handleData">
            <Card :list="cardList" />
        </Readmore>
    </div>
</template>

<script setup>
const list = [
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/14/tau-vu-tru-ESCAPADE.jpg',
        title: 'Sao Kim gần Trái đất nhất, tại sao chúng ta không hạ cánh xuống sao Kim?',
        desc: 'Mới đây, tại Nhật Bản, một công ty về công nghệ sinh học đã giới thiệu một loại gan ngỗng nhân tạo được sản xuất từ phòng thí nghiệm.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2022/12/16/chung-cuong-loan-tap-the-1.jpg',
        title: 'Bộ não loài người đang nhỏ dần và tương lai sẽ khó xuất hiện thiên tài như Newton, Einstein',
        desc: 'Mỹ đang đối mặt với sự “xâm lược” của những đàn “siêu lợn” lai giữa lợn rừng và lợn nuôi, khi mà những biện pháp kiểm soát trước đây đều không hiệu quả.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/17/thac-yosemite.jpg',
        title: 'Giới thiệu về loài hổ và con hổ to nhất thế giới',
        desc: 'Các nhà nghiên cứu thiết kế máy phát điện nano mạnh nhất từ trước tới nay với điện áp 3.000 volt, mô phỏng cách cá đuối phóng điện để tự vệ.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/17/thac-gullfoss.jpg',
        title: 'Loài chim sát thủ chọc mù mắt và hạ gục rắn độc Châu Phi trong chớp mắt',
        desc: 'Các nhà nghiên cứu không ngờ lại có thể quay được cảnh tượng này ở nghĩa địa cá voi dưới đáy Nam Cực.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/28/ant-man.jpg',
        title: 'Video: Báo hoa mai bay người lên không trung bắt linh dương và cái kết',
        desc: 'Y đức là phẩm chất tốt đẹp của người làm công tác y tế, được biểu hiện ở tinh thần trách nhiệm cao, tận tuỵ phục vụ, hết lòng thương yêu chǎm sóc người bệnh.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/23/nu-cuoi-1.jpg',
        title: 'Khoa học lý giải vì sao chỉ cần nhìn khuôn mặt một người đủ biết họ có giàu hay không',
        desc: 'Đây là danh sách các hiện tượng tự nhiên bất thường và hiếm gặp nhất mà chúng ta sẽ thấy trong thế kỷ này đã được các nhà thiên văn học dự đoán.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/27/lo-den.jpg',
        title: ' "Nòng nọc vũ trụ" làm lộ chân tướng vật thể khoa học không thể lý giải ',
        desc: 'Các nhà nghiên cứu Trung Quốc đang chuẩn bị phóng gần 13.000 vệ tinh vào quỹ đạo tầm thấp của Trái đất như một phần kế hoạch thu gọn và có khả năng giám sát mạng Starlink.',
        path: '/#!'
    },
    {
        thumb: 'https://e.khoahoc.tv/photos/image/2023/02/22/chim-bach-thanh-bui-dau-xam.jpg',
        title: 'Loài chim sát thủ chọc mù mắt và hạ gục rắn độc Châu Phi trong chớp mắt',
        desc: 'Các nhà nghiên cứu không ngờ lại có thể quay được cảnh tượng này ở nghĩa địa cá voi dưới đáy Nam Cực.',
        path: '/#!'
    },
];

const cardList = ref([])
const handleData = (data) => {
    cardList.value = data
}
</script>

<style lang="scss" scoped></style>