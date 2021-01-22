<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.title }} - {{ item.price }}
        <button @click="delallproduct(item,index)">删除购物</button>
        <br />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.state.cart.items;
    }
  },
  methods: {
    delallproduct(product) {
      this.$store.dispatch("cart/delProductToCard", product);
    }
  }
};
</script>
