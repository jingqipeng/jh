<template>
  <div id="app">
    <div class="content-top">
      <top-nav></top-nav>
    </div>
    <router-view/>
    <div class="tabbar">
      <bottom-tab></bottom-tab>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TopNav from './components/topnav/TopNavigation'
  import BottomTab from './components/bottomTab/BottomTab'
  import Message from './components/message/Message'

  export default {
    name: 'App',
      computed: mapState({allData: 'data', chat: 'chat', showDetail: 'showDetail'}),
      components: {
        TopNav,
        BottomTab,
        Message
      }
  }
</script>

<style>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
