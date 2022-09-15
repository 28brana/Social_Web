import { combineReducers } from "redux";
import routerReducer from './slices/router';
import commonReducer from './slices/common';
const rootReducer = combineReducers({
    router: routerReducer,
    common: commonReducer
})

export { rootReducer };