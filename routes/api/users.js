const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');


/**
 * @route   POST api/users
 * @desc    Register new users
 * @access  Private
 */

router.post('/', (req, res) => {
  const { username, tel , email, password } = req.body;

  //simple validation 
  if(!username || !email || !password){
    return res.status(400).json({ msg: 'Please enter all fields'});
  }

  //Vérification mail Format
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(! re.test(String(email).toLowerCase())){
    return res.status(400).json({ msg: 'Please enter a correct mail Format'});
  }

   /* //Vérification Tel Format
    const re = /^([0-9]{8})$/;
    if(! re.test(Number(tel))){
      return res.status(400).json({ msg: 'Please enter a correct Tel Format'});
    }*/

  //check for existing user
  User.findOne({ email })
      .then(user => {
        if(user)return res.status(400).json({ msg: 'User already exists'})
  
        const newUser = new User({ 
          username,
          email,
          tel,
          password
        });

        //Create salt & hash
        bcrypt.genSalt(10, (err,salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash)=> {
            if(err) throw  err;
            newUser.password = hash;
            newUser.save()
              .then(user => {

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

              });
          })
        })


      });

});

module.exports = router;