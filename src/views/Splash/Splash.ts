import RabbitWhite from '@/components/General/Icons/RabbitWhite/index.vue'

export default {
  components:{
    RabbitWhite
  },
  mounted(){
   setTimeout(() => {
     this.$router.push('/signup')
    }, 3000);
  }
};