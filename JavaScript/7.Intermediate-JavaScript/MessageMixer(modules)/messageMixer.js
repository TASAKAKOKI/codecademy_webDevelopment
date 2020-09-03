const MessageMixer = {
    countCharacter(inputString, inputCharacter) {
        let count = 0;
        let string = inputString.toLowerCase();
        let character = inputCharacter.toLowerCase();
        for (let i = 0; i < string.length; i++) {
            if (string[i] === character) {
                count++;
            }
          }
        return count; 
    },
    /* .substring() :
            .substring()은 문자열에서 특정 부분만 골라낼 때 사용하는 method.
            - syntax:
                string.substring( start, end )
                start와 end로 문자열에서 골라낼 부분의 처음과 끝을 지정
                start 값은 필수이며, end 값이 지정되지 않으면 문자열의 끝까지를 의미
                eg) var str = '123456789';
                    document.write( str.substring( 1, 4 ) ); // 234
    reference: 'https://www.codingfactory.net/10429'
    */
    capitalizeFirstCharacterOfWords(string) {
        let arr = string.split(" ");  
        for (let i = 0; i < arr.length; i++) {  
            let word = arr[i];
            arr[i] = word[0].toUpperCase() + word.substring(1); 
        }
        return arr.join(" "); 
    },
    reverseWord(word) {
        return word.split("").reverse().join("");
    },
    reverseAllWords(sentence) {
        let words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = this.reverseWord(words[i]);
        }
        return words.join(" ");
    },
    replaceFirstOccurence(string, toBeReplaced, replaceWith) {
        return string.replace(toBeReplaced, replaceWith);
    },
    replaceAllOccurrences(string, toBeReplaced, replaceWith) {
        return string.split(toBeReplaced).join(replaceWith);
    },
    encode(string) {
        let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
        for (let key in replacementObject) {
           string = this.replaceAllOccurrences(string, key, replacementObject[key]); 
        }	
        return string;
    },
    palindrome(str) {
        return `${str} ${this.reverseWord(str)}`;
    },
    pigLatin(sentence, character) {
        return sentence.split(' ').join(character + ' ');
    }
};

// export default MessageMixer;
module.exports = MessageMixer;