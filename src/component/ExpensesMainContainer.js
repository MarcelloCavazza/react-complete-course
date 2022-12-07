import { ExpenseItem } from "./ExpenseItem"
import './ExpensesMainContainer.css'
export const ExpensesMainContainer = (props) => {

    return (<>
        <div className="expenses">
            {
                props.data.map((service) => {
                    return <ExpenseItem key={service.id} title={service.title} price={service.price} date={service.date} />
                })
            }
        </div>
    </>)

}