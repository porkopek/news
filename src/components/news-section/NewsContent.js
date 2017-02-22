import React from 'react'

import { Image, Card } from 'semantic-ui-react'

export function NewsContent ({title,description, image, url}){
  return(
    <a  href={url} target='_blank'>
      <Card.Description>
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
      <span className='link-color'>Read more</span>
      </Card.Description>
    </a>
  )

}