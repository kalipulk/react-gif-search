import axios from 'axios'
import React, { useState, useEffect } from 'react';
import GifContent from './components/GifContent';
import SearchBar from './components/SearchBar';


function App() {
    const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
    const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    const [data, setData] = useState([]); 
    const [query, setQuery] = useState('dogs')

    const performSearch = (value) => setQuery(value);


    useEffect(() => { 
        axios.get(BASEURL + query + APIKEY)
        .then(response => setData(response.data.data))
        .catch(error => console.log('Error fetching data', error))
    }, [query]);

    return (
        <div>
          <div className="main">
            <div className="inner">
              <h1 className="title">Get Giphy With It</h1>
              <SearchBar onSearch={performSearch}/>
            </div>
          </div>
          <div className="gif-content">
              <GifContent data={data} /> 
          </div>
        </div>
      );

}

export default App






