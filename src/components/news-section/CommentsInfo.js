import React from 'react'

import { Label } from 'semantic-ui-react'
function renderComments(commentsUrl, comments){
 
}
export function CommentsInfo({commentsUrl, comments}){
  function renderComments(){
    return(
      <Label size='large' as='a' href={commentsUrl} basic className='borderless'>
       {comments}  {comments>1 ? 'comments' : 'comment'} 
      </Label>
    )
  }
  return(
    comments
      ? renderComments(commentsUrl, comments)
      : null
  )
}
