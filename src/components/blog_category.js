import React from 'react'
import {
  CategoriesContainer,
  CategoryItem,
  CategoryList,
  P,
} from './styled/blog'
import { Consumer } from '../pages/blog'

const BlogCategory = props => {
  return (
    <Consumer>
      {({ activeCategory, categories }) => {
        return (
          <CategoriesContainer>
            <CategoryList>
              {/*compare category id instead */}
              {categories.map(category => {
                return (
                  <CategoryItem
                    active={activeCategory === category.node.wordpress_id}
                    key={category.node.wordpress_id}
                  >
                    <P>{category.node.name}</P>
                  </CategoryItem>
                )
              })}
            </CategoryList>
          </CategoriesContainer>
        )
      }}
    </Consumer>
  )
}

export default BlogCategory
