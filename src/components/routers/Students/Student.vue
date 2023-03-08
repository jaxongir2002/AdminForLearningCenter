<template>
   <div>
    <form class="form w-100  float-left">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Type your text" required="" type="text">
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
        <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Status</th>
      <th>Position</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody v-for="info in infos" :key="info.id">
    <tr>
      <td>
        <div class="d-flex align-items-center" >
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">{{ info.name }}</p>
            <p class="text-muted mb-0">{{ info.lastName }}</p>
          </div>
        </div>  
      </td>
      <td>
        <p class="fw-normal mb-1">Software engineer</p>
        <p class="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span class="badge badge-success rounded-pill d-inline">{{ info.number }}</span>
      </td>
      <td>{{ info.position }}</td>
      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
      edit
        </button>
      </td>
    </tr>

  </tbody>
  
</table>
<div class=" position-fixed">
<router-link to="/Add">
  <button class="cssbuttons-io-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Add</span>
</button>
</router-link>
  
</div>


    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useCounterStore } from '../../stores/store.js'
import axios from 'axios'
import UserJson from '../../jsonserver/Teacher.json'

let show = ref(false)
let store = useCounterStore()



// axios.get('http://127.0.0.1:5175')
// .then(response => (console.log(response)))
//   .catch(error => console.log(error))
// console.log(store);

let infos = ref([
  {
    id: 1,
    name: 'salom',
    lastName: 'nima',
    image: new URL('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png', import.meta.url).href,
    status:store.val3,
    position: store.val4,
    edit:'edit'

  },
  {
    id: 1,
    name:'zor',
    title: 'Senyor dasturchi 5 yilik tajriba  yuqori natijalarga erishgan jamo etakchisi',
    image: new URL('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png', import.meta.url).href,
    status: 'Active',
    position: 'Senior',
    edit:'edit'

  },
  {
    id: 1,
    name: 'ha',
    title: 'Senyor dasturchi 5 yilik tajriba  yuqori natijalarga erishgan jamo etakchisi',
    image: new URL('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png', import.meta.url).href,
    status: 'Active',
    position: 'Senior',
    edit:'edit'

  },

  
  ])


// infos.value.push(store.data)

console.log(UserJson);

function add() {
  let obj = {
    id: 1,
    name: 'ha',
    title: 'Senyor dasturchi 5 yilik tajriba  yuqori natijalarga erishgan jamo etakchisi',
    image: new URL('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png', import.meta.url).href,
    status: 'Active',
    position: 'Senior',
    edit:'edit'
  }

  infos.value.push(obj)
}
  
 

</script>

<style lang="scss" scoped>

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
/* styling of whole input container */
.form {
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg,#fff);
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  width: 17px;
  margin-top: 3px;
}



.cssbuttons-io-button {
 display: flex;
 align-items: center;
 font-family: inherit;
 font-weight: 500;
 font-size: 16px;
 padding: 0.7em 1.4em 0.7em 1.1em;
 color: white;
 background: #ad5389;
 background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
 border: none;
 box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
 letter-spacing: 0.05em;
 border-radius: 20em;
 position: relative;
 top:870px;
 left: 1700px;
 position: fixed;
 
}

.cssbuttons-io-button svg {
 margin-right: 6px;
}

.cssbuttons-io-button:hover {
 box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.cssbuttons-io-button:active {
 box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}
</style>