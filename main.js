
  import { registerSW } from 'virtual:pwa-register'
import'./Components/FormDomSetUp'
import'./Components/commentComponent'
import  './Components/indexeddb'
import'./style/style'


const updateSW = registerSW({
    onNeedRefresh() {
     updateSW()
    
     
      },
    
    onOfflineReady() {
      console.log("offline")
    },
    onRegistered(){
      console.log('registered')
    },
    onRegisterError(){
      console.log("error")
    }
  })















