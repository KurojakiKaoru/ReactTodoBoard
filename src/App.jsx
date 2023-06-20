import { useEffect, useState } from 'react';
import './styles.css';
import { TodoBoard } from './components/TodoBoard';
import { NewItemModalForm } from './components/NewItemModalForm';
import { EditItemModalForm } from './components/EditItemModalForm';


export default function App() {
    const [newItemModal, setNewItemModal] = useState(false);
    const [editItemModal, setEditItemModal] = useState(false);
    const [editItem, setEditItem] = useState({ title: '', status: 'todo' });

    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if(localValue == null) return [];
        return JSON.parse(localValue);
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodo(item) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title: item.title, status: item.status },
            ]
        });

    }

    function editTodo(id, editedTodo) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id) {
                    return { ...todo, title: editedTodo.title, status: editedTodo.status };
                }

                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id );
        });
    }

    function getTodo(id) {
        return todos.find(todo => todo.id === id);
    }

    return (
        <>
            <h1 className='title'>Todo Board</h1>
            <br className='divider' />
            
            <TodoBoard todos={todos} openNewModal={setNewItemModal} openEditModal={setEditItemModal} editModal={setEditItemModal} deleteTodo={deleteTodo} setEditItem={setEditItem}/>
            {newItemModal && <NewItemModalForm addTodo={addTodo} closeNewModal={setNewItemModal}/>}
            {editItemModal && <EditItemModalForm editItem={editItem} getTodo={getTodo} editTodo={editTodo} closeEditModal={setEditItemModal}/>}
        </>
    )
}