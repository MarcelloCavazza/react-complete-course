import './ExpenseDate.css'
export const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('pt-BR', { month: 'numeric' })
    const year = props.date.getFullYear();
    const day = props.date.getDate();
    return (<>
        <div className='expense-date'>
            <div className='expense-date__day'>
                {day < 10 ? "0" + day : day}
            </div>
            <div className='expense-date__month'>
                {month < 10 ? "0" + month : month}
            </div>
            <div className='expense-date__year'>
                {year}
            </div>
        </div></>)
}