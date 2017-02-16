import React from 'react'

import { Icon, Label } from 'semantic-ui-react'

export function LikesInfo({ url, likes, liked, onClick }){
  return(
    
      <Label size='large' as='a' basic className='borderless'>
        <Icon
          color={'green'}
          onClick={onClick}
          name={`heart${liked ? '': ' outline'}`}
        />
        {likes}
      </Label>
    
  )
}