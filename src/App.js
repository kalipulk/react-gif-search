import axios from 'axios'
import React, { useState, useEffect } from 'react';
import GifContent from './components/GifContent';
import SearchBar from './components/SearchBar';


function App() {
    const BASEURL = process.env.REACT_APP_BASE_GIFY_URL;
    const APIKEY = process.env.REACT_APP_GIFY_API_KEY;

    const url = query => `${BASEURL}/search?q=${encodeURIComponent(query)}&api_key=${APIKEY}`

    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState('puppy')
    const [isLoading, setIsLoading] = useState(true)

    const performSearch = (value) => setQuery(value);

    useEffect(() => { 
      async function getGifData(query) {
        try {
          setIsLoading(true)
          const { data: response } = await axios.get(url(query))
          const { data: gifs } = response
          console.log('data is', gifs)
          setGifs(gifs)
          setIsLoading(false)
        } catch (err) {
          console.log('Error fetching data', err)
        }
      }
      getGifData(query)
    }, [query]);

    return (
        <div>
          <div className="main">
            <div className="inner">
              <h1 className="title">Get Giphy With It</h1>
              <SearchBar onSearch={performSearch} initialQuery={query} />
            </div>
          </div>
          <div className="gif-content">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>  
            ) :
              <GifContent gifs={gifs} /> 
            }
          </div>
        </div>
      );

}

export default App






