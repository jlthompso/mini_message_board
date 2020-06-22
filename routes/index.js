var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi There!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Create Message'})
})

router.post('/new', function(req, res, next) {
  let messageUser = req.body.messageUser
  let messageText = req.body.messageText
  messages.push({text: messageText, user: messageUser, added: new Date()})
  res.redirect('/')
})

module.exports = router;
