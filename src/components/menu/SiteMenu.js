import React from 'react'

import { Container, Menu, Icon} from 'semantic-ui-react'

export function SiteMenu (){
    return(
      <Menu style={{boxShadow:'none'}}borderless size='mini' icon='labeled'>
          <Container text>
          <Menu.Item name='medium'>
            <Icon color='green' name='leaf' />
           <span>News </span> 
          </Menu.Item>

          <Menu.Item name='video camera' >
            <Icon color='red'name='quote right' />
            Insights
          </Menu.Item>

          <Menu.Item name='video camera' >
            <Icon color='blue' name='pencil' />
            Authors
          </Menu.Item>

           </Container>
      </Menu>
        
       
        
        
    )
}