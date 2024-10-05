import {computed, defineComponent, onUnmounted, ref} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const date = ref(new Date());
    const time = computed(() => date.value.toLocaleTimeString(
      navigator.language,
      { timeStyle: 'medium' }
    ));

    let intervalId = setInterval(() => date.value = new Date(), 1000);

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
});
