import { useEffect, useState } from 'react';
import './ExpensesFilter.css';

export const ExpensesFilter = (props) => {

    const [year, setYear] = useState("all")

    const selectYeaar = (yearSelected) => {
        setYear(yearSelected)
        props.onSearch(yearSelected);
    }

    const [allYearsCreated, setAllYearsCreated] = useState([]);

    useEffect(() => {
        let localYEars = [];
        let id = 0;
        let canBeInserted = true;
        // ! preciso arrumar uma forma de nao repetir valores no select de year
        props.expensesYears.map((expenses) => {
            console.log(expenses)
            let localDate = expenses.date.getFullYear().toString();

            if (canBeInserted) {
                localYEars.push({ year: localDate, key: id });
                id++;
            }
        })
        if (localYEars.length > 0) {
            setAllYearsCreated(() => {
                return localYEars
            })
        }
    }, [props.expensesYears])



    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={year} onChange={e => selectYeaar(e.target.value)}>
                    <option value='all'>All</option>
                    {
                        allYearsCreated.map((data) => {
                            return <option key={data.key} value={data.year}>{data.year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
};