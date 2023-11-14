const { Router } = require('express');
const router = Router();

const webpush = require('../webpush');
let pushSubscrition;

router.post('/subscription', async (req, res) => {
    pushSubscrition = req.body;
    res.status(200).json();

    const payload = JSON.stringify({
        title: 'My Custom Notification',
        message: 'Hello World'
    })

    try {
       await  webpush.sendNotification(pushSubscrition, payload);
    } catch (error){
        console.log(error)
    }

    
})



module.exports = router;