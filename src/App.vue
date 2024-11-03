<template>
  <div>
    <Beverage 
      :isIced="currentTemp === 'Cold'" 
      :creamerColor="currentCreamer.color" 
      :syrupColor="currentSyrup.color" 
      :baseColor="currentBaseBeverage.color" 
    />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Creamer :creamerColor="currentCreamer.color"/>
    <h3>Select Creamer</h3>
    <ul>
      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Syrup :syrupColor="currentSyrup.color"/>
    <h3>Select Syrup</h3>
    <ul>
      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Base :baseColor="currentBaseBeverage.color" />
    <h3>Select Base Beverage</h3>
    <ul>
      <li>
        <template v-for="base in bases" :key="base">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base}`"
              :value="base"
              v-model="currentBaseBeverage"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import Creamer from "./components/Creamer.vue"
import Syrup from "./components/Syrup.vue"
import Base from "./components/Base.vue"
import { temps, currentTemp } from "./stores/beverage";
import { creamers, syrups, bases } from "./stores/beverage";
import { currentCreamer, currentSyrup, currentBaseBeverage } from "./stores/beverage";
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
