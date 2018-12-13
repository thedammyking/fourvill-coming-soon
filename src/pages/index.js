import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {Wrapper, FeatureList} from '../components/styled'
import FeatureTile from '../components/FeatureTile'
import TileOne from '../components/tile_1'
import TileTwo from '../components/tile_2'
import TileThree from '../components/tile_3'
import TileFour from '../components/tile_4'

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" keywords={['fourvill', 'coming soon']} />
    <FeatureList>
    <Wrapper>
    <FeatureTile image={TileOne} title="PLAN, COLLABORATE & CREATE EFFECTIVELY" text="Organize your content into topics, platforms, projects, interests." ></FeatureTile>
    <FeatureTile image={TileTwo} title="UNIFY YOUR BRAND" text="Easily build a unified brand message, tone and quality." ></FeatureTile>
    <FeatureTile image={TileThree} title="GROW YOUR BRAND WITH THE POWER OF MANY" text="Collaborate with influencers, creatives, contents experts..." ></FeatureTile>
    <FeatureTile image={TileFour} title="SCHEDULE, RECYCLE SOCIAL MEDIA, BLOG, AD CONTENT" text="All your social media tools extended for blogging, Ads and social media" ></FeatureTile>
    </Wrapper>
    </FeatureList>
  </Layout>
)

export default IndexPage
