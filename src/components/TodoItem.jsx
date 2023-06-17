export function TodoItem({ title, id, status, openEditModal, deleteTodo, setEditItem }) {
    return (
        <li>
            <label>
                {title}
            </label>
            
            <button className="btn btn-warning" onClick={() => {setEditItem({ id, title, status }); openEditModal(true)}}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}