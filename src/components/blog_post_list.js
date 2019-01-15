import React from 'react'
import {
  PostList,
  CategoryRecentPosts,
  CategoryHeaderImage,
  ImageBox,
  FirstPost,
  OtherPosts,
  H3,
  P,
  Wrapper,
  H5,
} from './styled/blog'
import headerImage from '../svg/animal-pair.svg'
import { Link } from 'gatsby'
import Header from '../components/post_header'

const BlogPostList = props => {
  return (
    <PostList>
      <CategoryHeaderImage>
        <ImageBox>
          <img src={headerImage} alt="" />
        </ImageBox>
      </CategoryHeaderImage>
      <CategoryRecentPosts>
        <FirstPost>
          <div className="number">
            <span>1</span>
          </div>
          <div className="snippet">
            <H3>Entrepreneur's guide to project management</H3>
            <P>
              We all need traffic. Targeted traffic to our sites that’ll
              convert. SEO, PPC ads, organic social media posts, blogs, email
              newsletters, a culture manifesto — you name it, content must be
              produced. For us, content has been a major cornerstone of our
              growth and it’s something we put a lot of time and energy in to.
            </P>
            <Link to="/post">Read More</Link>
          </div>
        </FirstPost>
        <OtherPosts>
          <ul>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">
                    5 ways to use personalization to grow your SAAS
                  </Link>
                </H5>
                <span>2</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">How to identify your perfect customer</Link>
                </H5>
                <span>3</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">
                    How founders can write a quality post in 1 hour
                  </Link>
                </H5>
                <span>4</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">
                    How to use customer feedback to fuel your growth
                  </Link>
                </H5>
                <span>5</span>
              </Wrapper>
            </li>
          </ul>
        </OtherPosts>
      </CategoryRecentPosts>
      <CategoryRecentPosts>
        <FirstPost>
          <div className="number">
            <span>1</span>
          </div>
          <div className="snippet">
            <H3>Entrepreneur's guide to project management</H3>
            <P>
              We all need traffic. Targeted traffic to our sites that’ll
              convert. SEO, PPC ads, organic social media posts, blogs, email
              newsletters, a culture manifesto — you name it, content must be
              produced. For us, content has been a major cornerstone of our
              growth and it’s something we put a lot of time and energy in to.
            </P>
            <Link to="/post">Read More</Link>
          </div>
        </FirstPost>
        <OtherPosts>
          <ul>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">
                    5 ways to use personalization to grow your SAAS
                  </Link>
                </H5>
                <span>2</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">How to identify your perfect customer</Link>
                </H5>
                <span>3</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">
                    How founders can write a quality post in 1 hour
                  </Link>
                </H5>
                <span>4</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/post">
                    How to use customer feedback to fuel your growth
                  </Link>
                </H5>
                <span>5</span>
              </Wrapper>
            </li>
          </ul>
        </OtherPosts>
      </CategoryRecentPosts>
      <CategoryRecentPosts>
        <FirstPost>
          <div className="number">
            <span>1</span>
          </div>
          <div className="snippet">
            <H3>Entrepreneur's guide to project management</H3>
            <P>
              We all need traffic. Targeted traffic to our sites that’ll
              convert. SEO, PPC ads, organic social media posts, blogs, email
              newsletters, a culture manifesto — you name it, content must be
              produced. For us, content has been a major cornerstone of our
              growth and it’s something we put a lot of time and energy in to.
            </P>
            <Link to="/">Read More</Link>
          </div>
        </FirstPost>
        <OtherPosts>
          <ul>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">
                    5 ways to use personalization to grow your SAAS
                  </Link>
                </H5>
                <span>2</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">How to identify your perfect customer</Link>
                </H5>
                <span>3</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">
                    How founders can write a quality post in 1 hour
                  </Link>
                </H5>
                <span>4</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">
                    How to use customer feedback to fuel your growth
                  </Link>
                </H5>
                <span>5</span>
              </Wrapper>
            </li>
          </ul>
        </OtherPosts>
      </CategoryRecentPosts>
      <CategoryRecentPosts>
        <FirstPost>
          <div className="number">
            <span>1</span>
          </div>
          <div className="snippet">
            <H3>Entrepreneur's guide to project management</H3>
            <P>
              We all need traffic. Targeted traffic to our sites that’ll
              convert. SEO, PPC ads, organic social media posts, blogs, email
              newsletters, a culture manifesto — you name it, content must be
              produced. For us, content has been a major cornerstone of our
              growth and it’s something we put a lot of time and energy in to.
            </P>
            <Link to="/">Read More</Link>
          </div>
        </FirstPost>
        <OtherPosts>
          <ul>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">
                    5 ways to use personalization to grow your SAAS
                  </Link>
                </H5>
                <span>2</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">How to identify your perfect customer</Link>
                </H5>
                <span>3</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">
                    How founders can write a quality post in 1 hour
                  </Link>
                </H5>
                <span>4</span>
              </Wrapper>
            </li>
            <li>
              <Wrapper>
                <H5>
                  <Link to="/">
                    How to use customer feedback to fuel your growth
                  </Link>
                </H5>
                <span>5</span>
              </Wrapper>
            </li>
          </ul>
        </OtherPosts>
      </CategoryRecentPosts>
      <Header />
    </PostList>
  )
}

export default BlogPostList
