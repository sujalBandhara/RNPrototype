import React, { Component } from 'react';
import { Platform } from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './../reducers/reducer';
import axios from 'axios';
import devTools from 'remote-redux-devtools';

//Base url set here
const client = axios.create({
  baseURL: 'https://avanzaindia.com/dev/index.php?r=api',
  header: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
  responseType: 'json'
});

//Apply middleware to the axios
const enhancer = compose(
  applyMiddleware(axiosMiddleware(client)),
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 8000
  })
);

//Store will be create from here
const store = createStore(reducer, enhancer);


export default store;
