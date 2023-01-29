import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/recoil_state";

function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    // update item in list 
    const editItemText = ({ target: { val } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: val,
        });
        setTodoList(newList);
    };

    // delete item in list 
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    return (
        <div className="item-container">
            <div className="date-head">{item.createdAt}</div>
            <input type="text" value={item.text} onChange={editItemText} className='form-control item-input'/>
            <button onClick={deleteItem} className="btn btn-outline-danger item-btn">  DEL  </button>
        </div>
    )

}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;