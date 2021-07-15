import NavigationToggler from '../../Vectors/NavigationToggler/index.vue'
import Notification from '../../Vectors/Notification/index.vue'
import QRCode from '../../Vectors/QRCode/index.vue'
import SideBar from '../SideBar/index.vue'

export default {
    props:{
        active:{
            type: String
        }
    },
    components:{
        NavigationToggler,
        Notification,
        QRCode,
        SideBar
    },
    data(){
        return{
            showNav: false,
            active_tab: 0
        }
    },
    methods:{
        setActiveTab(index:number){
            this.active_tab=index
            this.$emit('newTab',index)
        },
        showHeaderSubSection(param:string){
            const toShow:Record<string, any> = {
                with_balance: ['home','wallet'],
                history:['history'],
                merchanthome: ['merchanthome'],
                eventinfo: ['eventinfo']
            }

            const p = toShow[param]

            return p ? toShow[param].includes(this.active) : false
        },
        openNav() {
            this.showNav = true
            setTimeout(()=>{
                const domElem:any = document.getElementById("sideBar")
                domElem.style.width = "250px";
            },1)
        }, 
        closeNav() {
            const domElem:any = document.getElementById("sideBar")
            domElem.style.width = "0";
            setTimeout(() => {
                this.showNav = false
            },500)
        }
    }
};