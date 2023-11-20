const{HastagRepository,TweetRepository} = require('../Repository/index');

class Tweet {
    constructor() {
        this.tweetRepsitory = new this.tweetRepsitory();
    }
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tags)=>{
            tags.substring(1).toLowerCase();
        }) //this is regex for finding hashtags
        const notPrasentTags = tags.fillter((tag)=>{
            tag.include()
        })
        const tweet = await this.tweetRepsitory.create(data);
        const PresentTag = await this.HastagRepository.findByName(tags);
        const NewTag = await PresentTag.map((tag)=>)

         
        /**
         * Todo 
         * 1.bulk create in mongoose
         * 2.fiter title of hastag o multiple tags
         * 3.how to add tweet id inside all the hastags
         */

        return tweet;
    }
}