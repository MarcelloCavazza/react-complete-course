import { ExpenseItem } from "./ExpenseItem"
export const ExpenseList = (props) => {
    return (<>
        {
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
    </>)

}