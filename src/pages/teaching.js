import React from "react"
import Layout from "../components/Layout"

const TeachingPage = () => (
  <Layout>
    <h1>Teaching</h1>
    <p>
      Welcome to the Teaching page. Here, you’ll find information about my teaching philosophy, courses I offer, and resources for students.
    </p>
    <section>
      <h2>Courses Offered</h2>
      <p>
        I teach a variety of courses covering topics in physics, astronomy, and cosmology. Below is a list of current and past courses:
      </p>
      <ul>
        <li>General Physics I</li>
        <li>Physics of Everyday Life</li>
        <li>Introduction to Cosmology</li>
      </ul>
    </section>
    <section>
      <h2>Student Resources</h2>
      <p>
        Here are some useful resources and materials to support your learning:
      </p>
      <ul>
        <li><a href="/syllabus.pdf">Syllabus</a></li>
        <li><a href="/assignments.pdf">Assignments</a></li>
      </ul>
    </section>
  </Layout>
)

export default TeachingPage
