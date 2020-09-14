<template>
  <div class="row">
    <div class="result-container">
      <div v-for="i in count" :key="i">
        {{ fizzBuzz(i) }}
      </div>
    </div>
    <div class="code-container">
      <pre>
        <code>
        <span class="literal">if</span> (i % 3 === 0 && i % 5 === 0)  <span class="literal">return</span>  <span class="string">'FizzBuzz'</span>
        <span class="literal">else if</span>  (i % 3 === 0)  <span class="literal">return</span>  <span class="string">'Fizz'</span>
        <span class="literal">else if</span>  (i % 5 === 0)  <span class="literal">return</span>  <span class="string">'Buzz'</span>
        <span class="literal">return</span>  <span class="string">i</span>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "StructuralView",
  props: {
    count: {
      type: Number,
      default: 0
    },
  },
  methods: {
    fizzBuzz(i) {
      if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz'
      else if (i % 3 === 0) return 'Fizz'
      else if (i % 5 === 0) return 'Buzz'
      return i
    }
  }
}
</script>

