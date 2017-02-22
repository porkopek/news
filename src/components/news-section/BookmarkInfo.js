import React from 'react'
import { Label, Icon } from 'semantic-ui-react'
export function BookmarkInfo({ bookmarked }){
  const name= bookmarked ? 'bookmark' : 'bookmark outline'
  return(
     <Label size='large'  as='a' basic className='right floated borderless'>
        <Icon color='grey' name={ name } /> 
     </Label>
  )
}