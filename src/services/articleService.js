import ImageUrlGenerator from "../utilities/imageUrlGenerator";


class ArticleService {
    constructor(lorem) {
        this.lorem = lorem;
        this.ImageUrlGenerator = new ImageUrlGenerator();
        this.url = "https://picsum.photos/id/"
    }
    getWords(n) {
        return this.lorem.generateWords(n);
    }
    getSentences(n) {
        return this.lorem.generateSentences(n);
    }

    getImageUrls(n, width, height) {
        return this.ImageUrlGenerator.getUrls(n, width, height)
    }

    getImageUrl = (width, height) => {
        return this.ImageUrlGenerator.getUrl(width, height)
    }
}

export default ArticleService;