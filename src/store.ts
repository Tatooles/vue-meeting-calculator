// store.js
import { reactive } from "vue";

export const store = reactive({
  time: 0,
  setTime(newTime: any) {
    this.time = newTime;
  },

  hourly: 0,
  setHourly(newHourly: any) {
    this.hourly = newHourly;
  },
});
