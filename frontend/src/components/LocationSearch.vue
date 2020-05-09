<template>
  <div class="level header">
    <div class="field has-addons center-container">
      <div class="control level-item">
        <input
          class="input"
          type="text"
          placeholder="Zip Code"
          v-model="location"
        />
      </div>
      <div class="control level-item">
        <a class="button" @click="search()">
          <i class="fas fa-search has-text-white"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationSearch",
  data() {
    return {
      location: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("resetStores");
      this.$store.dispatch("search", this.location);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-container {
  margin: 0 auto;
}

.input {
  width: 300px;
  border-radius: 5px;
}

.button {
  width: 70px;
  border-radius: 5px;
  background-color: #ea4335;
}
</style>
