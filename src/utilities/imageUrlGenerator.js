import { IMAGE_URL_GENERATOR } from "../settings";

class ImageUrlGenerator {
    getUrls(n, width, height) {
        let urls = []
        for (let i = 0; i < n; i++) {
            urls.push(this.getUrl(width, height));
        }
        console.log(urls)
        return urls;
    }

    getUrl = (width, height) => {
        let id = this.randomInt(IMAGE_URL_GENERATOR.maxImageId);
        return IMAGE_URL_GENERATOR.imageUrl + id + "/" + width + "/" + height;
    }

    randomInt(max) {
        return Math.floor(Math.random() * max);
    }
}

export default ImageUrlGenerator;