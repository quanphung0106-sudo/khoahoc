<template>
    <div class="main-layout">
        <div class="main-layout__wrapper">
            <Header />
            <!-- output the page content -->
            <main :class="`main-content main-content-${handleResponsive()} mx-auto grid`">
                <Sidebar />
                <div id="content">
                    <slot />
                </div>
                <Rightbar />
            </main>
            <Footer />
        </div>
        <ScrollToTop />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const resElement = ref(null);

onMounted(() => {
    resElement.value = window.innerWidth;
    window.addEventListener('resize', () => {
        resElement.value = window.innerWidth;
    });
});

const handleResponsive = () => {
    switch (true) {
        case resElement.value <= 1279 && resElement.value > 1000:
            return 'lg';
        case resElement.value <= 1000 && resElement.value > 640:
            return 'md';
        case resElement.value <= 640 && resElement.value > 479:
            return 'sm';
        case resElement.value <= 479 && resElement.value >= 0:
            return 'xs';
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
    padding-top: 20px;
    padding-bottom: 20px;
}

.main-content-xl {
    display: grid;
    grid-template-columns: 200px 640px 300px;
    grid-template-areas:
        "sidebar content rightbar";
    gap: 20px;
}

.main-content-lg {
    display: grid;
    grid-template-areas:
        "content rightbar"
        "sidebar rightbar";
    gap: 20px;

}

.main-content-md {
    display: grid;
    grid-template-areas:
        "content rightbar"
        "sidebar rightbar";
    gap: 20px;
    padding: 20px;

}

.main-content-sm {
    display: grid;
    grid-template-areas:
        "content"
        "rightbar"
        "sidebar";
    padding: 20px;
}

.main-content-xs {
    display: grid;
    grid-template-areas:
        "content"
        "rightbar";
    padding: 20px;
}

.main-content-xs #sidebar {
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

@media only screen and (min-width: 1001px) and (max-width: 1279px) {
    .main-layout__wrapper {
        width: 1000px;
    }

    #content {
        max-width: 640px;
    }
}

@media only screen and (max-width: 1023px) {
    .main-layout__wrapper {
        width: 100%;
    }

    #content {

    }
}

@media screen and (max-width: 639px) {
    .main-layout__wrapper {
        width: 100%;
    }
}
</style>