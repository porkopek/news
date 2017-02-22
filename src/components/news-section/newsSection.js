 
import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import axios from 'axios'

import  { InfoHeader } from './InfoHeader'
import { NewsContent } from './NewsContent'
import { LikesInfo } from './LikesInfo'
import { CommentsInfo} from './CommentsInfo'
import { BookmarkInfo } from './BookmarkInfo'
import { NewsMenu } from './NewsMenu'
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
        menuOpen:false,
        },
  ],
  


}
export default class NewsSection extends Component {
  state:State={
    news:[],
    
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
      const news:State = res.data.articles.filter(article=>article.title.toLowerCase().includes(subject.toLocaleLowerCase()))
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
                                        avatar:'http://en.gravatar.com/userimage/103259692/9689dce3957ca0eea49c190dc15fe17f.png',
                                        menuOpen:false,
                                      }))
      this.setState({news}) //ISto não é aqui
    })
  }
  componentDidMount=()=>{
    const news = this.getNews('fortune', '') 
  }
  toggleMenu=(index)=>{
    
    this.setState(prevState=>{
      console.log(prevState.news[index])
      const news = prevState.news.slice()
      news[index].menuOpen = !prevState.news[index].menuOpen
      return { news }
    })
  }
  filterNews=(index)=>{
    const news = this.state.news.slice()
    news.splice(index, 1)
    this.setState({ news })
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
                <InfoHeader 
                  avatar={avatar}
                  user={user}
                  url={url}
                  date={date}
                />
                <NewsContent
                  url={url}
                  image={image}
                  title={title}
                  description={description}
                />
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
              <NewsMenu
                handleClick={()=>this.toggleMenu(index)}
                handleDelete ={()=>this.filterNews(index)}
                open = {this.state.news[index].menuOpen}
              />
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