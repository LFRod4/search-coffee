<template>
  <div class="main-container is-marginless">
    <LocationSearch class="location"></LocationSearch>
    <div class="columns content-container">
      <div class="column is-6 left-column is-paddingless is-marginless">
        <div class="left-content">
          <ShopCard class="shop-card" v-for="shop in coffeeStores" :key="shop.id" :store="shop"></ShopCard>
        </div>
      </div>
      <div class="column right-content is-paddingless">
        <br />
        <GoogleMap v-if="coffeeStores.length > 0"></GoogleMap>
      </div>
    </div>
  </div>
</template>

<script>
import LocationSearch from "@/components/LocationSearch.vue";
import ShopCard from "@/components/ShopCard.vue";
import GoogleMap from "@/components/GoogleMap.vue";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    LocationSearch,
    ShopCard,
    GoogleMap
  },
  computed: {
    ...mapState(["coffeeStores"])
  }
};
</script>

<style scoped>
.location {
  text-align: center;
  padding-top: 20px;
}

.shop-card {
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
}

.main-container {
  width: 100%;
  height: 100%;
}

.left-content {
  overflow: auto;
  height: 100vh;
}

.right-content {
  float: right;
  width: 100%;
}
</style>