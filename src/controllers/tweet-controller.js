const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();

const createTweet = async(req,res)=>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            massege:"Succesefully Tweet Created",
            data:response,
            err:{}
        })
    } catch (error) {
        // return res.status(500).json({
        //     success:false,
        //     massege:"Something Went Wrong",
        //     data:{},
        //     err:error
        // });
        console.error('erroe',error);
        
    }
}

module.exports = createTweet;