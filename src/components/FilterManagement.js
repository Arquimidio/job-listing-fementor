import './css/FilterManagement.css'
const FilterManagement = ({ filters, deleteFilter }) => {
    return (
        <nav>
            <div className='filter-management__filters'>
                {filters.map(filter => {
                    return(
                            <div className="filter-management__tag-container">
                                <h4 className='tag-container__text filter'>{filter}</h4>
                                <button 
                                    className="tag-container__btn"
                                    onClick={() => deleteFilter(filter)}
                                >
                                        X
                                </button>
                            </div>
                        )    
                })}
            </div>
            <div>Clear</div>
        </nav>
    )
}

export default FilterManagement