<template>
  <div id="app">
    <input v-model="count">
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" :key="tab.name">
          <a href="javascript:void(0)" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div v-if="activeTab">
      <component :is="activeTab.component" :count="parseInt(count)"></component>
    </div>
    <div else>
      <p>
        Напишите программу, которая выводит на экран числа от 1 до 100.<br>
        При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти —
        слово «Buzz».<br>
        Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
      </p>
      <p>
        реализовать в трех способах:<br>
        1) структурный подход<br>
        2) флаговый подход<br>
        3) фп подход<br>
        <br>
        4) ООП подход в парадигме GRASP и/или SOLID будет большим плюсом
      </p>


    </div>
  </div>
</template>

<script>
import StructuralView from './components/StructuralView.vue'
import FlagView from './components/FlagView'
import FunctionalView from './components/FunctionalView'

export default {
  name: 'App',
  data() {
    return {
      tabs: [
        { name: 'структурный подход', isActive: true, component: 'StructuralView' },
        { name: 'флаговый подход', isActive: false, component: 'FlagView' },
        { name: 'фп подход', isActive: false, component: 'FunctionalView' },
      ],
      activeTab: undefined,
      count: 100
    }

  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(t => t.isActive = (t.name === selectedTab.name))
      this.activeTab = selectedTab
    }
  },
  components: {
    StructuralView,
    FlagView,
    FunctionalView,
  }
}
</script>

<style lang="scss">
.tabs {
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;

  & > ul {
    list-style: none;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    display: flex;;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
  }

  & > li {
    display: block;
  }

  & .is-active {
    & > a {
      border-bottom-color: #00d1b2;
      color: #00d1b2;
    }
  }

  & a {

    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: .5em 1em;
    vertical-align: top;
  }
}

a {
  color: #00d1b2;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: none 86ms ease-out;
  transition: none 86ms ease-out;
}


pre {
  font-size: 0.85em;
  background-color: #f8f8f8;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
  overflow-x: auto;
  color: #525252;
  white-space: pre;
  padding: 1.2em 1.4em;
  font-size: 0.85rem;
  line-height: 1.6rem;
  display: block;
}


.row {
  display: flex;
}

.result-container {
  width: 200px;
}

.code-container {
  & .literal {
    color: #b96009;
  }

  & .string {
    color: #08d143;
  }

  & .function {
    color: #8f8e17;
  }

}


</style>
