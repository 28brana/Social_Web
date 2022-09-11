import { combineReducers } from "redux";
import routerReducer from './slices/router';
const rootReducer = combineReducers({
    router: routerReducer
})

export { rootReducer };