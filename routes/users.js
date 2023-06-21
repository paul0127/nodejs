var express = require('express');
var router = express.Router();

// const webpush = require('web-push');

const vapidKeys = {
  publicKey: 'BPI8TwtsTsK7rhQUpBN1AeVT0whMppLUoZ0V4RPSGsqPNEHs2eGa4mSNHKtKH_oAHjyCcIK09E5da2X0GG_8shM',
  privateKey: '1OF9OL2PLEXycWEXzbqDbJ_aA-LZ4LJAiFvelenJumk'
};


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({ user: 'tobi' })
});

/* GET users listing. */
// router.post('/:pushSubscription', function(req, res, next) {
//   // res.send('respond with a resource');
//   // res.json({ user: req.params.username })

//   webpush.setVapidDetails(
//     'mailto:web-push-book@gauntface.com',
//     vapidKeys.publicKey,
//     vapidKeys.privateKey
//   );
  
//   const subscription = req.params.pushSubscription
//   const dataToSend = {
//     title: 'Credit Card',
//     option: {
//       body: "Did you make a $1,000,000 purchase at Dr. Evil...",
//       actions: [
//         { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
//         { "action": "no", "title": "No", "icon": "images/no.png" }
//       ]
//     }
//   }
  
// });

module.exports = router;
