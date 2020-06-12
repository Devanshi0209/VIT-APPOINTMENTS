const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentuserSchema = new mongoose.Schema({
  vitemail: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function(v) {
        return /[a-zA-Z0-9]{1,}[@]{1}vitstudent[.]{1}ac{1}[.]{1}in{1}/.test(v)
      },
      message: props => `${props.value} is not a vit email id`
    }
  },
  regno:{
type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

studentuserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);

      }
      user.password = hash;
      next();
    });
  });
});

studentuserSchema.methods.comparePassword = function(candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

mongoose.model('studentuser', studentuserSchema);
