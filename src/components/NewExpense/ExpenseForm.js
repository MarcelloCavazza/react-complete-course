import { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");
    const [showingForm, setShowingForm] = useState(false);

    const submitFormHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            price,
            date: new Date(date)
        }
        props.onSaveInput(expenseData)
        clearForms()
    }

    const clearForms = () => {
        setPrice(0)
        setDate("")
        setTitle("")
    }

    const handleFormsDisplay = (event, isToShow) => {
        event.preventDefault()
        setShowingForm(isToShow)
    }

    return (<>
        <div className='new-expense__actions' style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ display: showingForm ? 'none' : 'flex' }} type="submit" onClick={e => handleFormsDisplay(e, true)}>Add new Expense</button>
        </div>
        <form style={{ display: showingForm ? 'block' : 'none' }} onSubmit={e => submitFormHandler(e)}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} min={0.01} step={0.01} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().getFullYear() + '-01-01'} max={new Date().getFullYear() + '-12-31'} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={e => handleFormsDisplay(e, false)}>Cancelar</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </>)
}