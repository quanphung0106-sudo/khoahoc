<template>
    <div>
        <Swiper class="swiper-slider" :modules="[SwiperAutoplay, SwiperEffectCreative]" :pagination="true"
            :on-autoplay="true" :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }" :slides-per-view="1" :loop="true" :effect="'creative'" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
            <SwiperSlide v-for="slide in slides" :key="slide">
                <NuxtLink class="slide__link" :href="slide.path">
                    <img class="slide__img relative" :src="slide.img" :alt="slide.img" />
                    <span
                        class="slide__desc absolute z-20 bottom-5 left-5 right-5 p-[10px] bg-white text-base font-bold rounded-sm text-center">{{
                            slide.desc }}</span>
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const slides = [
    {
        img: 'https://e.khoahoc.tv/photos/image/2023/02/27/lo-den-sieu-lon-650-size-650x340-znd.jpg',
        path: '/',
        desc: 'Thứ trong ảnh không phải ngôi sao, mà là "con thú" khiến cả vũ trụ khiếp sợ'
    },
    {
        img: 'https://e.khoahoc.tv/photos/image/2023/02/27/pha-le-xanh-650-size-650x340-znd.jpg',
        path: '/',
        desc: 'Thứ trong ảnh không phải ngôi sao, mà là "con thú" khiến cả vũ trụ khiếp sợ'
    },
    {
        img: 'https://e.khoahoc.tv/photos/image/2023/02/27/lo-sau-650-size-650x340-znd.jpg',
        path: '/',
        desc: 'Thứ trong ảnh không phải ngôi sao, mà là "con thú" khiến cả vũ trụ khiếp sợ'
    },
]
</script>

<style scoped>
@media screen and (max-width: 639px) {

    .slide__link {
        position: relative;
    }

    .slide__desc {
        position: static;
        text-align: center;
        display: block;
    }

}

@media screen and (max-width: 1000px) {

    .swiper-slider {
        max-width: 500px;
    }

}

@media only screen and (max-width: 479px) {
    .swiper-slider {
        max-width: 320px;
    }
}
</style>