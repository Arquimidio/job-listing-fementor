import SingleCard from './SingleCard'

const Cards = ({ data, handler}) => {
    return(
        // Map through all job cards based on the data taken from the server
        <div className='cards-container'>
            {data.map(info => <SingleCard 
                                handler={ handler } 
                                key={ info.id } 
                                info={ info }
                            />)}
        </div>
    )
}

export default Cards