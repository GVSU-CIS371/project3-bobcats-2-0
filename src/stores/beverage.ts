import { computed, ref, Ref } from "vue";

interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

const temps: Ref<string[]> = ref(["Hot", "Cold"]);

const bases: Ref<BaseBeverageType[]> = ref([
  {
    id: "b1",
    name: "Black Tea",
    color: "#8B4513",
  },
  {
    id: "b2",
    name: "Green Tea",
    color: "#C8E6C9",
  },
  {
    id: "b3",
    name: "Coffee",
    color: "#6F4E37",
  },
]);

const creamers: Ref<CreamerType[]> = ref([
  {
    id: "c1",
    name: "No Cream",
    color: "transparent",
  },
  {
    id: "c2",
    name: "Milk",
    color: "AliceBlue",
  },
  {
    id: "c3",
    name: "Cream",
    color: "#F5F5DC",
  },
  {
    id: "c4",
    name: "Half & Half",
    color: "#FFFACD",
  },
]);

const syrups: Ref<SyrupType[]> = ref([
  {
    id: "s1",
    name: "No Syrup",
    color: "#c6c6c6",
  },
  {
    id: "s2",
    name: "Vanilla",
    color: "#FFEFD5",
  },
  {
    id: "s3",
    name: "Caramel",
    color: "#DAA520",
  },
  {
    id: "s4",
    name: "Hazelnut",
    color: "#6B4423",
  },
]);

const currentTemp = ref(temps.value[1]);
const currentBaseBeverage = ref(bases.value[0]);
const currentCreamer = ref(creamers.value[0]);
const currentSyrup: Ref<SyrupType> = ref(syrups.value[0]);

// Computed property for currentSyrup color that defaults to base color if syrup ID is 's1'
const currentSyrupColor = computed(() => {
  return currentSyrup.value.id === "s1" ? currentBaseBeverage.value.color : currentSyrup.value.color;
});

export type { BaseBeverageType, CreamerType, SyrupType };
export { temps, bases, creamers, syrups };
export { currentTemp, currentBaseBeverage, currentCreamer, currentSyrup, currentSyrupColor };
