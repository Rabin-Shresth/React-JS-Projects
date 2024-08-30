import React from 'react'
import RecipeItem from './RecipeItem'

export default function RecipeList() {
  return (
    <ul>
        <RecipeItem name='momo'/>
        <RecipeItem name='chau chau'/>
        <RecipeItem name='chau'/>
    </ul>
  )
}
