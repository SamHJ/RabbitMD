import HeaderBar from '@/components/General/Toolbars/HeaderBar/index.vue'
import RouteIndicator from '@/components/General/Utils/RouteIndicator/index.vue'
import Location from '@/components/General/Vectors/Location/index.vue'
import Location3 from '@/components/General/Vectors/Location3/index.vue'
import Location4 from '@/components/General/Vectors/Location4/index.vue'
import Call from '@/components/General/Vectors/Call/index.vue'

export default {
    components:{
        HeaderBar,
        RouteIndicator,
        Location,
        Location3,
        Location4,
        Call
    },
    data(){
        return{
            arrived: true
        }
    }
};