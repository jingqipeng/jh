<template>
    <mu-bottom-nav @change="change" :value.sync="shift" style="background-color: #f4f3f3">
        <mu-bottom-nav-item value="message" title="微信" icon="chat_bubble_outline"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="friends" title="通讯录" icon="people_outline"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="discover" title="发现" icon="explore_outline"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="my" title="我" icon="perm_identity"></mu-bottom-nav-item>
    </mu-bottom-nav>
</template>

<script>
    export default {
        name: 'bottomTab',
        data () {
            return {
                shift: 'message'
            }
        },
        methods: {
            change(val) {
                this.$router.push(val)
            }
        }
    }
</script>

<style scoped>

</style>
