const { TweetRepository, HastagRepository } = require('../Repository/index');

class TweetService {
    constructor() {
        this.tweetRepsitory = new TweetRepository();
        this.hastagRepository = new HastagRepository();
    }
    async create(data) {

        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase());
        //this is regex for finding hashtags

        const tweet = await this.tweetRepsitory.create(data);

        let PresentTag = await this.hastagRepository.findByTitle(tags);

        let titleOfPresentTag = PresentTag.map((tag) => tag.title);
        /*
            newtag is that hastag which not exist in DB
        
        */

        let newTag = tags.filter(tag => !titleOfPresentTag.includes(tag));
        newTag = newTag.map(tag => {
            return { title: tag, tweets: [tweet.id] }
        });

        await this.hastagRepository.bulkCreateHashTag(newTag);

        /**
         * adding new title with existing hashtag 
         */

        PresentTag.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })

        /**
         * Todo 
         * 1.bulk create in mongoose
         * 2.fiter title of hastag o multiple tags
         * 3.how to add tweet id inside all the hastags
         */

        return tweet;
    }
}
module.exports = TweetService;