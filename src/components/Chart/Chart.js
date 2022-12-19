import ChartBar from './ChartBar';
import './Chart.css;'


export const Chart = props => {

    return (<>
        <div className='chart'>
            {
                props.data.map((dataPoint) => {
                    <ChartBar value={dataPoint.value} maxValue={null} label={dataPoint.label} key={dataPoint.label} />
                })
            }
        </div>
    </>)
}