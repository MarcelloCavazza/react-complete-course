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
        props.expensesYears.map((expenses) => {
            let localDate = expenses.date.getFullYear().toString();
            console.log(localDate)
            if (localYEars.indexOf(localDate) === -1) {
                localYEars.push(localDate)
            }
            console.log(localYEars)

        })
        if (localYEars.length > 0) {
            setAllYearsCreated(() => {
                return localYEars.sort()
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
                        allYearsCreated.map((year) => {
                            return <option value={year}>{year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
};