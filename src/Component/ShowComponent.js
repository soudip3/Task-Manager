import InputList from './InputList'

const ShowComponent = (props) => {
    const onDeleteItem = (value) => {
        props.deleteItem(value)
    }
    const update = (id,value) =>{
        props.updateValue(id,value)
    }
    console.log(props.items)
    return (
        <div>
            {props.items.map( item => {
            return <InputList updateItem={update} deleteItem = {onDeleteItem} id={item.id} data={item.data}></InputList>})}
        </div>
    )
}
export default ShowComponent;