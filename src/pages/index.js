import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { FeatureList, Hero, H1, P } from '../components/styled'
import Feature from '../components/Feature'
import podcast from '../svg/podcast.svg'
import blog from '../svg/blog.svg'
import vlog from '../svg/vlog.svg'
import social_media from '../svg/social-media.svg'
import inbox from '../svg/inbox.svg'
import history from '../svg/history.svg'
import search from '../svg/search.svg'
import bulk from '../svg/bulk.svg'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Fourvill" keywords={['fourvill', 'coming soon']} />
      <Hero>
        <div className="coming-soon-tag">Coming soon</div>
        <H1>
          One tool, stronger brand <span>Coming soon</span>
        </H1>
        <P>
          Organize and improve social content while fostering social engagement
          for creatives and businesses across the web
        </P>
      </Hero>
      <FeatureList>
        <Feature
          title="Content Management"
          text="We've integrated with popular content management and social media
        platforms to provide modern essential management features for all your
        content in one place."
          bg="#fe7c78 0%,#4f417e 25%,#4f417e 75%,#fe7c78 100%"
        >
          <ul>
            <li>
              <img src={podcast} alt="" />
              <P>Podcast</P>
            </li>
            <li>
              <img src={blog} alt="" />
              <P>Blog</P>
            </li>
            <li>
              <img src={vlog} alt="" />
              <P>Vlog</P>
            </li>
            <li>
              <img src={social_media} alt="" />
              <P>Social Media</P>
            </li>
          </ul>
        </Feature>
        <Feature
          title="Conversation Management"
          text="See and reply to every important mention. Engage with and promote to your audience across the web."
          bg="#4664FF 0%,#4664FF 40%,#48ACF0 100%"
        >
          <ul>
            <li>
              <img src={inbox} alt="" />
              <P>Inbox</P>
            </li>
            <li>
              <img src={history} alt="" />
              <P>Conversation history</P>
            </li>
            <li>
              <img src={search} alt="" />
              <P>Search</P>
            </li>
            <li>
              <img src={bulk} alt="" />
              <P>Bulk Message</P>
            </li>
          </ul>
        </Feature>
        <Feature
          title="Publishing"
          text="Gain unique insights from having data from all your channels in one place."
          bg="#DBB3B1,#DBB3B1,#EEE0CB"
        />
        <Feature
          title="Collaboration"
          text="Essential collaboration features including custom workflow, comments, reviews, approvals for all your images, audio, videos."
          bg="#FE7C78,#FE7C78,#FFB86F"
        />
      </FeatureList>
    </Layout>
  )
}
export default IndexPage
