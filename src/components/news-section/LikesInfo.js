import React from 'react'

import { Icon, Label } from 'semantic-ui-react'

export function LikesInfo({ url, likes, liked, onClick }){
  return(
    
      <Label size='large' color='grey' basic className='borderless'>
        <a >
         
          <Icon
            color='red'
            onClick={onClick}
            name={`heart${liked ? '': ' outline'}`}
            
          />
        </a>
        {likes}
      </Label>
    
  )
}