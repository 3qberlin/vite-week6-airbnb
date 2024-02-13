<template>
  <h2>這是登入頁</h2>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
      <div class="col-8">
        <form class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2023~∞ - 六角學院</p>
  </div>
  <RouterView />
</template>
<script>
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      axios.post(`${VITE_API_URL}/admin/signin`, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token};expires=${new Date(
            expired,
          )};path=/`;
          this.$router.push('./admin/adminProducts');
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
