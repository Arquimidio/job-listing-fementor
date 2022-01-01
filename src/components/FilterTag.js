const FilterTag = ({ text, handler}) => {
    return (
        <div>
            <span 
                  className="tag-container__text tag-container__text--hoverable filter" 
                  onClick={() => handler( text )}>
                  {text}
            </span>
        </div>
    )
}

export default FilterTag