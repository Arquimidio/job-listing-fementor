const FilterManagement = ({ filters, deleteFilter, clearFilters }) => {
    return (
        <nav className={`${filters[0]? "":"hidden"}`}>
            <div className={`filter-management__filters`}>
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
            <div 
                className="filter-management__clear-filters-btn" 
                onClick={clearFilters}
            >Clear</div>
        </nav>
    )
}

export default FilterManagement