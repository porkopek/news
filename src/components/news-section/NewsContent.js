import React from 'react'

import { Image } from 'semantic-ui-react'

export function NewsContent ({title,description, image}){
  return(
    <div>
      <Image style={{ width: '100%',marginTop:'1em', objectFit: 'cover', objectPosition:'25% 25%', height: '175px' }} src={image}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )

}