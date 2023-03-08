<template>
    <div class="sad-bag container-fluid" id="saidbar">
        <div class="sad-content">

            <router-link to="/CenterHome" type="button"
                class="btn shadow-0  w-100 py-4 d-flex align-items-center gap-4 text-light" id="but"
                :class="{ textColor: store.showColor }">
                <i class="fas fa-home fs-6" :class="{ textColor: store.showColor }"></i>Home</router-link>

            <router-link to="/Student" type="button" :class="{ textColor: store.showColor }"
                class="btn shadow-0  w-100 py-4 d-flex align-items-center gap-4 text-light" id="but"><i
                    class="fas fa-users fs-6" :class="{ textColor: store.showColor }"></i>Students </router-link>
            <router-link to="/Teacher" type="button"
                class="btn shadow-0  w-100 py-4 d-flex align-items-center gap-4 text-light" id="but"><i
                    class="fas fa-chalkboard-teacher fs-6"></i>Teachers
            </router-link>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from "../components/stores/store.js";
let store = useCounterStore();

</script>

<style lang="scss" scoped>
.sad-bag {
    background-color: #222E3C;
    height: 100vh;
    padding: 7% 6%;
    box-shadow: 5px 5px 15px #222E3C;
    position: relative;
    z-index: 333;
}

.sad-content {
    font-family: sans-serif;
    font-size: 2rem;
}

#saidbar a.router-link-exact-active {
    background: rgb(9, 64, 46);
    background: linear-gradient(190deg, rgba(9, 64, 46, 0.15449929971988796) 0%, rgba(4, 118, 121, 0.5438550420168067) 95%);
    background-repeat: no-repeat;
    background-position: 102%;
    background-size: contain;


}
</style>