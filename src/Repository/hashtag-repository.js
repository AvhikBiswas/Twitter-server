const Hashtag = require('../Models/hashtag');


class HashtagRepository {

    async createHashTags(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.error('error from HASHTAG Repo Create' + error);

        }
    }

    async bulkCreateHashTag(data){
        try {
            const tag = await Hashtag.insertMany(data);
            return tag;
        } catch (error) {
            console.error('error from bulk tag repo ' + error);
            
        }
    }

    async getHashtag(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.error("error from HASHTAG repo find TAG" + error);
            
        }
    }

   
    async deleteHashtag(id){
        try {
            const tag = await Hashtag.findByIdAndRemove(id);
            return tag;
            
        } catch (error) {
            console.error("error from HASHTAG delete id" + error);            
        }
    }

    async findByTitle(titleList){
        try {
            const tags = await Hashtag.find({
                title:titleList
            })
            return tags;
        } catch (error) {
            console.error("error from HASHTAG find by TITLE" + error)
        }
    }

}

module.exports = HashtagRepository;
