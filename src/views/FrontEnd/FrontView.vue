<template>
  <h2>這是前台</h2>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/products">Products</RouterLink> |
    <RouterLink to="/carts">Carts</RouterLink> |
    <RouterLink to="login">Login</RouterLink> |
    <RouterLink to="/admin">Dashboard</RouterLink>
  </nav>
  <RouterView />
</template>
<script>
export default {};
</script>
