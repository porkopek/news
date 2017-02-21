import React from 'react'

import { Container, Menu, Icon} from 'semantic-ui-react'

export function SiteMenu (){
    return(
      
      <Menu  borderless  fixed='top' icon='labeled'>
          <Container >
          <Menu.Item >
           
            <span>News </span> 
          </Menu.Item>

          <Menu.Item  >
          
            Insights
          </Menu.Item>

          <Menu.Item  >
          
            Authors
          </Menu.Item>

           </Container>
      </Menu>
        
       
        
        
    )
}