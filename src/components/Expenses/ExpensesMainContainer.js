import { useState } from "react"
import { ExpensesFilter } from "../ExpenseFilter/ExpensesFilter"
import { Card } from "../UI/Card"
import { ExpenseItem } from "./ExpenseItem"
import './ExpensesMainContainer.css'
export const ExpensesMainContainer = (props) => {

    const [yearSeached, setYearSeached] = useState("all")

    const searchValueHandler = (year) => {
        setYearSeached(year)
    }

    return (<>
        <Card className="expenses">
            <ExpensesFilter onSearch={searchValueHandler} />
            {
                props.data.map((service) => {

                    if (yearSeached !== "all") {
                        if (yearSeached === service.date.getFullYear().toString()) {
                            return <ExpenseItem key={service.id} title={service.title} price={service.price} date={service.date} />
                        }
                    } else {
                        return <ExpenseItem key={service.id} title={service.title} price={service.price} date={service.date} />
                    }
                })
            }
        </Card>
    </>)

}