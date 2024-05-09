"use client";

import { PurpleSection, Section, responsiveMobileWidth } from "@/app/globalStyles";
import Head from "next/head";
import Image from "next/image";
import { FaLinkedin, FaRegCalendarPlus } from "react-icons/fa";
import styled, { createGlobalStyle } from "styled-components";
import { FaFileDownload } from "react-icons/fa";
import Resume from "./resume.mdx";
import { jsPDF } from "jspdf";

export default () => {
  return (
    <PageWrapper>
        <BackButton href="/">Check Out My Portfolio</BackButton>
        <PurpleSection style={{"marginBottom":"30px"}}>
            <PurpleHeading className="heading" style={{ "fontSize": "29px" }}>Thank you for your interest</PurpleHeading>
            <p>Review my CV below or download a copy to share with your network. You should also connect with me on LinkedIn to see what I&apos;m currently up to!</p>
            
            <ProfLinks>
              <DownloadCV href="/CurriculumVitae.pdf" download={"Bruer, Keegan - Curriculum Vitae"}>
                  <FaFileDownload />
                  Download CV
              </DownloadCV>
              <LinkedInInvite onClick={() => {
                  window.open("https://www.linkedin.com/in/keeganbruer/")
              }}>
                <FaLinkedin />
                Connect With Me
              </LinkedInInvite>
            </ProfLinks>
            
            <p>Like what you see? Schedule an intro meeting with me!</p>
            <ProfLinks>
                <DownloadCV href="https://calendar.app.google/L6y8xeAKSCpogwEY7" target="_blank">Book a Virtual Meeting <FaRegCalendarPlus /></DownloadCV>
            </ProfLinks>

        </PurpleSection>
      <Section>
        <GlobalStyle />
          <ResumeContent id="cvFull">
            <Resume />
          </ResumeContent>
        </Section>
    </PageWrapper>
  );
}

const PurpleHeading = styled.h1`
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      margin-top: 80px;
    }
  }
`
const ResumeContent = styled.div`
    max-width: 800px;
    width: 100%;
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        width: 80%;
      }
    }
    h1, h2, h3, p {
      width: 100%;
      max-width: 100%;
      text-align: left;
    }
    h1 {
      text-align: center;
      font-size: 56px;
    }
    h2 {
      font-size: 19.2px;
      border-bottom: 1px solid black;
    }
    h3 {
      font-size: 16px;
      margin: 0px;
    }
    h4 {
      font-size: 16px;
      margin: 0px;
      font-weight: normal;
    }
    p {
      font-size: 16px;
    }
    ul {
      margin-top: 0px;
    }
    .ContactInfo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-direction: row;
      & > div > svg {
        min-width: 1em;
      }
      @media screen and (max-width: ${()=>responsiveMobileWidth}) {
        flex-wrap: wrap;
        & > div {
          width: 150px;
        }
      }
    }
    
`
const BackButton = styled.a`
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    z-index: 3;
`
const ProfLinks = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
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


const PageWrapper = styled.div`
  @page 
  {
      size: auto;   /* auto is the initial value */
      margin: 0mm;  /* this affects the margin in the printer settings */
  }
  .spacer {
    height: 30px;
  }
  .small_spacer {
    height: 10px;
  }
  @media print {

    & {
      margin: 50px
    }
      /* page-break-after works, as well */
    ${BackButton} {
      display: none;
    }
    ${PurpleSection} {
      display: none;
    }
  }
`

const GlobalStyle = createGlobalStyle`
  @page 
  {
      size: auto;   /* auto is the initial value */
      margin: 0.75in; 
  }
  
  @media print {
    html {
      overflow: visible !important;
    }
    body {
      position: relative !important;
      overflow: visible !important;
      
      a {
        color: blue;
      }
      h1 {
        font-size: 56px;
        margin: 0px;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 19.2px;
        border-bottom: 1px solid black;
        margin-top: 10px !important;
        margin-bottom: 5px !important;
      }
      p {
        margin: 0px !important;
        font-size: 16px !important;
      }
      ul {
        margin-top: 0px !important;
        margin-bottom: 0px !important;
      }
      .spacer {
        height: 20px !important;
      }
      .small_spacer {
        height: 10px !important;
      }
    }
    ${PageWrapper} {
      margin: 0px;
    }
      /* page-break-after works, as well */
    ${BackButton} {
      display: none;
    }
    ${PurpleSection} {
      display: none;
    }
  }
`
