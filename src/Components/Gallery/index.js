import React from 'react'

const Gallery = ({ data }) => {
    
    return (
        <div className="row">
            {data.map((image) => 
            <div key={image.id}>
                <div className="col-md-4">
                        <img src={image.src.medium}
                            height="200" width="250" alt={image.photographer} />
                        <p>{image.photographer}</p>
                </div>
            </div>)}
        </div>
    )
}

export default Gallery