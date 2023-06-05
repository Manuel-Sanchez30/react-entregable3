

export const LocationInfo = ({location}) => {

    
    
    return (

        <article className="location">

            <h2 className="location-title">{location?.name}</h2>
            <ul>
                <li><span className="location-info">Type: </span><span className="location-info-value"> {location?.type}</span></li>
                <li><span className="location-info">Dimension: </span><span className="location-info-value"> {location?.dimension}</span></li>
                <li><span className="location-info">Population: </span><span className="location-info-value"> {location?.residents.length}</span></li>
            </ul>

        </article>
    )
}
