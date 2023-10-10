import './app-filter.css'


const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', lable: 'Все сотрудники'},
        {name: 'rise', lable: 'На повышение'},
        {name: 'moreThen1000', lable: 'З/П больше 1000$'},
    ];

    const buttons = buttonData.map(({name, lable}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-linght'
        return (
            <button
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {lable}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
}

export default AppFilter;