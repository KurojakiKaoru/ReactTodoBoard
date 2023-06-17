import { useState } from "react";

export function EditItemModalForm({ editItem, editTodo, closeEditModal }) {

    const [editedItem, setEditedItem] = useState({ title: editItem.title, status: editItem.status });

    function handleSubmit(e) {
        e.preventDefault();
        if(editItem.title === '') return;
        editTodo(editItem.id, editedItem);
        
        
        closeEditModal(false);
    }

    return (
        <div className='modal-bg modal-animate-bg'>
            <div className='modal-container modal-animate'>
                <div className='modal-header'>
                    <h2 className='modal-title'>Edit Item</h2>
                    <button className='modal-btn-close' onClick={() => { closeEditModal(false); }}>&times;</button>
                </div>
                <div className='modal-body'>
                    <form className='item-form' onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <label htmlFor='item'>Title</label>
                            <input type='text' id='item-title' value={editedItem.title} onChange={e => setEditedItem({ ...editedItem, title: e.target.value })}/>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='item'>Status</label>
                            <select id='item-status' value={editedItem.status} onChange={e => setEditedItem({ ...editedItem, status: e.target.value })}>
                                <option value='todo'>Todo</option>
                                <option value='inprogress'>In-Progress</option>
                                <option value='completed'>Completed</option>
                            </select>
                        </div>
                        <div className='form-footer'>
                            <button type='button' className='modal-btn modal-btn-cancel' onClick={() => { closeEditModal(false); }}>Cancel</button>
                            <button type='submit' className='modal-btn'>Done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}