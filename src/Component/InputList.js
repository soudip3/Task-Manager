import React, {useState} from 'react'
import deleteIcon from './deleteIcon.png'
import editIcon from './edit.png'
import './InputList.css'

const InputList = (props) => {
    const [enableText, setEnableText] = useState(true)
    const [editingText, setEditingText] = useState(props.data)
    const onDeleteHandler = () => {
        props.deleteItem(props.id)
    }
    const onEditHandler = () => {
        setEnableText(!enableText)
    }
    const onChangeHandler = (event) => {
        setEditingText(event.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        setEnableText(true)
        console.log(editingText)
        props.updateItem(props.id,editingText)
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div className='list-item'>
                { enableText===true && <input type="text" value={editingText} disabled={enableText} onChange={onChangeHandler} size="20" className="list-box"></input>}
                { enableText===false && <input type="text" value={editingText} disabled={enableText} autoFocus onChange={onChangeHandler} size="20" className="list-box-edit"></input>}
                <img src={deleteIcon} alt="delete" className="delete-logo" onClick={onDeleteHandler}></img>
                <img src={editIcon} alt="edit" onClick={onEditHandler} className="delete-logo"></img>
            </div>
        </form>
    )
}

export default InputList;