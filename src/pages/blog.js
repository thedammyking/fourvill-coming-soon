import React, { Component } from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { Blog, Wrapper } from '../components/styled/blog'
import BlogPostList from '../components/blog_post_list'
import BlogCategory from '../components/blog_category'
import { graphql } from 'gatsby'
import * as PropTypes from "prop-types"

const { Consumer, Provider } = React.createContext()

if (typeof window !== `undefined`) {
  window.postsToShow = 10
}

class BlogPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.object,
      allPostsJson: PropTypes.object,
    }),
  }

  constructor(props) {
    super(props)
    let postsToShow = 10
    this.state = {
      active: '',
      categories: this.props.data.categories.edges,
      posts: this.props.data.posts.edges,
      showingMore: true,
      postsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ postsToShow: this.state.postsToShow + 10 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.postsToShow = this.state.postsToShow
  }

  setActiveCategory = category => {
    return this.setState({
      active: category,
    })
  }

  filterCategorizedPost =  (posts, categories) => {
    let categorizedPostsId = []

    categories.map(({node: {wordpress_id : categoryId}}) => {
      const categoryPosts = posts
        .filter(
          ({node :{categories}}) =>
            categories.findIndex(
              category => category.wordpress_id === categoryId
            ) >= 0
        ).slice(0, 5)
      return categorizedPostsId.push(...categoryPosts.map(post => post.node.wordpress_id));
    })

    categorizedPostsId = categorizedPostsId.reduce(function (accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator
    }, [])
    
    return posts.filter(({node: {wordpress_id}}) => !categorizedPostsId.includes(wordpress_id))
  }

  render() {
    const { categories, posts } = this.state;
    const filteredPosts = this.filterCategorizedPost(posts, categories);
    const chunckedPosts = filteredPosts.slice(0, this.state.postsToShow)

    return (
      <Provider
        value={{
          setActiveCategory: this.setActiveCategory,
          activeCategory: this.state.active,
          categories,
          posts,
        }}
      >
        <BlogLayout>
          <SEO title="Fourvill" keywords={['fourvill', 'blog']} />
          <Blog>
            <Wrapper>
              <BlogCategory />
              <BlogPostList posts={chunckedPosts} />
            </Wrapper>
          </Blog>
        </BlogLayout>
      </Provider>
    )
  }
}

export const categoryQuery = graphql`
  query {
    categories: allWordpressCategory(skip: 1, sort: { fields: wordpress_id }) {
      edges {
        node {
          wordpress_id
          name
        }
      }
    }
    posts: allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          wordpress_id
          title
          excerpt
          slug
          content
          date(formatString: "MMM DD, YYYY")
          author {
            name
          }
          categories {
            wordpress_id
          }
        }
      }
    }
  }
`

export default BlogPage
export { Consumer }
