"use client";

import styled from "styled-components";
import DesktopClipart from "@/assets/DesktopClipart.svg"
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PageFooter, PurpleSection, Section, responsiveMobileWidth } from "@/app/globalStyles";
import HobbiesSection from "./(Sections)/Hobbies";
import RecentPublicProjects from "./(Sections)/RecentPublicProjects";
import Testimonials from "./(Sections)/Testimonials";
import Certifications from "./(Sections)/Certifications";
export default () => {
  return (
    <>
      <Section style={{"marginBottom":"-6px"}}>
        <h1 className="heading">Full Stack, DevOps & Machine Learning</h1>
        <DesktopClipartWrapper>
          <DesktopClipart></DesktopClipart>
        </DesktopClipartWrapper>
      </Section>
      <PurpleSection id="intro" style={{ "marginTop": "-2px", "padding": "100px 0px" }}>
        <DeepDivePromo onClick={() => {
          window.location.href = "/Deepdive"
        }}></DeepDivePromo>
        <h1 className="heading">Hi, I’m Keegan. Nice to meet you.</h1>
        <p>
          I started my journey to become a software engineer over a decade ago.
          I&apos;ve done remote work for freelance clients and startups,
          all while collaborating with talented people to create digital products
          for both business and consumer use. I&apos;m quietly confident, naturally
          curious, and perpetually working on learning anything and everything about computers.
        </p>
        <div>
          <div></div>
        </div>
        <div style={{"height":"50px"}}></div>
      </PurpleSection>
      <Section>
        <ThreeColumn>
          <div>
            <div id="icon"><CiServer /></div>
            <h1>Full Stack Developer</h1>
            <p>I am experienced in a multitude of frontend and backend frameworks.</p>
            <h3>Backend Technologies</h3>
            <table style={{ "width": "100%", "gap": "5px" }}>
              <tbody>
              <tr>
                <td style={{"textAlign":"right", "width":"50%"}}>Java</td>
                <td style={{"textAlign":"center", "minWidth":"15px", "height":"30px"}}>-</td>
                <td style={{"textAlign":"left", "width":"50%"}}>Springboot</td>
              </tr>
              <tr>
                <td style={{"textAlign":"right", "width":"50%"}}>Javascript<br />Typescript</td>
                <td style={{"textAlign":"center", "minWidth":"15px", "height":"30px"}}>-</td>
                <td style={{"textAlign":"left", "width":"50%"}}>NodeJS</td>
              </tr>
              <tr>
                <td style={{"textAlign":"right", "width":"50%"}}>C#</td>
                <td style={{"textAlign":"center", "minWidth":"15px", "height":"30px"}}>-</td>
                <td style={{"textAlign":"left", "width":"50%"}}>.NET Core</td>
              </tr>
              </tbody>
            </table>
            <h3>Frontend Frameworks</h3>
            <ul>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Angular</li>
              <li>React Native</li>
              <li>JQuery</li>
              <li>Flow Language</li>
            </ul>
          </div>
          <div>
            <div id="icon"><FaGear /></div>
            <h1>DevOps & Cloud Computing</h1>
            <p>I value CICD pipelines with automated unit and integration testing.</p>
            <h3>Cloud Platforms</h3>
            <p className="techlist">Azure, AWS, GCP, and DigitalOcean</p>
            <h3>Deployment Technologies/Platforms</h3>
            <ul>
              <li>Docker</li>
              <li>JIRA</li>
              <li>GIT / GitHub</li>
              <li>Jenkins</li>
              <li>Github Actions</li>
              <li>JUnit</li>
              <li>Selenium</li>
            </ul>
            <h3>Kubernetes DevOps</h3>
            <p className="techlist">Experience in crafting CICD pipelines for deployment into Kubernetes environments. As well as some experience configuring the cluster.</p>
          </div>
          <div>
            <div id="icon"><LuBrainCircuit /></div>
            <h1>AI / ML Engineer</h1>
            <p>I love working at the forefront of technology and AI / ML is no exception.</p>
            <h3>Favorite Models and Algorithms</h3>
            <p className="techlist">NLP, LLM, GANs, RLHF, Regression, Visual Computing, and Decision Trees </p>
            <h3>Machine Learning Libraries</h3>
            <ul>
              <li>Tensorflow</li>
              <li>Torch / PyTorch</li>
              <li>OpenCV (for vision)</li>
              <li>GPyTorch (for guassians)</li>
              <li>OpenAI API</li>
              <li>SageMaker</li>
            </ul>
            <h3>Data Science</h3>
            <ul>
              <li>Jupyter Notebook</li>
              <li>LaTeX</li>
              <li>NumPy</li>
              <li>pandas</li>
              <li>Matplotlib</li>
            </ul>
          </div>
        </ThreeColumn>
      </Section>
      <Certifications />
      <RecentPublicProjects></RecentPublicProjects>
      <Section>
        <h1 className="heading" style={{"fontSize":"29px"}}>I&apos;m proud to have collaborated with some awesome companies</h1>
        <CompaniesGrid>
          <div id="cydeploy" onClick={() => {
            window.open("https://cydeploy.com")
          }}></div>
          <div id="warlocktt" onClick={() => {
            window.open("https://warlocktabletop.com")
          }}></div>
        </CompaniesGrid>
      </Section>

      <Testimonials />
      
      <PurpleSection style={{ "marginBottom": "50px" }}>
        <h1 className="heading" style={{ "fontSize": "29px" }}>Interested in Collaberating?</h1>
        <p>Book a virtual meeting with me, visit my digital CV document, or just connect with me on LinkedIn!</p>
        <ProfLinks>
          <DownloadCV href="https://calendar.app.google/L6y8xeAKSCpogwEY7" target="_blank">Book a Virtual Meeting <FaRegCalendarPlus /></DownloadCV>
          <DownloadCV href="/CV">View CV Page <MdOutlineOpenInNew /></DownloadCV>
          <LinkedInInvite onClick={() => {
            window.open("https://www.linkedin.com/in/keeganbruer/")
          }}>
            Connect With Me
            <FaLinkedin />
          </LinkedInInvite>
        </ProfLinks>

      </PurpleSection>
      
      <HobbiesSection />
      
      <PageFooter>
        <div id="BlackDivider">
          <h2>Articles By Me</h2>
          <p>Interested in an indepth dive into my opinions on emerging technology?</p>
          <a href="/Deepdive">Visit The Deep-dive</a>
        </div>
        <h1 style={{"width": "100%", "textAlign":"center"}}>Thank You For Your Time!</h1>
      </PageFooter>
    </>
  );
}


