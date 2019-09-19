import ImageUrlGenerator from "../utilities/imageUrlGenerator";


class ArticleService {
    constructor(lorem) {
        this.lorem = lorem;
        this.maxImageId = 300
        this.url = "https://picsum.photos/id/"
    }
    getWords(n) {
        return this.lorem.generateWords(n);
    }
    getSentences(n) {
        return this.lorem.generateSentences(n);
    }

    getImageUrls(n, width, height) {
        let urls = []
        for (let i = 0; i < n; i++) {
            urls.push(this.getImageUrl(width, height));
        }
        return urls;
    }

    getImageUrl = (width, height) => {
        let id = this.randomInt(this.maxImageId);
        return this.url + id + "/" + width + "/" + height;
    }

    setMaxImageId(value) {
        this.maxImageId = value;
    }

    randomInt(max) {
        return Math.floor(Math.random() * max);
    }


}

export default ArticleService;