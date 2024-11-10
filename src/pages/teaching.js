import React from "react"
import Layout from "../components/Layout"
import SummaryFrame from "../components/SummaryFrame"
import SectionFrame from "../components/SectionFrame"

// Placeholder images for sections where available
// Remove the `cosmology.jpg` import to use a dark background instead

const TeachingPage = () => (
  <Layout>
    {/* Summary Section */}
    <SummaryFrame 
      title="Teaching"
      summary="Passing knowledge to a new generation. During my career, I had the opportunity to teach different topics (physics, data analysis, cosmological simulations) in different languages (French and English) and at different levels (Undergrad to Ph.D. level). Since 2021, I have been teaching both at the undergraduate (Physics, Astronomy for non-science majors) and graduate (Statistics, Cosmology, Instrumentation) levels. Before that, I gave a lecture on cosmological simulations at Kyunghee University, and hands-on sessions on cosmological simulations at the Pyeongchang Summer Institute 2015. I was also invited to the Indian Institute for Astrophysics (Bangalore) to teach cosmological simulations. During my Ph.D., I was a teaching assistant at the Université Paris 7 Denis Diderot. I gave tutorials in Physics and in data analysis for Earth sciences."
    />

    {/* 1. Assistant Professor Section at Sejong University */}
    <SectionFrame
      title="Assistant Professor at Sejong University"
      dateRange="Since 2021"
      description={
        <>
          <h4>Graduate Courses</h4>
          <ul>
            <li><strong>Mathematical Astronomy:</strong> Fall 2022, Spring 2024</li>
            <li><strong>Cosmology:</strong> Fall 2021</li>
            <li><strong>Data Analysis:</strong> Spring 2021</li>
          </ul>
          <h4>Undergraduate Courses</h4>
          <ul>
            <li><strong>General Physics I:</strong> Spring 2022, Spring 2023, Spring 2024</li>
            <li><strong>Intro to Astronomy:</strong> Fall 2023</li>
            <li><strong>Physics of Everyday Life:</strong> Fall 2024</li>
          </ul>
        </>
      }
    />

    {/* 2. Invited Lectures Section (Cosmological Simulations) */}
    <SectionFrame
      title="Invited Lectures on Cosmological Simulations"
      dateRange="2013-2016"
      description={
        <>
          <p><strong>Nov. 2015:</strong> Invited lecture on cosmological simulations (PhD candidates), Indian Institute of Astrophysics, Bangalore, India. Theory and hands-on session with Gadget-2.</p>
          <p><strong>July 2015:</strong> Pyeongchang Summer Institute 2015, tutorials on cosmological N-body simulations using the GOTPM code: design the initial conditions, run the simulation, visualize and analyze the outputs.</p>
          <p><strong>Nov. 2013:</strong> 1-hour lecture on cosmological simulations to undergraduate astronomy students, Kyunghee University, Suwon, Korea.</p>
        </>
      }
    />

    {/* 3. Teaching Assistant Section at Université Paris Diderot */}
    <SectionFrame
      title="Teaching Assistant at Université Paris Diderot"
      dateRange="2008 - 2011"
      description={
        <>
          <h4>1. Physics</h4>
          <p><strong>2010-2011:</strong> Tutorials of physics for first-year BSc students (L1) with François Vannucci: Hydrostatics, hydrodynamics, kinematics.</p>
          <p><strong>2009-2010:</strong> Tutorials of physics for first-year BSc students (L1) with Sébastien Charnoz: Hydrostatics, hydrodynamics, energy.</p>
          <p><strong>2008-2009:</strong> Experimental work in mechanics.</p>
          
          <h4>2. Data Analysis in Earth Science</h4>
          <p><strong>2008 - 2011:</strong> Computing tutorials in data analysis with MATLAB for first-year master’s (M1) students in Earth Science with Olivier de Viron: Frequency analysis, statistics, least square methods, wavelets.</p>
        </>
      }
    />
  </Layout>
)

export default TeachingPage
