export const GeneralRoute = [
    {
      path: "/",
      name: "splash",
      meta:{
        leaveClass: "animate__animated animate__fadeOutRight"
      },
      component: () => import(/* webpackChunkName: 'general'*/"@/views/Splash/index.vue")
    },
    {
        path: '/signup',
        name: 'signup',
        meta:{
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Auth/SignUp/index.vue")
    },
    {
        path: '/login',
        name: 'login',
        meta:{
            enterClass: "animate__animated animate__fadeInRight",
            leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Auth/Login/index.vue")
    }
  ];
  