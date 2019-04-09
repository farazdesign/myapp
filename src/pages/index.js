import React from "react"
import {
  Link
} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () =>
  (<Layout >
    <SEO title="Home" keywords={
      [`gatsby`, `application`, `react`]
    } />

    <div className="Hero">
      <div className="HeroGroup">
        <h1 > Faraz Uddin<br></br> My First Ever React Website< /h1>
      <p> I really enjoy Design + Code. My goal is to become a Full-Stack UX/UI Designer< /p>
      <Link to="/page-2/" > Watch the video < /Link> 
    </div>
  </div>


          < /Layout > )
                
export default IndexPage