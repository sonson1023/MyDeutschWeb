import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import bootstrapVue from "bootstrap-vue";
import VueHead from "vue-head";

Vue.use(Router);
Vue.use(VueHead);
Vue.use(bootstrapVue);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Test.vue")
    },
    {
      path: "/lecture",
      name: "lecture",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Lecture.vue")
    },
    {
      //

      path: "/writelecture",
      name: "writelecture",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/WriteLecture.vue")
    }
  ]
});
