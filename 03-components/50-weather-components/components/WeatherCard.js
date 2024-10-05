import { defineComponent } from 'vue'
import WeatherAlert from "./WeatherAlert.js";

function getCurrentTemp(temp) {
  return (temp - 273.15).toFixed(1);
}

function getCurrentPressure(pressure) {
  return (pressure * 0.75).toFixed(0);
}

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
  },

  props: {
    item: {
      type: Object,
      required: true
    },

    icons: {
      type: Object,
      required: true
    },
  },

  setup() {
    return {
      getCurrentTemp,
      getCurrentPressure,
    }
  },

  template: `
    <WeatherAlert v-if="item.alert">{{ item.alert.sender_name }}: {{ item.alert.description }}</WeatherAlert>
    <div>
      <h2 class="weather-card__name">
        {{ item.geographic_name }}
      </h2>
      <div class="weather-card__time">
        {{ item.current.dt }}
      </div>
    </div>
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="item.current.weather.description">{{ icons[item.current.weather.id] }}️</div>
      <div class="weather-conditions__temp">{{ getCurrentTemp(item.current.temp) }} °C</div>
    </div>
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ getCurrentPressure(item.current.pressure) }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ item.current.humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ item.current.clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
      </div>
    </div>
  `,
});
