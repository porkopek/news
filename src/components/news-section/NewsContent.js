import React from 'react'

import { Image } from 'semantic-ui-react'

export function NewsContent ({title,description, image}){
  return(
    <div style={{ display: 'flex' }} className='mobile-card-vertical'>
      
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
      <div>
        {image
          && <Image className='card-image'src={image} />
        }
      </div>
    </div>
  )

}