
import React from 'react'
import { Feed } from 'semantic-ui-react'

const events = [{
  date: '1 Hour Ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '4 Likes',
  summary: 'Elliot Fu added you as a friend',
}, {
  date: '4 days ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '1 Like',
  summary: 'Helen Troy added 2 new illustrations',
  
}, {
  date: '3 days ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '8 Likes',
  summary: 'Joe Henderson posted on his page',
  extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
}, {
  date: '4 days ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '41 Likes',
  summary: 'Justen Kitsune added 2 new photos of you',
  extraText: 'Look at these fun pics I found from a few years ago. Good times.',
  
}, {
  date: '41 days ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '1 Like',
  summary: 'Helen Troy added 2 new illustrations',
  
}, {
  date: '31 days ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '8 Likes',
  summary: 'Joe Henderson posted on his page',
  extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
}, {
  date: '41 days ago',
  image: 'http://api.adorable.io/avatar/2'+ Math.random()*200,
  meta: '41 Likes',
  summary: 'Justen Kitsune added 2 new photos of you',
  extraText: 'Look at these fun pics I found from a few years ago. Good times.',
  
}]

const NewsFeed = () => <Feed style={{marginLeft:'50px'}} className="hide-on-mobile" events={events} />

export default NewsFeed
