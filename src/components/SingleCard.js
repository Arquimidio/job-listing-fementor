import FilterTag from './FilterTag'

const SingleCard = ({ info, handler, setFilters, filters }) => {

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
                    {company}
                    {isNew && <span>NEW!</span>}
                    {featured && <span>FEATURED!</span>}
                </p>

                {/*Renders the main info area*/}
                <h3>{position}</h3>
                <p>
                    {postedAt} . 
                    {contract} . 
                    {location}
                </p>
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