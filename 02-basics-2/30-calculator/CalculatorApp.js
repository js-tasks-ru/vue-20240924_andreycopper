import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const calc = ref({
      number1: 0,
      number2: 0,
      operator: 'sum',
    });

    const result = computed(() => {
      switch (calc.value.operator) {
        case 'sum':
          return calc.value.number1 + calc.value.number2;
        case 'subtract':
          return calc.value.number1 - calc.value.number2;
        case 'multiply':
          return calc.value.number1 * calc.value.number2;
        case 'divide':
          return calc.value.number1 / calc.value.number2;
        default:
          return 0;
      }
    });

    return {
      calc,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="calc.number1" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="calc.operator" />➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="calc.operator" />➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="calc.operator" />✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="calc.operator" />➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="calc.number2" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
