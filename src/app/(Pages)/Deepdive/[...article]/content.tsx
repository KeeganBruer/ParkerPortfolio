"use client";

import { PageFooter, PurpleSection } from "@/app/globalStyles";
import type { Metadata } from "next";
import styled from "styled-components";
import { ImArrowRight } from "react-icons/im";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
export type ArticleMeta = {
  title: string,
  description: string,
  date: Date,
  readTime: string,
  link: string,
  cover?: string
}

export default (props: { children: ReactNode }) => {

  return (
    <>
      <PurpleSection style={{"marginBottom":"100px", "paddingLeft":"20px", "alignItems":"start", "position":"sticky", "top":"0px"}}>
        <ReturnButton onClick={() => {
          window.location.href = "/Deepdive"
        }}>
          <ImArrowRight style={{ "transform": "scale(-1)" }} />
          <span>All Articles</span>
        </ReturnButton>
      </PurpleSection>
      <ArticleContent>
        <div>
          {props.children}
        </div>
      </ArticleContent>
      <PageFooter>
        <div id="BlackDivider">
          <h2>Enjoy the Article?</h2>
          <p>Read more articles like this one where I deepen my understanding on emerging technology and methodologies through writing.</p>
          <a href="/Deepdive">Read Articles</a>
        </div>
      </PageFooter>
    </>
  );
}

const ReturnButton = styled.h2`
  border: 1px solid white;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    height: 30px;
    width: 30px;
  }
`

const ArticleContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  min-height: 50vh;
  & > div {
    width: 90%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    .titleSection {
      margin-bottom: 30px;
      width: 100%;
      display: flex;
      flex-direction: column;
      //align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: bold;
      #title  {
        font-size: 30px;
      }
      #subtitle  {
        font-size: 20px;
        font-weight: normal;
      }
    }
    h1, h2, h3 {
      text-align: left;
      width: 100%;
      margin-bottom: 0px;
    }
    h2, h3 {
    }
    p {
      width: 100%;
      text-align: left;
      margin-top: 10px;
      margin-bottom: 0px;
    }
  }
`
