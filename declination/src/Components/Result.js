import { useRef } from "react";
import { useSelector } from "react-redux";

export default function Result(props) {
    let result = useRef('');
    const word = useSelector(state => state.addDeclination.value)
    
    const wordEnds = {
        "а": ["ы", "е", "у", "ой", "е"],
        "ша": ["ши", "ше", "шу", "шой", "ше"],
        "жа": ["жи", "же", "жу", "жой", "же"],
        "ка": ["ки", "ке", "ку", "кой", "ке"],
        "ча": ["чи", "че", "чу", "чой", "че"],
        "б": ["ба", "бу", "ба", "бом", "бе"],
        "в": ["ва", "ву", "ва", "вом", "ве"],
        "м": ["ма", "му", "ма", "мом", "ме"],
        "г": ["га", "гу", "га", "гом", "ге"],
        "д": ["да", "ду", "да", "дом", "де"],
        "л": ["ла", "лу", "ла", "лом", "ле"],
        "е": ["я", "ю", "и", "е", "ем"],
        "ёл": ["ла", "лу", "ла", "лом", "ле"],
        "ел": ["ла", "лу", "ла", "лом", "ле"],
        "ж": ["жа", "жу", "жа", "жом", "же"],
        "з": ["за", "зу", "за", "зом", "зе"],
        "к": ["ка", "ку", "ка", "ком", "ке"],
        "ок": ["ка", "ку", "ка", "ком", "ке"],
        "н": ["на", "ну", "на", "ном", "не"],
        "п": ["па", "пу", "па", "пом", "пе"],
        "т": ["та", "ту", "та", "том", "те"],
        "ф": ["фа", "фу", "фа", "фом", "фе"],
        "ч": ["ча", "чу", "ча", "чом", "че"],
        "ц": ["ца", "цу", "ца", "цом", "це"],
        "щ": ["ща", "щу", "ща", "щом", "ще"],
        "р": ["ра", "ру", "ра", "ром", "ре"],
        "х": ["ха", "ху", "ха", "хом", "хе"],
        "и": ["ей", "ям", "и", "ями", "ях"],
        "ый": ["ого", "ому", "ый", "ым", "ом"],
        "й": ["я", "ю", "я", "ем", "е"],
        "о": ["а", "у", "о", "ом", "е"],
        "с": ["са", "су", "с", "сом", "се"],
        "ш": ["ша", "шу", "ш", "шом", "ше"],
        "ы": ["ов", "ам", "ы", "ами", "ах"],
        "ь": ["я", "ю", "я", "ем", "е"],
        "уль": ["ули", "уле", "улю", "улей", "уле"],
        "чь": ["чи", "чи", "чь", "чью", "чи"],
        "шь": ["ши", "ши", "шь", "шью", "ши"],
        "дь": ["ди", "ди", "дь", "дью", "ди"],
        "ть": ["ти", "ти", "ть", "тью", "ти"],
        "я": ["и", "е", "ю", "ей", "е"]
    }

    function replacer(currentWord, currentEnding, currentKey) {
       let word = currentWord.split('');
       let ending = currentEnding;
       
       if (currentKey.length === 3) {
           word.splice(-3, 3, ending)
           return word.join('');
       }
       if (currentKey.length === 2) {
            word.splice(-2, 2, ending)
            return word.join('');
        }
        if (currentKey.length === 1) {
            word.splice(-1, 1, ending)
            return word.join('');
        }
    }

    
    function getCases(word) {
        let endOfWord = word.slice(-3);
        for (let key in wordEnds) {
            if (key === endOfWord){
                result.current = {
                    'r': replacer(word, wordEnds[endOfWord][0], key),
                    'd': replacer(word, wordEnds[endOfWord][1], key),
                    'v': replacer(word, wordEnds[endOfWord][2], key),
                    't': replacer(word, wordEnds[endOfWord][3], key),
                    'p': replacer(word, wordEnds[endOfWord][4], key)
                }
                return;
            }
        }

        endOfWord = word.slice(-2);
        for (let key in wordEnds) {
            if (key === endOfWord){
                result.current = {
                    'r': replacer(word, wordEnds[endOfWord][0], key),
                    'd': replacer(word, wordEnds[endOfWord][1], key),
                    'v': replacer(word, wordEnds[endOfWord][2], key),
                    't': replacer(word, wordEnds[endOfWord][3], key),
                    'p': replacer(word, wordEnds[endOfWord][4], key)
                }
                return;
            }
        }
        endOfWord = word.slice(-1);
        for (let key in wordEnds) {
            if (key === endOfWord){
                if (key === 'ц') {
                    result.current = {
                        'r': replacer(word, wordEnds[endOfWord][0], key),
                        'd': replacer(word, wordEnds[endOfWord][1], key),
                        'v': replacer(word, wordEnds[endOfWord][2], key),
                        't': replacer(word, wordEnds[endOfWord][3], key),
                        'p': replacer(word, wordEnds[endOfWord][4], key)
                    }
                    return;
                }
                result.current = {
                    'r': replacer(word, wordEnds[endOfWord][0], key),
                    'd': replacer(word, wordEnds[endOfWord][1], key),
                    'v': replacer(word, wordEnds[endOfWord][2], key),
                    't': replacer(word, wordEnds[endOfWord][3], key),
                    'p': replacer(word, wordEnds[endOfWord][4], key)
                }
                return;
            }
        }
    }

    if (word) { 
        getCases(word);
    }
    
    if (word) {
    return (
        <div className='result'>
            <h2 className='result__title'>Результаты:</h2>
            <ul className='result__list'>
                <li className='result__list-item'>Родительный:<div className="result__answer-word">{result.current.r}</div></li>
                <li className='result__list-item'>Дательный:<div className="result__answer-word">{result.current.d}</div></li>
                <li className='result__list-item'>Винительный:<div className="result__answer-word">{result.current.v}</div></li>
                <li className='result__list-item'>Творительный:<div className="result__answer-word">{result.current.t}</div></li>
                <li className='result__list-item'>Предложный:<div className="result__answer-word">{result.current.p}</div></li>
            </ul>
        </div>
    )}
    return (
        <div className='result'>
            <h2 className='result__title'>Результаты:</h2>
            <ul className='result__list'>
                <li className='result__list-item'>Родительный:<div className="result__answer-word"></div></li>
                <li className='result__list-item'>Дательный:<div className="result__answer-word"></div></li>
                <li className='result__list-item'>Винительный:<div className="result__answer-word"></div></li>
                <li className='result__list-item'>Творительный:<div className="result__answer-word"></div></li>
                <li className='result__list-item'>Предложный:<div className="result__answer-word"></div></li>
            </ul>
        </div>)
}