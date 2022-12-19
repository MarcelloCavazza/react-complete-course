import { ExpenseItem } from "./ExpenseItem"
import './ExpensesList.css'

export const ExpenseList = (props) => {
    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }
    return (<>
        <ul className="expenses-list">
            {
                // eslint-disable-next-line array-callback-return
                props.data.map((service) => {

                    if (props.selectedOption !== "all") {
                        if (props.selectedOption === service.date.getFullYear().toString()) {
                            return <ExpenseItem key={service.id} title={service.title} price={service.price} date={service.date} />
                        }
                    } else {
                        return <ExpenseItem key={service.id} title={service.title} price={service.price} date={service.date} />
                    }
                })
            }
        </ul>
    </>)

}