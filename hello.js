const webpush = require('web-push');

const vapidKeys = {
  publicKey: 'BPI8TwtsTsK7rhQUpBN1AeVT0whMppLUoZ0V4RPSGsqPNEHs2eGa4mSNHKtKH_oAHjyCcIK09E5da2X0GG_8shM',
  privateKey: '1OF9OL2PLEXycWEXzbqDbJ_aA-LZ4LJAiFvelenJumk'
};

webpush.setVapidDetails(
  'mailto:web-push-book@gauntface.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subscription = 這裡要填入 PushSubscription
const dataToSend = {
  title: 'Credit Card',
  option: {
    body: "Did you make a $1,000,000 purchase at Dr. Evil...",
    actions: [
      { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
      { "action": "no", "title": "No", "icon": "images/no.png" }
    ]
  }
}

const triggerPushMsg = function(subscription, dataToSend) {
  return webpush.sendNotification(subscription, JSON.stringify(dataToSend))
  .catch((err) => {
    if (err.statusCode === 404 || err.statusCode === 410) {
      console.log('Subscription has expired or is no longer valid: ', err);
    } else {
      throw err;
    }
  });
};

triggerPushMsg(subscription, dataToSend).then(data =>{
  console.log("success:")
  console.log(JSON.stringify(data,null,2));
}).catch(error => {
  console.log("fail:")
  console.log(JSON.stringify(error,null,2));
});