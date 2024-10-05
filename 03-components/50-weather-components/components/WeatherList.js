import { defineComponent } from 'vue'
import WeatherCard from "./WeatherCard.js";

function isNight(currentTime, sunrise, sunset) {
  return currentTime < sunrise || currentTime > sunset;
}

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
    return {
      isNight,
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
      <li
        class="weather-card"
        v-for="item in list"
        :class="{'weather-card--night': isNight(item.current.dt, item.current.sunrise, item.current.sunset)}"
      >
        <WeatherCard :item :icons />
      </li>
    </ul>
  `,
});
