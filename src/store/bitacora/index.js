import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import getters from "./getters";

const bitacoraStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default bitacoraStore;