import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coffeeStores: {},
    center: {}
  },
  mutations: {
    SETSTORES: (state, data) => {
      console.log("test");
      state.coffeeStores = data.businesses;
    },
    SETSTORECORDINATES: (state, storeCoordinates) => {
      state.storeCoordinates = storeCoordinates;
    },
    SETCENTER: (state, center) => {
      state.center = center;
    },
    RESETSTORES: state => {
      state.coffeeStores = {};
    }
  },
  actions: {
    resetStores: context => {
      if (context.state.coffeeStores) {
        context.commit("RESETSTORES");
      }
    },
    search: (context, userLocation) => {
      axios.defaults.headers = {
        "Content-Type": "application/json"
      };
      var params = {
        location: userLocation
      };
      axios
        .get(
          "http://coffeeApp-env.eba-jmpmyd3a.us-west-2.elasticbeanstalk.com/api/",
          {
            params
          }
        )
        .then(res => {
          context.commit("SETSTORES", res.data);
          context.dispatch("setCenter", res.data);
        })
        .catch(err => {
          alert("Sorry, bad zip code");
          return err;
        });
    },
    setCenter: (context, data) => {
      let coffeeStores = data.businesses;
      let center = {
        lat: coffeeStores[0]["coordinates"]["latitude"],
        lng: coffeeStores[0]["coordinates"]["longitude"]
      };
      context.commit("SETCENTER", center);
    }
  },
  modules: {}
});