const DeepDivePromo = styled.div`
  position: absolute;
  top: 30px;
  right: 10%;
  width: 16vw;
  background-image: url("/Deepdive/Promotion/SunshineAd.svg");
  background-position: center;
  background-size: 284%;
  aspect-ratio: 3 / 2;
  cursor: pointer;
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      display: none;
    }
  }
`
const ProfLinks = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`
const DownloadCV = styled.a`
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
  svg {
    --size: 20px;
    height: var(--size);
    width: var(--size);
  }
`
const LinkedInInvite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;

  h1 {
    margin: 0px;
    color: white !important;
    font-size: 20px;
  }
  @media screen and (min-width: ${()=>responsiveMobileWidth}) {
    h1 {
      font-size: 29px;
    }
  }
  svg {
    --size: 20px;
    height: var(--size);
    width: var(--size);
  }
`
const DesktopClipartWrapper = styled.div`
  padding-top: 30px;
  width: max(70%, 300px);
  svg {
    width: 100%;
  }
`
const CompaniesGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-around;
  padding: 30px;
  gap: 50px;
  div {
    width: 300px;
    height: 100px;
    border-radius: 37px;
    cursor: pointer;
    background-color: #757575;
    background-position: center;
    background-size: cover;
    &#cydeploy {
      background-image: url("/3rdPartyLogos/cydeploylogo.png");
    }
    &#warlocktt {
      background-image: url("/3rdPartyLogos/WarlockBar.png");
    }
  }
`

const BlackSubdivider = styled.div`
  transform: translateY(-50%);
  height: 45px;
  width: 90%;
  background-color: black;
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 20px;
  h2 {
    font-size: 20px;
  }
  p {
    width: 100%;
    max-width: 400px;
  }
  a {
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
    font-size: 20px;
  }
`
const ThreeColumn = styled.div`
  width: 90%;
  margin-top: -200px;
  display: flex;
  flex-wrap: wrap;
  h3 {
    color: #6E07F3;
    margin: 0px;
    margin-top: 20px;
  }
  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }
  p.techlist {
    font-size: 16px;
  }
  & > div {
    flex: 1;
    border: 1px solid black;
    background-color: white;
    min-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;

    &:first-child {
      border-radius: 20px 0px 0px 0px;
      border-right: 0px;
    }
    &:nth-child(2) {
      border-radius: 0px 20px 0px 0px;
      border-right: 1px solid black;
    }
    &:last-child {
      border-radius: 0px 0px 20px 20px;
      border-left: 1px solid black;
      border-top: 0px;
    }

    & > #icon {
      width: 50px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #5BE9B9;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 70%;
        height: 70%;
      }
    }
  }
  @media screen and (min-width: 1020px) {
    div {
      min-width: auto;
      &:first-child {
        border-radius: 20px 0px 0px 20px;
        border-right: 0px;
      }
      &:nth-child(2) {
        border-radius: 0px 0px 0px 0px;
        border-right: 1px solid black;
      }
      &:last-child {
        border-radius: 0px 20px 20px 0px;
        border-left: 0px;
      }
    }
    
  }
  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
    
    div {
      &:first-child {
        border-radius: 20px 20px 0px 0px;
        border-right: 1px solid black;
        border-bottom: 0px;
      }
      &:nth-child(2) {
        border-radius: 0px 0px 0px 0px;
        border-right: 1px solid black;
      }
      &:last-child {
        border-radius: 0px 0px 20px 20px;
        border-left: 1px solid black;
        border-top: 0px;

      }
    }
    
  }
  
`
