<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <CompanyHeader></CompanyHeader>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>Post Ad Menu</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-info btn-lg btn-block"
            to='/postad/text'>Text Ad</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-success btn-lg btn-block"
            to='/postad/image'>Image Ad</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-warning btn-lg btn-block"
            to='/postad/video'>Video Ad</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-10" style="margin: auto;">
          <router-link
            type="button"
            class="btn btn-primary btn-lg btn-block"
            to='/dashboard'>Dashboard Page</router-link>
        </div>
      </div>
    </div>
</template>
<script>
import CompanyHeader from '@/components/CompanyHeader.vue';

export default {
  name: 'adtype',
  methods: {
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
