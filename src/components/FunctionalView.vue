<template>
  <div class="row">
    <div class="result-container">
      <div v-for="i in count" :key="i">
        {{ FIZZ(i) + BUZZ(i) || i }}
      </div>
    </div>
    <div class="code-container">
      <pre>
        <code>
          <span class="literal">const</span> <span class="function">division</span> = (rate, text) => (num) => num % rate === 0 ? text : ''
          <span class="literal">const</span> <span class="function">FIZZ</span> = <span class="function">division</span>(3, <span
          class="string">'Fizz'</span>)
          <span class="literal">const</span> <span class="function">BUZZ</span> = <span class="function">division</span>(5, <span
          class="string">'Buzz'</span>)

          <span class="literal">for</span> (<span class="literal">let</span> i = 1; i &lt; 100; i++ {
            <span class="function">FIZZ</span>(i) + <span class="function">BUZZ</span>(i) || i
          }

        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import { FIZZ, BUZZ } from '@/assets/script/functional.js'

export default {
  name: "FunctionalView",
  props: {
    count: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      FIZZ,
      BUZZ,
    }
  },
}
</script>

