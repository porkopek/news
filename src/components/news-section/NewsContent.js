import React from 'react'

import { Image } from 'semantic-ui-react'

export function NewsContent ({title,description, image}){
  return(
    <div style={{ display: 'flex' }}>
      
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
      <div>
        {image
          && <Image style={{ objectFit: 'cover', objectPosition: '25% 25%', maxWidth:200, maxHeight:150,marginLeft:20 }} src={image} />
        }
      </div>
    </div>
  )

}