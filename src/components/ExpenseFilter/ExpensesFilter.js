import { useState } from 'react';
import './ExpensesFilter.css';

export const ExpensesFilter = (props) => {

    const [year, setYear] = useState("all")

    const selectYeaar = (yearSelected) => {
        setYear(yearSelected)
        props.onSearch(year);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={e => selectYeaar(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};