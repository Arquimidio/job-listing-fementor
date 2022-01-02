import FilterTag from './FilterTag'

const SingleCard = ({ info, handler}) => {

    // Destructure the job object that came from the server
    const {
        company,
        logo,
        new: isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    } = info

    return(
        <div className={`card${featured? " card--featured": ""}`}>
            <div className='card__info-container'>
                <img src={logo} alt="" />
                <div>
                    {/* Renders the company info area */}
                    <p className='card__top-info'>
                        <span className='card__company'>{company}</span>
                        {isNew && <span className='card__new-tag'>NEW!</span>}
                        {featured && <span className='card__featured-tag'>FEATURED</span>}
                    </p>
                     {/*Renders the main info area*/}
                     <h1>{position}</h1>
                     <p className='card__time-space-info'>
                        {postedAt} &nbsp; &#9679; &nbsp;
                        {contract} &nbsp; &#9679; &nbsp;
                        {location}
                     </p> 
                </div> 
                <hr />
            </div>
            <div className='card__filter-tags'>
                {/* Renders the Filter tags that control the cards that will be showed*/}
                <FilterTag handler={handler} text={role}/>
                <FilterTag handler={handler} text={level}/>
                {languages.map(lang => <FilterTag handler={handler} text={lang}/>)}
                {tools.map(tool => <FilterTag handler={handler} text={tool}/>)}
            </div>
        </div>
    )
}

export default SingleCard