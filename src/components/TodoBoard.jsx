import { TodoItem } from "./TodoItem";

export function TodoBoard({ todos, openNewModal, openEditModal, deleteTodo, setEditItem }) {
    return (
        <div className='todo'>
            <div className='todo-board'>
                <div className='todo-category'>
                    <div className='todo-heading'>
                        <h3>Todo</h3>
                        <button onClick={() => openNewModal(true)}>+</button>
                    </div>
                    <ul className='list'>
                        {todos.filter(todo => todo.status === "todo").length === 0 && "No Todos"}
                        {todos.filter(todo => todo.status === "todo").map(todo => {
                            return (
                                <TodoItem {...todo} key={todo.id} openEditModal={openEditModal} deleteTodo={deleteTodo} setEditItem={setEditItem}/>
                            )
                        })}
                    </ul>
                </div>
                <div className='todo-category'>
                    <div className='todo-heading'>
                        <h3>In-Progress</h3>
                    </div>
                    <ul className='list'>
                        {todos.filter(todo => todo.status === "inprogress").length === 0 && "No Todos"}
                        {todos.filter(todo => todo.status === "inprogress").map(todo => {
                            return (
                                <TodoItem {...todo} key={todo.id} openEditModal={openEditModal} deleteTodo={deleteTodo} setEditItem={setEditItem}/>
                            )
                        })}
                    </ul>
                </div>
                <div className='todo-category'>
                    <div className='todo-heading'>
                        <h3>Completed</h3>
                    </div>
                    <ul className='list'>
                        {todos.filter(todo => todo.status === "completed").length === 0 && "No Todos"}
                        {todos.filter(todo => todo.status === "completed").map(todo => {
                            return (
                                <TodoItem {...todo} key={todo.id} openEditModal={openEditModal} deleteTodo={deleteTodo} setEditItem={setEditItem}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}