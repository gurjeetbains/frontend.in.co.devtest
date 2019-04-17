<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <CompanyHeader></CompanyHeader>
      </div>
    </div>
    <template v-if="adsShow">
       <Myad v-for="(ad,index) in adList" :key='index' :ad='ad'></Myad>
    </template>
    <template v-if="noads">
       <div>No ads yet. Please post some to see.</div>
    </template>
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
// @ is an alias to /src
import CompanyHeader from '@/components/CompanyHeader.vue';
import Myad from '@/components/Myad.vue';
import { mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      adList: [],
      adsShow: false,
      noads: false,
    };
  },
  components: {
    CompanyHeader,
    Myad,
  },
  methods: {
    ...mapActions(['getAdDetails']),
  },
  async created() {
    try {
      const result = await this.getAdDetails();
      if (result.data.length === 0) {
        this.noads = true;
      } else {
        this.adsShow = true;
        this.adList = result.data;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.row {
  margin: 2%;
}
#datePicked {
  width: 100%;
}
</style>
