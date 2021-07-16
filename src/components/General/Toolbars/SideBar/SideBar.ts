import Home from '../../Vectors/Home/index.vue'
import Logout from '../../Vectors/Logout/index.vue'
import History from '../../Vectors/History/index.vue'
import Wallet from '../../Vectors/Wallet/index.vue'
import Bulb from '../../Vectors/Bulb/index.vue'
import {changeTheme} from '../../../../utils/core/mixins'
import {store} from '../../../../store'

export default{
    components:{
        Home,
        Logout,
        History,
        Wallet,
        Bulb
    },
    computed:{
        status(){
            return store.state.userdata.status
        }
    },
    methods:{
        changeThemeMode(){
            changeTheme(!store.state.darkTheme,true)
        },
        navigate(route:string){
            if(this.$router.currentRoute.path!==route){
                this.$router.push(route)
            }
            this.$emit('closeNav')
        }
    }
}