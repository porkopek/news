 
import React, { Component } from 'react'
import { Card, Icon, Label, Container } from 'semantic-ui-react'
import axios from 'axios'

import  { InfoHeader } from './InfoHeader'
import { NewsContent } from './NewsContent'
import { LikesInfo } from './LikesInfo'
import { CommentsInfo} from './CommentsInfo'
import { BookmarkInfo } from './BookmarkInfo'
type State={
news:[
      
    {
      avatar:string,
      user:string,
      url:string,
      date:date,
      image:string,
      title:string,
      description:string,
      likes:number,
      liked:boolean,
      commentsUrl:string,
      comments:number,
      bookmarked:boolean,
      },
    ]

}
export default class NewsSection extends Component {
  state:State={
    news:[]
  }
  like=(index)=>{
    const news = this.state.news.slice()
    news[index].liked=!news[index].liked
    news[index].likes+=news[index].liked ? 1 : -1
    this.setState({news})
  }
  getNews2=()=>{
    axios.get('https://newsapi.org/v1/sources')
         .then(res=>{
           const sources = res.data.sources.filter(source=>source.language==='en').map(source=>source.id)
          return sources
           
         })
         .then(sources=>{
            let news=[]
            sources.forEach(source=>{
              axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=8bdeeeb9818b4b61908164a27f5b300b`)
                   .then(res=>{
                        
                      news.push(...res.data.articles)                   
                   })
                   .catch(err=>alert(err))
                  
              
            })
            .then(news=>console.log(news))
           const stateNews=news
           console.log(stateNews)
         })
  }
  getNews=(source, subject)=>{
    axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=8bdeeeb9818b4b61908164a27f5b300b`)
    .then(res=>{
      const news = res.data.articles.filter(article=>article.title.toLowerCase().includes(subject.toLocaleLowerCase()))
                                    .map(article=>({
                                        title: article.title,
                                        url:article.url,
                                        image:article.urlToImage,
                                        user: article.author,
                                        description: article.description && article.description.substring(0,90),
                                        date:article.publishedAt,
                                        likes: Math.random()*50 |0,
                                        comments: Math.random()*50 |0,
                                        liked: Math.random()*2|0 === 1 ? true : false,
                                        bookmarked: Math.random()*2|0 === 1 ? true : false,
                                        avatar:'http://en.gravatar.com/userimage/103259692/9689dce3957ca0eea49c190dc15fe17f.png'
                                      }))
      this.setState({news})
    })
  }
  componentDidMount=()=>{
    const news = this.getNews('fortune', '')
   
    
  }
  render() {
  
    return (
     
      <Container text>

      {this.state.news.map((news, index)=>{
        const { avatar,
                user,
                url,
                date,
                image,
                title,
                description,
                likes,
                liked,
                commentsUrl,
                comments,
                bookmarked
        } = news
        return (
        
        <Card fluid key={index}>

          <Card.Content>
            <Card.Header>
              <InfoHeader 
                avatar={avatar}
                user={user}
                url={url}
                date={date}
              />
            </Card.Header>

            <a  href={url} target='_blank'>
              <Card.Description>
                <NewsContent 
                  image={image}
                  title={title}
                  description={description}
                />
              </Card.Description>
                <span className='link-color'>Read more...</span>
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
              comments={comments}
            />

            <Label className='right floated borderless' as='a'basic>
               <Icon name='ellipsis vertical' />
            </Label>
            <BookmarkInfo
              bookmarked={bookmarked}
            />
           

          </Card.Content>
        </Card>)

      })}
        

        
      </Container>
      
      
    )
  }
}