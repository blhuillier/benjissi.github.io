import React from "react"
import Layout from "../components/Layout"
import SectionFrame from "../components/SectionFrame"

const OutreachPage = () => (
  <Layout>
    <h1>Public Outreach</h1>

    {/* Public Talks Section */}
    <SectionFrame
      title="Public Talks on the History of the Universe"
      dateRange=""
      description={
        <>
          <p>Delivered talks on the history of our Universe at:</p>
          <ul>
            <li>Seoul French School</li>
            <li>Lycée International Xavier</li>
            <li>French Cultural Center</li>
          </ul>
        </>
      }
    />

    {/* VR Collaboration with Sung-A Jang */}
    <SectionFrame
      title="VR Collaboration on Traditional Korean Constellations"
      dateRange="ISEA 2019, Gwangju, Korea"
      description={
        <>
          <p>Collaborated with artist Sung-A Jang to create a VR visualization of traditional Korean constellations. This work was presented at the International Symposium on Electronic Art (ISEA) 2019 in Gwangju, Korea.</p>
        </>
      }
    />
  </Layout>
)

export default OutreachPage
