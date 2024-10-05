import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherList from "./components/WeatherList.js";
import AppHeader from "./components/AppHeader.js";

export default defineComponent({
  name: 'WeatherApp',

  components: {
    AppHeader,
    WeatherList,
  },

  setup() {
    const list = getWeatherData();

    return {
      list,
      icons: WeatherConditionIcons
    }
  },

  template: `
    <div>
      <AppHeader>Погода в Средиземье</AppHeader>

      <WeatherList
        :list="list"
        :icons="icons"
      />
    </div>
  `,
});
