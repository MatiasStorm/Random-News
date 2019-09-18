import { LoremIpsum } from "lorem-ipsum";

class TextGenerator {
    static getWords(n) {
        const lorem = new LoremIpsum();
        return lorem.generateWords(n);
    }

    static getSentences(n) {
        const lorem = new LoremIpsum();
        return lorem.generateSentences(n);
    }

}

export default TextGenerator