<template>
  <div class="container containerMargin">

    <div class=" row w-100 d-flex justify-content-around">

      <div class="w-50 col-6">
        <input type="text" id="formControlLg" class="form-control form-control-lg" placeholder="TeacherName"
          v-model="TeacherName" />
      </div>



      <div class="w-50 col-6">
        <input type="text" id="formControl" class="form-control form-control-lg" placeholder="TeacherLast name"
          v-model="TeacherLastName" />
      </div>
    </div>

    <div class="row mt-3 w-100 d-flex justify-content-around">
      <div class="w-50 col-6">
        <input type="text" id="formControlLg" class="form-control form-control-lg " placeholder="TeacherLeson"
          v-model="TeacherLeson" />
      </div>

      <div class="w-50 col-6">
        <input type="text" id="formControl" class="form-control form-control-lg" placeholder="TeacherNumber"
          v-model="TeacherNumber" />
      </div>
    </div>

    <button class="btn btn-success float-end mt-3" @click="yubor">
      <router-link to="/teacher" class=" text-light">Add</router-link>
    </button>

  </div>
</template>
 
<script>
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useCounterStore } from '../../stores/store.js'

export default {
  setup() {
    let TeacherName = ref('')
    let TeacherLastName = ref('')
    let TeacherLeson = ref('')
    let TeacherNumber = ref('')
    let store = useCounterStore()

    let yubor = () => {

      const addInfo = reactive({
     
        name: TeacherName,
        lastName: TeacherLastName,
        number: TeacherNumber,  
      })
      

      console.log(TeacherName);
      store.data = addInfo
    }
    




    return { TeacherName, TeacherLastName, TeacherLeson, TeacherNumber, yubor, }
  }
}

</script>

<style lang="scss" scoped>
.containerMargin {
  margin-top: 120px !important;
}
</style>