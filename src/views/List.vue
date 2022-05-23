<template>
  <div>
    <h1>{{msg}}</h1> 
    <ol>
         <li v-for="product in products" :key="product.id">{{ product.name }}
        <img :src="product.image" /></li>
     </ol>
    </div>
</template>

<script>
//import { mapState } from 'vuex'

export default {
  name: 'List',
  computed: {
  //...mapState(['this.products']),
    products() 
    {
      return this.$store.state.products;
    }
  },
  data () {
    return {
      msg: 'Ropa'
    }
  },
}

</script>