import React from "react"
import Layout from "../components/Layout"
import GroupMember from "../components/GroupMember"
import placeholderImage from "../images/placeholder.jpeg"

// Attempt to import each image; fallback to placeholder if not found
let photoHyeon, photoNoh, photoMillard, photoHwang, photoYu, photoChung;
try { photoHyeon = require("../images/hyeon.jpg"); } catch { photoHyeon = placeholderImage; }
try { photoNoh = require("../images/noh.jpg"); } catch { photoNoh = placeholderImage; }
try { photoMillard = require("../images/millard.jpg"); } catch { photoMillard = placeholderImage; }
try { photoHwang = require("../images/hwang.jpg"); } catch { photoHwang = placeholderImage; }
try { photoYu = require("../images/yu.jpg"); } catch { photoYu = placeholderImage; }
try { photoChung = require("../images/chung.jpg"); } catch { photoChung = placeholderImage; }

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
        photo={photoHyeon}
      />
      <GroupMember
        name="M. Si Hyeong Noh"
        role="Graduate Student"
        startDate="Spring 2023"
        description="Focusing on Testing Modified Gravity."
        photo={photoNoh}
      />
      <GroupMember
        name="Ms. Cléa Millard"
        role="Graduate Student"
        startDate="Fall 2024"
        description="Working on SNIa Cosmology."
        photo={photoMillard}
      />
    </section>

    <section>
      <h2>Graduate Research Assistant</h2>
      <GroupMember
        name="M. Seung-gyu Hwang"
        role="Graduate Research Assistant"
        startDate="Summer 2024"
        description="Researching SNIa Cosmology."
        photo={photoHwang}
      />
    </section>

    <section>
      <h2>Alumni</h2>
      <GroupMember
        name="M. Seung-gyu Hwang"
        role="Alumnus"
        startDate="Yonsei U. M. Sc, 2019-2022"
        description=""
        photo={photoHwang}
      />
      <GroupMember
        name="M. Seokhyeon Yu"
        role="Alumnus"
        startDate="B. Sc., 2022"
        description=""
        photo={photoYu}
      />
      <GroupMember
        name="Ms. Sohee (Sophie) Chung"
        role="Alumna"
        startDate="2019, Emory Rising Sophomore project"
        description=""
        photo={photoChung}
      />
    </section>
  </Layout>
)

export default TheGroupPage
