import Vue from 'vue'
import Router from 'vue-router'
import Message from '../components/message/Message'
import Friends from '../components/friends/Friends'
import Discover from '../components/discover/Discover'
import My from '../components/my/My'

Vue.use(Router)

export default new Router({
  routes: [
     {path: '/message', name: 'message', component: Message},
     {path: '/friends', name: 'friends', component: Friends},
     {path: '/discover', name: 'discover', component: Discover},
     {path: '/my', name: 'my', component: My}
  ]
})
