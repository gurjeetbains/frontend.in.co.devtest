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
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model='email'
            >
            <div
              class="alert alert-primary"
              v-if="!$v.email.required">Email is required</div>
            <div
              class="alert alert-primary"
              v-if="!$v.email.email">Not Right Email</div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model='password'
            >
            <div
              class="alert alert-primary"
              v-if="!$v.password.required">Please enter password</div>
          </div>
          <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                @click="onLogin"
                :disabled="submitStatus === 'PENDING'">Login</button>
        </form>
        <p
          class="alert alert-danger"
          v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <router-link
          type="button"
          class="btn btn-info btn-lg btn-block"
          to='/registration'>New Here Register</router-link>
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
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'login',
  components: {
    CompanyHeader,
  },
  data() {
    return {
      submitStatus: null,
      errors: [],
      showServerError: false,
      email: '',
      password: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    ...mapActions(['loginUser']),
    async onLogin(e) {
      e.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.showServerError = false;
        this.errors = [];
        const loginInfo = {
          email: this.email,
          password: this.password,
        };
        const result = await this.loginUser(loginInfo);
        if (result === true) {
          this.$router.push('/dashboard');
        } else {
          this.errors = result;
          this.showServerError = true;
        }
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
