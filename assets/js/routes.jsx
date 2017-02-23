import App from './components/App';
import { Route, IndexRoute } from 'react-router';

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}


export default {
 component: App,
 childRoutes: [
   {
     path: '/',
     getComponent(location, cb) {
       System.import('./components/pages/Home').then(loadRoute(cb)).catch(errorLoading);
     }
   },
   {
     path: 'blog',
     getComponent(location, cb) {
       System.import('./components/pages/Blog').then(loadRoute(cb)).catch(errorLoading);
     }
   },
   {
     path: 'about',
     getComponent(location, cb) {
       System.import('./components/pages/About').then(loadRoute(cb)).catch(errorLoading);
     }
   },
 ]
};