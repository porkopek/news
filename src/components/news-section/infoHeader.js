import React from 'react'
import {   Feed, Card } from 'semantic-ui-react'

export function InfoHeader ({avatar, user, url, date}){
 const index = url.includes('www') ? 2 : 1
 const originalDomain=[url.split(/[\/.]/).filter(x=>x!=='')[index].toUpperCase()]
 
  
    return(
      <Card.Header>
        <Feed>
          <Feed.Event>
            
            <Feed.Label>
              <img alt={user} src={avatar} />
            </Feed.Label>

            <Feed.Content>
              <Feed.Summary style={{fontWeight:300}}>
                <a className='link-color'>{user}</a>
                <span style={{color:'grey', fontWeight:300}}> in  </span> 
                <a href={url}className='link-color'>{originalDomain}</a>
                <Feed.Date>
                  {date}
                </Feed.Date>
              </Feed.Summary>
            </Feed.Content>

          </Feed.Event>
        </Feed>
      </Card.Header>
    )
   
}