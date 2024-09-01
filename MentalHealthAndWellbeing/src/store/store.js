import { createStore } from "vuex";

export default createStore({
    state: {
        userDetailsArray: []
    },
    mutations: {
        addUser(state,userDetails){
            state.userDetailsArray.push(userDetails)
        }
    },
    actions: {
        addNew({commit}, userDetails){
            commit('addUser', userDetails);
        },
    },
});