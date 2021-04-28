import React, {useState} from 'react'
import './App.css';
import InputItem from './Component/InputItem'
import ShowComponent from './Component/ShowComponent'
const DUMMY_ITEM = [
  
]
const App = () => {
  const [finalItem, setItem] = useState(DUMMY_ITEM)
  const [checkValue, setCheckValue] = useState(DUMMY_ITEM)
  const [dummy_value, set_dummy_value] = useState(0)
  const itemAdd = (value) => {
    setItem ((prevItem) => {
      return [...prevItem,value]
    })
    setCheckValue ((prevItem) => {
      return [...prevItem,value]
    })
    set_dummy_value(0)
  }
  
  const onDeleteItem = (value) =>{
    const afterDeleteItem = finalItem.filter( item => {
      return item.id !== value
    })
    setItem(afterDeleteItem)
    setCheckValue(afterDeleteItem)
    set_dummy_value(0)
  }
  
  const onCheckItem = (value) =>{
    if(value.length!==0){
      setCheckValue(finalItem.filter(item => {return item.data.toLowerCase().includes(value.toLowerCase())}))
    }
    else{
      setCheckValue(finalItem)
    }
    set_dummy_value(1)
  }

  const updateItem = (_id,value) => {
    let initialItem = []
    setItem(initialItem)
    setCheckValue(initialItem)
    for (const item of finalItem){
      if(item.id === _id){
        setItem((prevItem) => {
          return [...prevItem,{id:_id,data:value}]
        })
      }
      else{
        setItem((prevItem) => {
          return [...prevItem,item]
        })
      }
    }
    for (const item of checkValue){
      if(item.id === _id){
        setCheckValue((prevItem) => {
          return [...prevItem,{id:_id,data:value}]
        })
      }
      else{
        setCheckValue((prevItem) => {
          return [...prevItem,item]
        })
      }
    }
  }
  return (
    <div className="App">
      <div className="modal">
        <h1 className="task-manager">Task Manager</h1>
        <InputItem onItemAdd={itemAdd} checkItem={onCheckItem}></InputItem>
        {dummy_value===0&&<ShowComponent updateValue={updateItem} items={finalItem} deleteItem={onDeleteItem}></ShowComponent>}
        {dummy_value===1&&<ShowComponent updateValue={updateItem} items={checkValue} deleteItem={onDeleteItem}></ShowComponent>}
      </div>
    </div>
  );
}

export default App;
