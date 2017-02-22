import React from 'react'

import { Label } from 'semantic-ui-react'

export function CommentsInfo({commentsUrl, comments}){
  function renderComments(){
    return(
      <Label color='grey' size='large' as='a' href={commentsUrl} basic className='borderless'>
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
