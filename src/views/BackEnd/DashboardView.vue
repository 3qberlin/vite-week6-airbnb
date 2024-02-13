<template>
  <h2>這是後台</h2>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/admin/adminOrder">Order</RouterLink> |
    <RouterLink to="/admin/adminProducts">Products</RouterLink> |
  </nav>
  <RouterView />
</template>

<script>
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export default {
  methods: {
    checkAdmin() {
      const url = `${VITE_API_URL}/api/user/check`;
      axios.post(url)
        .then(() => {
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>
