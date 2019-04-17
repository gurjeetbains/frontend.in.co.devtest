<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <template v-if="showServerError">
            <b>Please correct the following error(s):</b>
            <div v-for="error in errors" :key="error" class="alert alert-warning" role="alert">
              {{ error }}
            </div>
        </template>
        <template v-if="showAdAlert">
            <div  class="alert alert-success" role="alert">
              Post has been added successfully
            </div>
        </template>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CompanyHeader></CompanyHeader>
      </div>
    </div>
    <div class="row">
      <div class="col-10" style="margin: auto;">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              v-model='title'
            >
          </div>
          <div
              class="alert alert-primary"
              v-if="!$v.title.required">Title is must for ad</div>
          <div class="form-group">
            <textarea
              class="form-control"
              placeholder="Content (Min 300 words)"
              v-model='adContent'>
            </textarea>
          </div>
          <div
              class="alert alert-primary"
              v-if="!$v.adContent.required">Ad Content Cannot be empty</div>
          <div
              class="alert alert-primary"
              v-if="!$v.adContent.minlength">Ad Content minimum should be 300 words</div>
          <div class="form-group">
            <input
              type="file"
              class="form-control"
              placeholder="Content (Min 300 words)"
            >
          </div>
          <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                @click="onPost">Post Ad</button>
        </form>
        <p
          class="alert alert-danger"
          v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <router-link
          type="button"
          class="btn btn-info btn-lg btn-block"
          to='/dashboard'>To Dashboard</router-link>
        <router-link
          type="button"
          class="btn btn-warning btn-lg btn-block"
          to='/'>To Home Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CompanyHeader from '@/components/CompanyHeader.vue';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'login',
  data() {
    return {
      submitStatus: null,
      errors: [],
      showServerError: false,
      showAdAlert: false,
      title: '',
      adContent: '',
      imagevideo: '',
      adType: this.$route.params.adType,
    };
  },
  validations: {
    title: {
      required,
    },
    adContent: {
      required,
      minLength: minLength(300),
    },
  },
  computed: {
    ...mapGetters(['getUserId']),
  },
  components: {
    CompanyHeader,
  },
  methods: {
    ...mapActions(['postAd']),
    async onPost(e) {
      try {
        e.preventDefault();
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          this.showServerError = false;
          this.errors = [];
          const adData = {
            title: this.title,
            adType: this.adType,
            adContent: this.adContent,
            imagevideo: this.imagevideo,
            createdBy: this.getUserId,
          };
          const result = await this.postAd(adData);
          if (result === true) {
            this.showAdAlert = true;
            this.title = '';
            this.adContent = '';
            this.imagevideo = '';
          } else {
            this.showServerError = true;
            this.errors = result;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
form{
    margin-bottom: 2%;
}
.row {
  margin: 2% auto;
}
.alert{
  margin: 1% auto;
  width: 30%;
  padding: 0;
}
</style>
