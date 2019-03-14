import 'muse-ui/lib/styles/base.less'
import {
    AppBar,
    Button,
    BottomNav,
    Divider,
    Icon,
    List,
    Paper,
    Menu
} from 'muse-ui'

const components = [AppBar, Button, BottomNav, Divider, Icon, List, Paper, Menu]

export default{
    install(Vue) {
        console.log(Vue)
        components.forEach(c => Vue.use(c))
    }
}
