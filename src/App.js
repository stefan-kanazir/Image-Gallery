import React, { useState, useEffect } from 'react';
import CardImage from './components/CardImage';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(rest => rest.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [term]);

  return (
    <div className="container mx-auto mb-10">
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> : <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {images.map(image => (
          <CardImage key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;