import React from 'react'
import {
  CategoriesContainer,
  CategoryItem,
  CategoryList,
  P,
} from './styled/blog'

const BlogCategory = props => {
  return (
    <CategoriesContainer>
      <CategoryList>
        <CategoryItem active>
          <P>Growth</P>
        </CategoryItem>
        <CategoryItem>
          <P>Marketing</P>
        </CategoryItem>
        <CategoryItem>
          <P>Collaboration</P>
        </CategoryItem>
        <CategoryItem>
          <P>Productivity</P>
        </CategoryItem>
      </CategoryList>
    </CategoriesContainer>
  )
}

export default BlogCategory
