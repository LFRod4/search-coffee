<template>
  <div>
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 100vh;">
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened=false"
      >{{infoContent}}</gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(m, index) in coffeeStores"
        :position="getPosition(m)"
        :clickable="true"
        @click="toggleInfo(m, index)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GoogleMap",
  data() {
    return {
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },

  methods: {
    getPosition: marker => {
      console.log(marker);
      return {
        lat: parseFloat(marker.coordinates.latitude),
        lng: parseFloat(marker.coordinates.longitude)
      };
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.name;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    }
  },
  computed: {
    ...mapState(["center", "coffeeStores"])
  }
};
</script>