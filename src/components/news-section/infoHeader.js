import React, { Component } from 'react'
import { Image, Card, Feed, Icon } from 'semantic-ui-react'

export default class InfoHeader extends Component{

  render(){
    return(
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
                <a>Elliot Fu</a> in <a>Translation Hacks</a>
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}