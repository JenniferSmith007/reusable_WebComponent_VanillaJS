import { precacheAndRoute } from 'workbox-precaching'
import {offlineFallback,staticResourceCache,imageCache} from 'workbox-recipes';
import {setDefaultHandler} from 'workbox-routing';
import {NetworkOnly} from 'workbox-strategies';



setDefaultHandler(new NetworkOnly());


precacheAndRoute(self.__WB_MANIFEST)


staticResourceCache()

imageCache()

offlineFallback({pageFallback: '/offline.html'})


self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
      self.skipWaiting();
}
});