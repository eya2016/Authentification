const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');


/**
 * @route   POST api/auth
 * @desc    Auth new users
 * @access  Public
 */

router.post('/', (req, res) => {
  const { email, password } = req.body;

  //simple validation 
  if(!email || !password){
    return res.status(400).json({ msg: 'Please enter all fields'});
  }

  //check for existing user
  User.findOne({ email })
      .then(user => { 
        if(!user)return res.status(400).json({ msg: 'User Does not exists'})

        //Validate password - Vérifier le pw
        bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch)return res.status(400).json({ msg:'Invalid credentials' })

          jwt.sign(
            {id: user.id},
            config.get('jwtSecret'), 
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                   id: user.id,
                   username: user.username,
                   tel: user.tel,
                   email: user.email
                }
              })
            }
          )

        })
  });

});

module.exports = router;