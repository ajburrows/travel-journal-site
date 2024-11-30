
export default function Entry(prop){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={prop.entry.img.src}
                    alt={prop.entry.img.alt}
                />
            </div>
            <div className="info-container">
                <div className="entry-header-container">
                    <img 
                        className="marker"
                        src="src/assets/map-marker.png" 
                        alt="map marker icon"
                    />
                    <span className="country">{prop.entry.country}</span>
                    <a href={prop.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="entry-title">{prop.entry.title}</h2>
                <p className="trip-dates">{prop.entry.dates}</p>
                <p className="entry-text">{prop.entry.text}</p>
            </div>
            
        </article>
    )
}