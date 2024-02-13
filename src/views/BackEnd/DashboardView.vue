<template>
  <h2>這是後台</h2>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/admin/order">Order</RouterLink> |
    <RouterLink to="/admin/products">Products</RouterLink> |
  </nav>
  <RouterView />
</template>
