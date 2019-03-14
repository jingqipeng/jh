<template>
  <mu-appbar style="width: 100%;" color="#2e3238">
    <mu-button flat slot="left" textColor="white"><h1>微信</h1></mu-button>
    <mu-button icon slot="right">
      <mu-icon size="30" value="search" color="white"></mu-icon>
    </mu-button>
    <mu-menu slot="right">
      <mu-button flat>
        <mu-icon size="30" value="add" color="white"></mu-icon>
      </mu-button>
      <mu-list slot="content" style="background-color: #2e3238">
        <mu-list-item button>
          <mu-list-item-content style="color: white">
            <mu-list-item-title>发起群聊</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button color="#2e3238">
          <mu-list-item-content style="color: white">
            <mu-list-item-title>添加朋友</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content style="color: white">
            <mu-list-item-title>扫一扫</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content style="color: white">
            <mu-list-item-title>收付款</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content style="color: white">
            <mu-list-item-title>帮助和反馈</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </mu-appbar>
</template>

<script >

  export default {
    name: 'TopNavigation'
     }
</script>

<style scoped>
  content {
    background-color: black;
  }
</style>
