import React from "react"
import Layout from "../components/Layout"
import GroupMember from "../components/GroupMember"
import placeholderImage from "../images/placeholder.jpeg" // Placeholder for missing images

// Specific images
import photoHyeon from "../images/hyeon.jpg"
import photoNoh from "../images/noh.jpg"
import photoMillard from "../images/millard.jpg"
import photoHwang from "../images/hwang.jpg"
import photoYu from "../images/yu.jpg"
import photoChung from "../images/chung.jpg"

const TheGroupPage = () => (
  <Layout>
    <h1>The Group</h1>
    <p>Benjamin L'Huillier, Assistant Professor</p>

    <section>
      <h2>Graduate Students</h2>
      <GroupMember
        name="M. Kim Hyeon"
        role="Graduate Student"
        startDate="Spring 2023"
        description="Researching N-body Simulations."
        photo={photoHyeon || placeholderImage}
      />
      <GroupMember
        name="M. Si Hyeong Noh"
        role="Graduate Student"
        startDate="Spring 2023"
        description="Focusing on Testing Modified Gravity."
        photo={photoNoh || placeholderImage}
      />
      <GroupMember
        name="Ms. Cléa Millard"
        role="Graduate Student"
        startDate="Fall 2024"
        description="Working on SNIa Cosmology."
        photo={photoMillard || placeholderImage}
      />
    </section>

    <section>
      <h2>Graduate Research Assistant</h2>
      <GroupMember
        name="M. Seung-gyu Hwang"
        role="Graduate Research Assistant"
        startDate="Summer 2024"
        description="Researching SNIa Cosmology."
        photo={photoHwang || placeholderImage}
      />
    </section>

    <section>
      <h2>Alumni</h2>
      <GroupMember
        name="M. Seung-gyu Hwang"
        role="Alumnus"
        startDate="Yonsei U. M. Sc, 2019-2022"
        description=""
        photo={photoHwang || placeholderImage}
      />
      <GroupMember
        name="M. Seokhyeon Yu"
        role="Alumnus"
        startDate="B. Sc., 2022"
        description=""
        photo={photoYu || placeholderImage}
      />
      <GroupMember
        name="Ms. Sohee (Sophie) Chung"
        role="Alumna"
        startDate="2019, Emory Rising Sophomore project"
        description=""
        photo={photoChung || placeholderImage}
      />
    </section>
  </Layout>
)

export default TheGroupPage
