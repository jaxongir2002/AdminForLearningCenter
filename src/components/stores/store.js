import { defineStore } from 'pinia'

export const useCounterStore = defineStore('changeColor', {
    state: () => ({
     active:true,
     color:false,
     showColor:false
         }),


  })