import React from 'react';

const GifContent = ( { gifs } ) => {
    return (
        <div className="gif-container">
            <div className="card-columns">
                {gifs.map(gif => (
                    <div className="card" key={gif.slug}>
                        <img className="card-img-top" src={gif.images.downsized.url} alt={gif.slug} />            
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GifContent