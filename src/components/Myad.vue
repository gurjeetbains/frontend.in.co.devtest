<template>
  <div class="row">
    <div class="col-12">
      <div class="card" id="adCard">
        <div class="card-body">
          <h5 class="card-title">{{ ad.title }}</h5>
          <h6
            class="card-subtitle mb-2 text-muted"
          >AdType {{ ad.adType}}</h6>
          <p class="card-text">{{ ad.adContent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'addetails',
  props: ['ad'],
};
</script>
<style scoped>
#adCard {
  background-color: #ffe599;
  text-decoration-color: black;
}
</style>
