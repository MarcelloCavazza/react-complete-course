import { useState } from "react"
import { ExpensesFilter } from "../ExpenseFilter/ExpensesFilter"
import { Card } from "../UI/Card"
import { ExpenseList } from "./ExpenseList"
import './ExpensesMainContainer.css'
export const ExpensesMainContainer = (props) => {

    const [yearSeached, setYearSeached] = useState("all")

    const searchValueHandler = (year) => {
        setYearSeached(year)
    }

    return (<>
        <Card className="expenses">
            <ExpensesFilter onSearch={searchValueHandler} expensesYears={props.data} />
            <ExpenseList data={props.data} selectedOption={yearSeached} />
        </Card>
    </>)

}