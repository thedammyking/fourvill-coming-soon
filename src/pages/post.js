import React from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { SinglePost, P } from '../components/styled/blog'
import Header from '../components/post_header'

const BlogPage = () => {
  return (
    <BlogLayout>
      <SEO title="Fourvill" keywords={['fourvill', 'blog']} />
      <SinglePost>
        <Header />
        <div className="body">
          <P>
            We all need traffic. Targeted traffic to our sites that’ll convert.
            SEO, PPC ads, organic social media posts, blogs, email newsletters,
            a culture manifesto — you name it, content must be produced. For us,
            content has been a major cornerstone of our growth and it’s
            something we put a lot of time and energy in to.
          </P>
          <P>
            We all need traffic. Targeted traffic to our sites that’ll convert.
            SEO, PPC ads, organic social media posts, blogs, email newsletters,
            a culture manifesto — you name it, content must be produced. For us,
            content has been a major cornerstone of our growth and it’s
            something we put a lot of time and energy in to.
          </P>
          <P>
            In the early days, this sort of thing many times falls to the
            founder. Heck, we’re four years into it at Baremetrics, and the bulk
            of our content marketing still revolves around me, the founder,
            producing most of the content.
          </P>
          <P>
            Lots of founders struggle with writing. They struggle with
            confidence in their writing abilities. But, that’s not because they
            aren’t good writers! It just takes practice and a few practical
            things to keep it from becoming a complete time-suck.
          </P>
          <P>
            Founders wear many hats, especially in the beginning. So, how do you
            find the time to dedicate to writing? Well, you’re in luck. We’re
            going to teach you how to conquer the content beast in a matter of
            an hour per piece of content.
          </P>
        </div>
      </SinglePost>
    </BlogLayout>
  )
}
export default BlogPage
