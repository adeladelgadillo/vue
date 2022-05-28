<template>
  <div>
    <h1>{{msg}}</h1> 
      <li v-for="product in products" :key="product.id">
      
    <img src="@/assets/polar.jpg" width="100" height="100" />
      {{ product.name }}
      </li>
  

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'List',
  computed: {
  ...mapState(['products']),
   /* products() 
    {
      return this.$store.state.products;
    }*/
  },
  data () {
    return {
      msg: 'Ropa'
    }
  },

}
/*    <ol>
         <li v-for="product in products" :key="product.id">
       <img src="@/assets/polar.jpg" width="100" height="100" />
      {{ product.name }}
      </li>
     </ol>*/ 
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {  
  list-style-type: none;
  text-align: center;
}  


li {  
   padding:20px;
   text-align: center;
   
}  

div {  
  display:flex;
  justify-content: space-around;
  align-items:center;
  flex-direction: column;
}  

</style>





