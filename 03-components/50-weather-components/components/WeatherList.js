import { defineComponent } from 'vue'
import WeatherCard from "./WeatherCard.js";

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherCard,
  },

  props: {
    list: {
      type: Array,
      required: true
    },

    icons: {
      type: Object,
      required: true
    },
  },

  setup() {
  },

  template: `
    <ul class="weather-list unstyled-list">
      <WeatherCard
        v-for="item in list"
        :item="item"
        :icons="icons"
      />
    </ul>
  `,
});
