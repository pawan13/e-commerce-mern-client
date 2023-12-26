const express = require("express");
const { registerClient, verifyClient, loginClient, getClientInfo, logOutClient } = require("../controller/clientController");

const router = express.Router();

// client registeration 
userRouter.post('/registration',  registerClient);
userRouter.post('/account-verification', verifyClient);
// accesstoken 

// login
userRouter.post('/login',  loginClient);
// get client details using access 
userRouter.get('/',  getClientInfo);
// logout
userRouter.post('/logout', logOutClient);
// reset passwords
userRouter.post('/reset-password', (req, res) => {
    res.json({
      status: SUCCESS,
      message: 'Reset Password Success',
    });
  });