import { useRef } from "react"
import {useDispatch } from "react-redux";
import { addWord } from "../app/addDeclinationSlice";

export default function InputForm(props) {
    const inputForm = useRef();
    const errorWords = useRef();
    const errorNumbers = useRef();
    const buttonContainer = useRef();
    const dispatch = useDispatch();

    const getWordFromInput = (e) => {
        e.preventDefault();
        const value = inputForm.current.value.trim();
        if (value.match(/\d+/)) {
           inputForm.current.classList.add('error');
           errorNumbers.current.classList.add('highlite');
           buttonContainer.current.classList.add('form__button-container_error');
           buttonContainer.current.classList.remove('form__button-container');
           return;
        } else if (value.indexOf(' ') !== -1) {
           inputForm.current.classList.add('error');
           errorWords.current.classList.add('highlite');
           buttonContainer.current.classList.add('form__button-container_error');
           buttonContainer.current.classList.remove('form__button-container');
           return;
        }
        dispatch(addWord(value))
    }

    const removeErrorClass = () => {
        inputForm.current.classList.remove('error');
        errorWords.current.classList.remove('highlite');
        errorNumbers.current.classList.remove('highlite');
        buttonContainer.current.classList.add('form__button-container');
        buttonContainer.current.classList.remove('form__button-container_error');
    }
 
    return (
        <form className='form'>
            <div className='form__input-container'>
                <label className='form__label' htmlFor='input-word'>Введите <span ref={errorWords}>одно</span> имя существительное <span ref={errorNumbers}>без цифр</span> в единственном числе, именительном падеже:</label>
                <input onChange={removeErrorClass} ref={inputForm} className='form__input-word' id='input-word' type='text'></input>
            </div>
            <div className='form__button-container' ref={buttonContainer}>
                <button onClick={(e) => getWordFromInput(e)}>Просклонять</button>
            </div>
        </form>
    )
}