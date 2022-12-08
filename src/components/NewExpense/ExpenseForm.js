import './ExpenseForm.css'

export const ExpenseForm = () => {

    const inputsData = [
        {
            label: 'Title',
            inputType: 'text',
        },
        {
            label: 'Amount',
            inputType: 'number',
            opitionalAttributes: {
                min: '0.01',
                step: '0.01'
            }
        },
        {
            label: 'Date',
            inputType: 'date',
            opitionalAttributes: {
                min: new Date().getFullYear + '-01-01',
                max: new Date().getFullYear + '-12-31',
            }
        }
    ]

    return (<>
        <form>
            <div className='new-experience__controls'>
                {
                    inputsData.map((input) => {
                        return (<>
                            <div className='new-experience__control'>
                                <label>{input.label}</label>
                                <input type={input.inputType} />
                            </div>
                        </>)
                    })
                }
                <div className='new-expense__actions'>
                    <button type="submit">Add Expnese</button>
                </div>
            </div>
        </form>
    </>)
}