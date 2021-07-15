import Home from '../../Vectors/Home/index.vue'
import Logout from '../../Vectors/Logout/index.vue'
import History from '../../Vectors/History/index.vue'
import Wallet from '../../Vectors/Wallet/index.vue'

export default{
    components:{
        Home,
        Logout,
        History,
        Wallet
    },
    computed:{
        status(){
            return this.$store.state.userdata.status
        }
    },
    methods:{
        navigate(route:string){
            if(this.$router.currentRoute.path!==route){
                this.$router.push(route)
            }
            this.$emit('closeNav')
        }
    }
}