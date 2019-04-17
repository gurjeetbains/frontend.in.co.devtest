<template>
    <div class="card">
          <div class="card-body">
            <h5 class="card-title">ABC Ltd.</h5>
            <h6 class="card-subtitle mb-2 text-muted">Marketing Company</h6>
            <p class="card-text" v-show=showCard>
              Post your ads with us and pump your business in just few weeks
              with 100% money back guarantee.
            </p>
          </div>
        </div>
</template>
<script>
export default {
  name: 'companyheader',
  props: {
    showCard: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
h5,
h6 {
  text-align: center;
}
</style>
