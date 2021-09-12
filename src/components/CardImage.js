import React from 'react'

const CardImage = ({ image }) => {
    const tags = image.tags.split(",");

    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg">
          <div className="aspect-w-3 aspect-h-4 max-h-80 overflow-hidden">
            <img src={image.webformatURL} alt="" className="w-full"/>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-blue-700 text-xl mb-2">
              Photo by {image.user}
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
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2 md:mb-2">
                      #{tag}
                  </span>
              ))}
          </div>
      </div>
    )
}

export default CardImage
