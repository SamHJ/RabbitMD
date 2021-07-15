export const DriverRoute = [
  {
    path: '/driver',
    name:'driver',
    props:true,
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: 'driver' */ "@/components/General/Base/emptyRouterView.vue"),
    children:[
      {
        path: "/driver/",
        name: "driver",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Driver/Home/index.vue")
      },
      {
        path: "/driver/history",
        name: "driverhistory",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Driver/History/index.vue")
      },
      {
        path: "/driver/wallet",
        name: "driverwallet",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Driver/Wallet/index.vue")
      },
      {
        path: "/driver/profile",
        name: "driverprofile",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Driver/Profile/index.vue")
      }
    ]
  }
  
];
