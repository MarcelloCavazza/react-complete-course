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
        // ! preciso arrumar uma forma de nao repetir valores no select de year
        // eslint-disable-next-line array-callback-return
        props.expensesYears.map((expenses) => {
            let localDate = expenses.date.getFullYear().toString();
            localYEars.push(localDate);
        })
        if (localYEars.length > 0) {
            let result = localYEars.filter((year, index) => {
                return localYEars.indexOf(year) === index;
            })
            console.log(result)
            setAllYearsCreated(() => {
                return result
            })
        }
    }, [props.expensesYears])


    let id = 0;
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={year} onChange={e => selectYeaar(e.target.value)}>
                    <option value='all'>All</option>
                    {
                        allYearsCreated.map((data) => {
                            return <option key={id++} value={data}>{data}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
};