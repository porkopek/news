import React, { Component } from 'react'
import { Card, Image, Menu, Icon, Label, Container } from 'semantic-ui-react'

import  { InfoHeader } from './InfoHeader'
import { NewsContent } from './NewsContent'
import { LikesInfo } from './LikesInfo'
import { CommentsInfo} from './CommentsInfo'
export default class NewsSection extends Component {
  state={
    news:[
      {
        avatar:'http://www.abc.net.au/homepage/2013/styles/img/apple-touch-icon-144x144.png',
        user:'PorkoPek',
        url:'http://www.iberotradutores.com',
        date:'2 hours ago',
        image:'http://www.abc.net.au/news/image/8235564-1x1-700x700.jpg',
        title:'Translation app helping to preserve endangered Indigenous Queensland languages ',
        description:'A unique partnership between a linguist, an app designer, and a remote Aboriginal community is helping to ensure the survival of a rare Indigenous language.',
        likes:4,
        liked:false,
        commentsUrl:'http://www.iberotradutores.com',
        comments:1,
        bookmarked:false,
      },
      {
      avatar:'https://s-media-cache-ak0.pinimg.com/736x/3b/7d/6f/3b7d6f60e2d450b899c322266fc6edfd.jpg',
      user:'Luski',
      url:'http://www.iberotradutores.com',
      date:'yesterday',
      image:'https://cdn-images-1.medium.com/max/2000/1*Ym-UxxiSUR5XJ3DGY5Z6tA.jpeg',
      title:'Translation app helping to preserve endangered Indigenous Queensland languages ',
      description:'A unique partnership between a linguist, an app designer, and a remote Aboriginal community is helping to ensure the survival of a rare Indigenous language.',
      likes:5,
      liked:true,
      commentsUrl:'http://www.iberotradutores.com',
      comments:0,
      bookmarked:false,
    },
    {
      avatar:'https://s-media-cache-ak0.pinimg.com/736x/3b/7d/6f/3b7d6f60e2d450b899c322266fc6edfd.jpg',
      user:'Luski',
      url:'https://dz2cdn3.dzone.com/storage/article-thumb/4350062-thumb.jpg',
      date:'yesterday',
      image:'https://dz2cdn3.dzone.com/storage/article-thumb/4350062-thumb.jpg',
      title:'Why You Should Focus on iOS Localization - DZone Mobile',
      description:'When you start your app localization project, it can be hard to know where to begin. Stop stalling and start with iOS.',
      likes:1,
      liked:false,
      commentsUrl:'http://www.iberotradutores.com',
      comments:11,
      bookmarked:true,
    },
    {
      avatar:'http://en.gravatar.com/userimage/103259692/9689dce3957ca0eea49c190dc15fe17f.png',
      user:'Luski',
      url:'https://hbr.org/2016/09/your-writing-isnt-as-good-as-you-think-it-is?platform=hootsuite',
      date:'yesterday',
      image:'https://hbr.org/resources/images/article_assets/2016/09/sept16-28-184294405-1200x675.jpg',
      title:'Your Writing Isn’t as Good as You Think It Is ',
      description:'Four ways to get better.',
      likes:0,
      liked:false,
      commentsUrl:'http://www.iberotradutores.com',
      comments:0,
      bookmarked:true,
      },
    ]

  }
  like=(index)=>{
    const news = this.state.news.slice()
    news[index].liked=!news[index].liked
    news[index].likes+=news[index].liked ? 1 : -1
    this.setState({news})
  }
  render() {
  
    return (
     
      <Container text>

      {this.state.news.map((news, index)=>{
        const { avatar, user, url, date, image, title, description, likes, liked, commentsUrl, comments} = news
        return (<Card fluid key={index} index={index}>

          <Card.Content>
            <Card.Header>
              <InfoHeader 
                avatar={avatar}
                user ={user}
                url={url}
                date={date}
              />
            </Card.Header>

            <a  src={''}>
              <Card.Description>
                <NewsContent 
                  image={image}
                  title={title}
                  description={description}
                />
              </Card.Description>
                <span>Read more...</span>
            </a>
          </Card.Content>
          
          <Card.Content extra >

            <LikesInfo 
              liked={liked}
              likes={likes}
              onClick={()=>this.like(index)}
            />

            <CommentsInfo
              commentsUrl={commentsUrl}
              comments = {comments}
            />

            <Label className='right floated borderless' as='a'basic>
               <Icon name='ellipsis vertical' />
            </Label>

            <Label as='a' basic className='right floated borderless'>
                <Icon name='bookmark outline' /> 
            </Label>

          </Card.Content>
        </Card>)

      })}
        

        
      </Container>
      
      
    )
  }
}