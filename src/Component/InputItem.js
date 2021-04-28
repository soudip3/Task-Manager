import React, {useState} from 'react'
import editIcon from './add.png'
import './InputItem.css'
const InputItem = (props) => {

    const [item, setItem] = useState('')

    const onInputChange = (event) => {
        setItem(event.target.value)
        props.checkItem(event.target.value)
    }

    const onSubmitItem = (event) => {
        if(item.length === 0){
            alert("Please add Note")
        }
        else{
            event.preventDefault()
            const itemdata = {
                id: Math.random(),
                data : item
            }
            setItem('')
            props.onItemAdd(itemdata)
        }
    }

    return(
        <form onSubmit={onSubmitItem}>
            <div className='item-add'>
                <input type="text" value={item} required onChange={onInputChange} placeholder="Add a item" className="item-box"></input>
                
                <img src={editIcon} onClick={onSubmitItem} alt="edit" className="edit-logo"></img>
            </div>
        </form>
    )
}

export default InputItem;