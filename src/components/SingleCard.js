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
        <section className="card">
            <article>
                <img src={logo} alt="" />
                {/* Renders the company info area */}
                <p>
                    <span className='card__company'>{company}</span>
                    {isNew && <span>NEW!</span>}
                    {featured && <span>FEATURED!</span>}
                </p>

                {/*Renders the main info area*/}
                <h3>{position}</h3>
                <p className='card__time-space-info'>
                    {postedAt} &nbsp; &#9679; &nbsp;
                    {contract} &nbsp; &#9679; &nbsp;
                    {location}
                </p>
                <hr />
            </article>
            <article className='card__filter-tags'>
                {/* Renders the Filter tags that control the cards that will be showed*/}
                <FilterTag handler={handler} text={role}/>
                <FilterTag handler={handler} text={level}/>
                {languages.map(lang => <FilterTag handler={handler} text={lang}/>)}
                {tools.map(tool => <FilterTag handler={handler} text={tool}/>)}
            </article>
        </section>
    )
}

export default SingleCard