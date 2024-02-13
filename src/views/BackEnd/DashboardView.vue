<template>
  <h2>這是後台</h2>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/admin/adminOrder">Order</RouterLink> |
    <RouterLink to="/admin/adminProducts">Products</RouterLink> |
  </nav>
  <RouterView />
</template>
