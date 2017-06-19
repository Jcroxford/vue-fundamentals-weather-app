import DetailedDay from './components/DetailedDay.vue';
import Forecast    from './components/Forecast.vue';
import Home        from './components/Home.vue';


export const routes = [
  {path: '/', component: Home},
  {path: '/forecast', component: Forecast},
  {path: '/details/:day', component: DetailedDay, props: true },
];