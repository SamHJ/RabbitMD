export const MerchantRoute = [
  {
    path: '/merchant',
    name:'merchant',
    props:true,
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: 'merchant' */ "@/components/General/Base/emptyRouterView.vue"),
    children:[
      {
        path: "/merchant/",
        name: "merchant",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Merchant/Home/index.vue")
      },
      {
        path: "/merchant/history",
        name: "merchanthistory",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Merchant/History/index.vue")
      },
      {
        path: "/merchant/profile",
        name: "merchantprofile",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Merchant/Profile/index.vue")
      },
      {
        path: "/merchant/event-info",
        name: "merchanteventinfo",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Merchant/EventInfo/index.vue")
      },
      {
        path: "/merchant/task-completed",
        name: "taskcompleted",
        meta:{
          enterClass: "animate__animated animate__fadeInRight",
          leaveClass: "animate__animated animate__fadeOutLeft"
        },
        component: () => import(/* webpackChunkName: 'general'*/"@/views/Dashboard/Android/Merchant/TaskCompleted/index.vue")
      }
    ]
  }
  
];
