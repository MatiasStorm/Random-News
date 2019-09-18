
class ImageUrlGenerator {
    maxImageId = 300
    url = "https://picsum.photos/id/"

    getUrls(n, width, height) {
        let urls = []
        for (let i = 0; i < n; i++) {
            urls.push(this.getUrl(width, height));
        }
        console.log(urls)
        return urls;
    }

    getUrl = (width, height) => {
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

export default ImageUrlGenerator;