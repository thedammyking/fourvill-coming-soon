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
        <CategoryItem active={props.active === 'growth'}>
          <P>Growth</P>
        </CategoryItem>
        <CategoryItem active={props.active === 'marketing'}>
          <P>Marketing</P>
        </CategoryItem>
        <CategoryItem active={props.active === 'collaboration'}>
          <P>Collaboration</P>
        </CategoryItem>
        <CategoryItem active={props.active === 'productivity'}>
          <P>Productivity</P>
        </CategoryItem>
      </CategoryList>
    </CategoriesContainer>
  )
}

export default BlogCategory
