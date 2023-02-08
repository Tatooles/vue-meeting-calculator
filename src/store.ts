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

  useTimer: true,
  setUseTimer(newUseTimer: boolean) {
    this.useTimer = newUseTimer;
  },

  timerSeconds: 0,
  setTimerSeconds(seconds: any) {
    this.timerSeconds = seconds;
  },

  timerMinutes: 0,
  setTimerMinutes(minutes: any) {
    this.timerMinutes = minutes;
  },

  timerHours: 0,
  setTimerHours(hours: any) {
    this.timerHours = hours;
  },
});
