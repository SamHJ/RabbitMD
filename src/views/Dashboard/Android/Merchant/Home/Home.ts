import Timer from '@/components/General/Vectors/Timer/index.vue'
import HeaderBar from '@/components/General/Toolbars/HeaderBar/index.vue'
import RouteIndicatorDriver from '@/components/General/Utils/RouteIndicatorDriver/index.vue'
import {passengers} from '@/custom-data/passengers'

export default {
    components:{
        Timer,
        HeaderBar,
        RouteIndicatorDriver
    },
    data(){
        return{
            active_tab:0,
            passengers
        }
    },
    methods:{
        changeTab(index:number){
            this.active_tab = index
        }
    }
};