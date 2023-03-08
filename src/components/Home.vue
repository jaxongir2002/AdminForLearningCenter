<template>
    <div>
<Nav class=" position-fixed"></Nav>
<div class="row g-0">
<div class="col-2 position-fixed mt-5 pt-2">
    <saidbar></saidbar>
</div>
<div class="col-10 offset-2">
<div class="mt-5 pt-4  px-4">
    <router-view v-slot="{ Component }">
        <component v-bind:is="Component"  class="position-static"/>

    </router-view>
</div>
 
</div>

    
</div>


    </div>
</template>

<script > 
import { reactive, toRefs } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import Nav from './Nav.vue';
import saidbar from './saidbar.vue';
export default {
    components:{
    Nav,
    saidbar,
    RouterView
}
}


</script>

<style lang="scss" scoped>









</style>