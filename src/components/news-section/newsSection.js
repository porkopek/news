import React, { Component } from 'react'
import { Card, Image, Menu, Icon, Label } from 'semantic-ui-react'

import InfoHeader from './infoHeader'
import { NewsContent } from './NewsContent'
export default class NewsSection extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div>


        <Card fluid>

          <Card.Content>
            <Card.Header>
              <InfoHeader />
            </Card.Header>
            <Card.Description>
              <Image style={{ width: '100%', objectFit: 'cover', height: '175px' }} src={"https://cdn-images-1.medium.com/max/2000/1*NZpgpdDxZ6v8_0lvQgkrdw.jpeg"}></Image>
              <NewsContent header='Translation is a shit'
                body='The world is facing a wave of non likeable translations from all parts of the Globe. Prime Ministers are declaring wars.'
                />
            </Card.Description>
          </Card.Content>
          <Card.Content className='borderless'style={{ border: '0 !important', fontSize: '.8em', boxShadow: 'none' }}>
            <a>
              Read more...
             
            </a>
          </Card.Content>
          <Card.Content extra >
            <Label as='a'basic className='borderless'>
                <Icon name='heart outline' /> 23
            </Label>
             <Label as='a' basic className='borderless'>
                4 comments 
              </Label>
           
            <Label className='right floated borderless' as='a'basic>
               <Icon name='ellipsis vertical' />
              </Label>
              <Label as='a' basic className='right floated borderless'>
                <Icon name='bookmark outline' /> 
                 
              </Label>
              
           
             
           
          </Card.Content>
        </Card>

        <Card fluid>

          <Card.Content>
            <Card.Header>
              <InfoHeader />
            </Card.Header>

            <Image style={{ width: '100%', objectFit: 'cover', height: '175px' }} src={"https://www.demilked.com/magazine/wp-content/uploads/2015/05/cute-illustrations-untranslatable-words-marija-tiurina-thumbs640.jpg"}></Image>
            <NewsContent header='Do aspiring YouTube stars need to pack up and move to L.A.?'
              body='For aspiring creators, Los Angeles is the ultimate gamble.'
              />
          </Card.Content>
        </Card>
      </div>
    )
  }
}