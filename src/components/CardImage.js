import React from 'react';
// import { Link } from 'react-router-dom';

const CardImage = ({ image }) => {
    const tags = image.tags.split(",");

    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg">
          <a href={image.pageURL} className="max-h-80 overflow-hidden pointer block" target="_blank" rel="noreferrer">
            <img src={image.webformatURL} alt={tags[0]} className="w-full"/>
          </a>
          <div className="px-6 py-4">
            <div className="mb-4 text-lg">
              Photo by: <strong className="text-green-600 mb-2 uppercase">{image.user}</strong>
            </div>
            <ul>
              <li>
                <strong>Views:</strong> {image.views}
              </li>
              <li>
                <strong>Downloads:</strong> {image.downloads}
              </li>
              <li>
                <strong>Likes:</strong> {image.likes}
              </li>
            </ul>
          </div>
    
          <div className="px-6 py-4">
              {tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2 mb-2">
                      #{tag}
                  </span>
              ))}
          </div>
      </div>
    )
}

export default CardImage
