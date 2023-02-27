<template>
    <div class="main-layout">
        <div class="main-layout__wrapper">
            <Header />
            <!-- output the page content -->
            <main :class="`main-content main-content-${handleResponsive()} mx-auto grid`">
                <Sidebar />
                <div id="content" class="px-5">
                    <slot />
                </div>
                <Rightbar />
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const resElement = ref(null);

onMounted(() => {
    resElement.value = window.innerWidth;
    window.addEventListener('resize', () => {
        console.log(resElement.value)
        resElement.value = window.innerWidth;
    });
});

const handleResponsive = () => {
    switch (true) {
        case resElement.value <= 1000 && resElement.value > 640:
            return 'lg';
        case resElement.value <= 639 && resElement.value > 479:
            return 'md';
        case resElement.value <= 479 && resElement.value >= 0:
            return 'sm';
        default:
            return 'xl';
    }
}
</script>

<style scoped>
.main-layout {
    width: 100%;
}

.main-content {
    padding: 20px;
}

.main-content-xl {
    display: grid;
    grid-template-areas:
        "sidebar content rightbar";
}

.main-content-lg {
    display: grid;
    grid-template-areas:
        "content rightbar"
        "sidebar rightbar";

}

.main-content-md {
    display: grid;
    grid-template-areas:
        "content"
        "rightbar"
        "sidebar";
}

.main-content-sm {
    display: grid;
    grid-template-areas:
        "content"
        "rightbar";
}

.main-content-sm #sidebar {
    display: none;
}

#content {
    grid-area: content;
}

.main-layout {
    background-color: #FFFFFF !important;
    min-height: 100vh;
}

.main-layout__wrapper {
    width: 1220px;
    margin: 0 auto;
}

@media only screen and (max-width: 1279px) {
    .main-layout__wrapper {
        width: 1000px;
    }
}

@media only screen and (max-width: 1023px) {
    .main-layout__wrapper {
        width: 100%;
    }
}

@media screen and (max-width: 639px) {
    .main-layout__wrapper {
        width: 100%;
    }
}
</style>