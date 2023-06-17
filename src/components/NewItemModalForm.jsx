import { useState } from "react";

export function NewItemModalForm({ addTodo, closeNewModal }) {

    const [newItem, setNewItem] = useState({ title: '', status: 'todo' });

    function handleSubmit(e) {
        e.preventDefault();
        if(newItem.title === '') return;
        addTodo(newItem);
        
        closeNewModal(false);
        setNewItem({ title: '', status: 'todo' });
    }

    return (
        <div className='modal-bg modal-animate-bg'>
            <div className='modal-container modal-animate'>
                <div className='modal-header'>
                    <h2 className='modal-title'>Create a New Item</h2>
                    <button className='modal-btn-close' onClick={() => { closeNewModal(false); setNewItem({ title: '', status: 'todo' }); }}>&times;</button>
                </div>
                <div className='modal-body'>
                    <form className='item-form' onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <label htmlFor='item'>Title</label>
                            <input type='text' id='item-title' value={newItem.title} onChange={e => setNewItem({ ...newItem, title: e.target.value })}/>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='item'>Status</label>
                            <select id='item-status' value={newItem.status} onChange={e => setNewItem({ ...newItem, status: e.target.value })}>
                                <option value='todo'>Todo</option>
                                <option value='inprogress'>In-Progress</option>
                                <option value='completed'>Completed</option>
                            </select>
                        </div>
                        <div className='form-footer'>
                            <button type='button' className='modal-btn modal-btn-cancel' onClick={() => { closeNewModal(false); setNewItem({ title: '', status: 'todo' }); }}>Cancel</button>
                            <button type='submit' className='modal-btn'>Add Item +</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}