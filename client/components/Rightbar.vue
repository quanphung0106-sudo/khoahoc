<template>
    <div id="rightbar">
        <h1 class="rightbar-title">Tiêu điểm</h1>
        <Card />
    </div>
</template>

<script setup>

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
        width: 100%;
    }
}
</style>