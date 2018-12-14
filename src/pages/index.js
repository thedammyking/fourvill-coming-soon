import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {Wrapper, FeatureList} from '../components/styled'
import FeatureTile from '../components/FeatureTile'
import tile1 from '../svg/tile-1.svg'
import tile2 from '../svg/tile-2.svg'
import tile3 from '../svg/tile-3.svg'

const TileOne = () => <img src={tile1} alt=""/>
const TileTwo = () => <img src={tile2} alt=""/>
const TileThree = () => <img src={tile3} alt=""/>
const TileFour = () => <img src="" alt=""/>

const IndexPage = () => { 
  return (
  <Layout>
    <SEO title="Coming Soon" keywords={['fourvill', 'coming soon']} />
    <FeatureList>
    <Wrapper>
    <FeatureTile image={TileOne} color="#48ACF0" title="PLAN, COLLABORATE & CREATE EFFECTIVELY" text="Organize your content into topics, platforms, projects, interests." />
    <FeatureTile image={TileTwo} color="#FFB86F" title="UNIFY YOUR BRAND" text="Easily build a unified brand message, tone and quality." />
    <FeatureTile image={TileThree} color="#FE7C78" title="GROW YOUR BRAND WITH THE POWER OF MANY" text="Collaborate with influencers, creatives, contents experts..." />
  <FeatureTile image={TileFour} color="#A497AE" title="SCHEDULE, RECYCLE SOCIAL MEDIA, BLOG, AD CONTENT" text="All your social media tools extended for blogging, Ads and social media" />
    </Wrapper>
    </FeatureList>
  </Layout>
)
}
export default IndexPage
