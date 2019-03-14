import * as types from './mutation-types'

export default {
    [types.RECEVIVE_DATA](state, data) {
        state.data = data
    }

}
