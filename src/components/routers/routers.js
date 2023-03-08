import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../Login.vue";
import Home from "../Home.vue";
import Teacher from "./Teachers/Teacher.vue";
import Student from "./Students/Student.vue";
import Add from "./Teachers/Add.vue";
import CenterHome from '../CenterHome.vue';



const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
      },
    {
        path: "/Home",
        name: "Home",
        component:Home,
        children:[
          {
            path: "/teacher",
            name: "teacher",
            component: Teacher,
            
          },
          {
            path: "/Student",
            name: "Student",
            component: Student,
            
          },
          {
            path: "/CenterHome",
            name: "CenterHome",
            component: CenterHome,
            
          },
        ]
      },
      {
        path: "/Add",
        name: "Add",
        component: Add,
      },
     
]
const router = createRouter({
    routes,
    history: createWebHashHistory(),
  });
  ;
  
  export default router;