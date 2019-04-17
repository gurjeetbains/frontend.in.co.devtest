<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <CompanyHeader :showCard = true></CompanyHeader>
      </div>
    </div>
    <div class="row">
      <div class="col-10" style="margin: auto;">
        <router-link
          type="button"
          class="btn btn-primary btn-lg btn-block"
          to='/login'>Login</router-link>
        <router-link
          type="button"
          class="btn btn-secondary btn-lg btn-block"
          to='/registration'>Register</router-link>
        <router-link
          type="button"
          class="btn btn-success btn-lg btn-block"
          to='/dashboard'>Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyHeader from '@/components/CompanyHeader.vue';

export default {
  name: 'home',
  components: {
    CompanyHeader,
  },
};
</script>
<style scoped>
.row{
  margin: 2% auto;
}
</style>
