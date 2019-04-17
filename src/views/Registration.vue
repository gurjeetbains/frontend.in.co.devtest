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
        <template>
            <div class="alert alert-success" role="alert" v-if="userAdded">
              Registration completed. You will be redirected to login page in 5 seconds.
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
                id="Name"
                placeholder="Name"
                v-model='name'>
            <div
              class="alert alert-primary"
              v-if="!$v.name.required">Please enter name</div>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            >
            <div
              class="alert alert-primary"
              v-if="!$v.email.required">Email is required</div>
            <div
              class="alert alert-primary"
              v-if="!$v.email.email">Not Right Email</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            >
            <div
              class="alert alert-primary"
              v-if="!$v.password.required">Please enter password</div>
          </div>
          <div class="form-group">
            <input
                type="text"
                class="form-control"
                id="company"
                placeholder="Company"
                v-model="company">
            <div
              class="alert alert-primary"
              v-if="!$v.company.required">Please enter Company Info</div>
          </div>
           <div class="form-group">
            <textarea
                class="form-control"
                id="address"
                placeholder="Address"
                v-model="address">
            </textarea>
            <div
              class="alert alert-primary"
              v-if="!$v.address.required">Please enter address</div>
          </div>
          <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                @click="onRegister"
                :disabled="submitStatus === 'PENDING'">Register</button>
        </form>
        <p
          class="alert alert-danger"
          v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <router-link
          type="button"
          class="btn btn-warning btn-lg btn-block"
          to='/login'>Go To Login</router-link>
        <router-link
          type="button"
          class="btn btn-secondary btn-lg btn-block"
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
  name: 'registration',
  data() {
    return {
      submitStatus: null,
      errors: [],
      showServerError: false,
      userAdded: false,
      name: '',
      email: '',
      password: '',
      address: '',
      company: '',
    };
  },
  components: {
    CompanyHeader,
  },
  watch: {
    userAdded() {
      setTimeout(this.$router.push('/login'), 5000);
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
    name: {
      required,
    },
    company: {
      required,
    },
    address: {
      required,
    },
  },
  methods: {
    ...mapActions(['registerUser']),
    async onRegister(e) {
      e.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        const newUserData = {
          name: this.name,
          email: this.email,
          password: this.password,
          company: this.company,
          address: this.address,
        };
        const result = await this.registerUser(newUserData);
        if (result.status === 200) {
          this.userAdded = true;
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
