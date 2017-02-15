import React, { Component } from 'react'

export function NewsContent ({header, body}){
  return(
    <div>
      <h2>{header}</h2>
      <p>{body}</p>
    </div>
  )

}