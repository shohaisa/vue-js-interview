import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const _store = new Vuex.Store({
    state: {
        age: '',
        operator: '',
        address: null,
    },
    getters: {
        age: (state) => state.age,
        address: (state) => state.address,
        operator: (state) => state.operator,
    },
    actions: {
        setAge(context, payload) {
            context.commit('SET_AGE', payload)
        },
        setAddress(context, payload) {
            context.commit('SET_ADDRESS', payload)
        },
        setOperator(context, payload) {
            context.commit('SET_OPERATOR', payload)
        },
    },
    mutations: {
        SET_AGE: (state, age) => {
            state.age = age
        },
        SET_ADDRESS: (state, address) => {
            state.address = address
        },
        SET_OPERATOR: (state, operator) => {
            state.operator = operator
        }
    }
})

export default _store