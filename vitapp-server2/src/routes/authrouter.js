
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const studentuser = mongoose.model('studentuser');
const profuser = mongoose.model('profuser');

const router = express.Router();

router.post('/signupstudent', async (req, res) => {
  const { vitemail, regno, password } = req.body;

  try {
    const user1 = new studentuser({ vitemail, regno, password });
    await user1.save();

    const token = jwt.sign({ userId: user1._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});


router.post('/signupprof', async (req, res) => {
  const { vitemail, designation, password } = req.body;

  try {
    const user2 = new profuser({ vitemail, designation, password });
    await user2.save();

    const token2 = jwt.sign({ userId: user2._id }, 'MY_SECRET_KEY');
    res.send({ token: token2 });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});




router.post('/signinstudent', async (req, res) => {
  const { vitemail, regno, password } = req.body;

  if (!vitemail || !password || !regno) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await studentuser.findOne({ vitemail });
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

router.post('/signinprof', async (req, res) => {
  const { vitemail, designation, password } = req.body;

  if (!vitemail || !password || !designation) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await profuser.findOne({ vitemail });
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});



module.exports = router;
