import Forecast from './components/Forecast.vue'
import Home     from './components/Home.vue'


export const routes = [
  {path: '/', component: Home},
  {path: '/forecast', component: Forecast},
];