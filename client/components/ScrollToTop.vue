<template>
    <div>
        <van-button id="scroll-to-top" @click="handleClick">
            <i class="material-icons">expand_less</i>
        </van-button>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const isScroll = ref(false);
const handleScroll = () => {
    if (window.scrollY >= 100) isScroll.value = true;
}

const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

</script>

<style scoped>
#scroll-to-top {
    position: fixed;
    bottom: 50px;
    right: 50px;
}
</style>