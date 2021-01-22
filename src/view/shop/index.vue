<template>
    <div id="app">
        <h1>购物车示例</h1>
        <p>姓名: {{ $store.state.userInfo.username }}</p>
        <hr />
        <h2>产品</h2>
        <ProductList />
        <hr/>
        <h2>购物车</h2>
        <Car />
        <hr />
    </div>
</template>

<script>
    import ProductList from "ProductList";
    import Car from "Car";
    export default {
        name: "App",
        components: { ProductList ,Car}
    };
</script>

<style></style>
