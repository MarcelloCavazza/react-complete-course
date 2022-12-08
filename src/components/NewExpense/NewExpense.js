import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'
export const NewExpense = (props) => {

    const onSaveInputHandler = (incomingData) => {
        const expenseData = {
            ...incomingData,
            id: Math.random().toString()
        }
        props.incomingData(expenseData);
    }

    return (<>
        <div className='new-expense'>
            <ExpenseForm onSaveInput={onSaveInputHandler} />
        </div>
    </>)
}