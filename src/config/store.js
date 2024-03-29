import React from "react";
import {createStore,applyMiddleware,compose} from 'redux'
import allReducers from "../reducers/index.js"

import thunk from 'redux-thunk';

const store=createStore(allReducers,compose(applyMiddleware(thunk)))
export default store;