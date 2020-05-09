<template>
  <div>
    <div class="card">
      <div class="columns level is-paddingless is-marginless">
        <div class="column is-3">
          <img class="shop-image" :src="store.image_url" alt="Placeholder image" />
        </div>
        <div class="column level-right">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{store["name"]}}</p>
                <div>{{formatPhone(store["phone"])}}</div>
                <div class="review-stars">
                  <span class="fa fa-star checked" v-for="index in stars" :key="index"></span>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="is-size-6">Reviews: {{store["review_count"]}}</div>
              <div class="is-size-8">Price: {{store["price"]}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCard",
  props: ["store"],
  data() {
    return {
      // stars: this.$props.store["rating"]
    };
  },
  methods: {
    formatPhone(x) {
      x = x
        .slice(2)
        .replace(/\D+/g, "")
        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      return x;
    }
  },
  computed: {
    stars() {
      if (this.$props.store["rating"] % 1 == 0) {
        return this.$props.store["rating"];
      } else {
        return this.$props.store["rating"] - 0.5;
      }
    }
  }
};
</script>

<style scoped>
.shop-image {
  padding-left: 30px;
}

.card {
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.4);
}

.checked {
  color: orange;
}

.review-stars {
  padding: 0;
}

.title {
  margin-bottom: 0 !important;
}
</style>