const Tweet = require('../Models/tweet');

class TweetReoository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.error('error from Tweet Repo Create' + error);

        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.error("error from repo find id" + error);

        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean();
            return tweet;

        } catch (error) {
            console.error("error from repo find comment id" + error);
        }
    }

    async delete(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;

        } catch (error) {
            console.error("error from repo delete id" + error);
        }
    }

}

module.exports = TweetReoository;
