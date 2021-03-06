import React from 'react';
import './App.css';
import sound from './animal_bird_duck_quack_003.mp3'


let audio = new Audio(sound)

const Item = (props) => {
    let onSound = () => {
        props.upCount()
        audio.play()
    }

    let classItem = props.visibility
        ? 'photoVisibility'
        : 'photo'

    return (
        <div className={'item'}>
            <img className={classItem}
                 src={'data:image/jpeg;base64,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'}
                 alt={'dog?'}
                 onClick={onSound}
            />
        </div>
    )
}

export default Item
