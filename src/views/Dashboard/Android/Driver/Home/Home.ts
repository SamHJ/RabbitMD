import Timer from '@/components/General/Vectors/Timer/index.vue'
import HeaderBar from '@/components/General/Toolbars/HeaderBar/index.vue'
import RouteIndicator from '@/components/General/Utils/RouteIndicator/index.vue'
import {passengers} from '@/custom-data/passengers'

export default {
    components:{
        Timer,
        HeaderBar,
        RouteIndicator
    },
    data(){
        return{
            passengers
        }
    }
};