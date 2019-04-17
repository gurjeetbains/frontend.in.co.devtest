<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <CompanyHeader></CompanyHeader>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>Dashboard</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-info btn-lg btn-block"
            to='/newad'>POST NEW AD</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-success btn-lg btn-block"
            to='/myads'>MY ADS</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-warning btn-lg btn-block"
            to='/myaccount'>My Account</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-primary btn-lg btn-block"
            to='/'>Home Page</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <button
            type="button"
            class="btn btn-danger btn-lg btn-block"
            @click="logout"
            >Logout</button>
        </div>
      </div>
    </div>
</template>
<script>
import CompanyHeader from '@/components/CompanyHeader.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'dashboard',
  methods: {
    ...mapMutations(['setLoginState', 'setUserId', 'setLoggedIn']),
    logout(e) {
      e.preventDefault();
      this.setLoginState(null);
      this.setUserId(null);
      this.setLoggedIn(false);
      localStorage.removeItem('Live2TOKEN');
      this.$router.push('/');
    },
  },
  components: {
    CompanyHeader,
  },
};
</script>
<style>
.row{
  margin: 2%;
}
</style>
