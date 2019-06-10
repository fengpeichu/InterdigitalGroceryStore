import React from 'react';
import dva from 'dva';
import ROUTER from './router'
let app = dva()

app.router(ROUTER)

app.start('#root')