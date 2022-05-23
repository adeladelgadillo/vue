import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//export default new Vuex.Store({
  export const store = new Vuex.Store({
state: {
    products: [
      {
        id: 1,
        image: 'src/assets/polar.jpg',
        price: 25,
        name: 'Ropa 1',
        stock: 1000,
      },
      {
        id: 2,
        image: 'src/assets/polar.jpg',
        price: 50,
        name: 'Ropa 2',
        stock: 1000,
      },
      {
        id: 3,
        image: 'src/assets/polar.jpg',
        price: 20,
        name: 'Ropa 3',
        stock: 10,
      },
      {
        id: 4,
        image: 'src/assets/polar.jpg',
        price: 30,
        name: 'Ropa 4',
        stock: 1000,
      },
      {
        id: 5,
        image: 'src/assets/polar.jpg',
        price: 30,
        name: 'Ropa 5',
        stock: 1000,
      },
      {
        id: 6,
        image: 'src/assets/polar.jpg',
        price: 60,
        name: 'Ropa 6',
        stock: 1000,
      },
    ],
    users: [],
  },
  mutations: {},
  actions: {},
  getter: {},
  modules: {},
});