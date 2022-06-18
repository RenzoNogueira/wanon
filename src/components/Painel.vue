<template>
    <div id="painel" class="p-0">
        <nav class="nav-user px-5 py-2 bg-secondary">
            <div id="img-user" class="d-flex align-items-center">
                <img :src="user.img" class="img-fluid rounded-circle border border-2 border-white">
                <h4 class="text-white mx-2">{{ user.name }}</h4>
            </div>
        </nav>
        <div class="px-5 py-4">
            <h1>Painel</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Painel',
    data() {
        return {
            user: {
                name: 'Wanon',
                img: 'https://fakeimg.pl/60x60/'
            }
        }
    },
}
</script>

<style scoped>
#painel {
    /* height: 100%; */
}
</style>
