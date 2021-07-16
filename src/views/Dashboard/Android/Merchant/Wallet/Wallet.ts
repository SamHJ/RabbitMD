import HeaderBar from '@/components/General/Toolbars/HeaderBar/index.vue'
import RouteIndicator from '@/components/General/Utils/RouteIndicator/index.vue'

export default {
    components:{
        HeaderBar,
        RouteIndicator
    },
    data(){
        return{
            banks: ['Access','GTBank','UBA','Sterling','FirstBank'],
            history:[
                {
                    date: 'June 28',
                    status: true,
                    amount: '100'
                },
                {
                    date: 'June 29',
                    status: true,
                    amount: '100'
                },
                {
                    date: 'June 30',
                    status: false,
                    amount: '300'
                },
                {
                    date: 'June 31',
                    status: true,
                    amount: '100'
                }
            ]
        }
    }
};