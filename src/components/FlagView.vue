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
          <span class="function">fizzBuzz</span>(i) {
            <span class="literal">switch</span> (true) {
              <span class="literal">case</span> this.isFizzBuzz(i):
                <span class="literal">return</span> <span class="string">'FizzBuzz</span>'
              <span class="literal">case</span> this.isFizz(i):
                <span class="literal">return</span> <span class="string">'Fizz</span>'
              <span class="literal">case</span> this.isBuzz(i):
                <span class="literal">return</span> <span class="string">'Buzz</span>'
              <span class="literal">default</span>:
                <span class="literal">return</span> <span class="string">i</span>
              }
            },

            <span class="function">isFizz</span>(i) {
              <span class="literal">return</span> i % 3 === 0
            },
            <span class="function">isBuzz</span>(i) {
              <span class="literal">return</span> i % 5 === 0
            },
            <span class="function">isFizzBuzz</span>(i) {
              <span class="literal">return</span> this.<span class="function">isFizz</span>(i) && this.<span class="function">isBuzz</span>(i)
            }
        </code>
      </pre>
    </div>

  </div>
</template>

<script>
export default {
  name: "FlagView",
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    fizzBuzz(i) {
      switch (true) {
        case this.isFizzBuzz(i):
          return 'FizzBuzz'
        case this.isFizz(i):
          return 'Fizz'
        case this.isBuzz(i):
          return 'Buzz'
        default:
          return i
      }
    },

    isFizz(i) {
      return i % 3 === 0
    },
    isBuzz(i) {
      return i % 5 === 0
    },
    isFizzBuzz(i) {
      return this.isFizz(i) && this.isBuzz(i)
    }
  },
}
</script>
