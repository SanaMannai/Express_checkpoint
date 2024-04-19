const express = require('express');

const { getHome, getServices, getContact } = require ('../handlers/user');

const userRouter = express.Router();

userRouter.get('/' ,getHome);
userRouter.get('/services' ,getServices);
userRouter.get('/contact' ,getContact);


module.exports = userRouter

