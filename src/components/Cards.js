import SingleCard from './SingleCard'

const Cards = ({ data, handler}) => {
    return(
        // Map through all job cards based on the data taken from the server
        data.map(info => <SingleCard 
                            handler={ handler } 
                            key={ info.id } 
                            info={ info }
                        />)
    )
}

export default Cards