import React from 'react'
import { Label, Icon, Dropdown } from 'semantic-ui-react'

export function NewsMenu({open, handleClick, handleDelete}){
  return(
    <Label basic size='large' className='right floated borderless'>
      <Dropdown  icon='ellipsis vertical'
                 
                 className='link item pointing right bottom'
                 
                 
                 
                 
              
      >
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleDelete} text='Show fewer stories like this' />
          <Dropdown.Item text='Show fewer stories tagged with Trump'  />
          <Dropdown.Item text='Report story'  />
        </Dropdown.Menu>
      </Dropdown>
    </Label>
  
    
  )
}