import Driver from '@/components/General/Icons/Driver/index.vue'
import Merchant from '@/components/General/Icons/Merchant/index.vue'
import RabbitBlue from '@/components/General/Icons/RabbitBlue/index.vue'
import RabbitWhite from '@/components/General/Icons/RabbitWhite/index.vue'
import AuthRightVector from '@/components/General/Vectors/AuthRightVector/index.vue'

export default {
    components:{
        Driver,
        Merchant,
        RabbitBlue,
        RabbitWhite,
        AuthRightVector
    },
    data(){
        return{
            active_tab: 0,
        }
    },
    methods:{
        signIn(){
            if(this.active_tab===0){
                const user = {...this.$store.state.userdata,status:'driver'}
                this.$store.dispatch('storeUserData',user)
                this.$router.push('/driver')
            }else{
                const user = {...this.$store.state.userdata,status:'merchant'}
                this.$store.dispatch('storeUserData',user)
                this.$router.push('/merchant')
            }
        }
    }
};