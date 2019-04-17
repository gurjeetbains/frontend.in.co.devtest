<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <CompanyHeader></CompanyHeader>
            </div>
        </div>
        <div class="row">
            <div class="col-10" v-if=showUser style="margin: auto;">
                <h5>
                    Failed to get the details of user
                </h5>
            </div>
            <div class="col-12" v-if=showInfo style="margin: auto;">
                <h5>
                    {{ info.name}}
                </h5>
                <h5>
                    {{ info.company}}
                </h5>
                <h5>
                    {{ info.email}}
                </h5>
                <h5>
                    {{ info.address}}
                </h5>
            </div>
            <div class="col-10" style="margin: auto;">
               <router-link
                    type="button"
                    class="btn btn-info btn-lg btn-block"
                    to='/dashboard'>Go To Dashboard</router-link>
                <router-link
                    type="button"
                    class="btn btn-warning btn-lg btn-block"
                    to='/'>Home Page</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import CompanyHeader from '@/components/CompanyHeader.vue';
import { mapActions } from 'vuex';

export default {
  name: 'myaccount',
  methods: {
    ...mapActions(['getUserInfo']),
  },
  data() {
    return {
      showInfo: false,
      showUser: false,
      info: null,
    };
  },
  components: {
    CompanyHeader,
  },
  async created() {
    try {
      const result = await this.getUserInfo();
      this.showInfo = result.userInfo;
      this.info = result.userData;
    } catch (error) {
      this.showUser = true;
    }
  },
};
</script>
