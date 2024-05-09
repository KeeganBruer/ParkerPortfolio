"use client";

import { PurpleSection, Section, responsiveMobileWidth } from "@/app/globalStyles";
import { PostMeta } from "@/hooks/getPostData";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";


export default (props: { posts: PostMeta[] }) => {
  const router = useRouter()
  return (
    <>
      <BackButton href="/">Check Out My Portfolio</BackButton>
      <PurpleSection>
        <Heading>
          <h1 className="blogTitle">The Software Deep-dive</h1>
          <p>Explore with me as I deepen my understanding through writing. Sharing my insights on emerging technology and methodologies.</p>
          <button onClick={() => {
            router.push("/Deepdive/" + props.posts[0].id);
          }}>Start Reading</button>
        </Heading>
      </PurpleSection>
      <Section>
        <FeaturedArticles>
          <div></div>
          <div></div>
          <div></div>
        </FeaturedArticles>
        <AllArticles>
          {props.posts.map((post) => (
            <div key={post.title} className={"Article " + (post.visibility != "public" ? "preview" : "")} onClick={() => {
              router.push("/Deepdive/" + post.id);
            }}>
              <div id="details">

                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div id="meta">
                  <p>{post.date.toLocaleString('default', { month: 'long', day:"2-digit", year:"numeric" })}</p>
                  <p>{post.readTime} read</p>
                </div>
              </div>
              <div id="image" style={{"backgroundImage": post.cover != undefined ? `url("${post.cover}")` : undefined}}>

              </div>
            </div>
          ))}
          
        </AllArticles>
      </Section>
    </>
  );
}
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
const AllArticles = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  gap: 20px;

  div.Article.preview {
    opacity: 0.3;
  }
  div.Article {
    cursor: pointer;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    overflow: hidden;

    #details {
        padding: 10px;
        flex: 1;
        box-sizing: border-box;
        height: 156px;
        position: relative;
        h3 {
            width: 100%;
            font-size: 30px;
            margin: 0px;
            text-overflow: ellipsis;
            overflow: hidden;
            color: black;
        }
        p {
            width: 100%;
            max-width: 100%;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
            color: black;
        }
        #meta {
            display: flex;
            justify-content: start;
            gap: 20px;
            position: absolute;
            left: 10px;
            bottom: 10px;
            right: 0px;
        }
        @media screen and (max-width: ${() => responsiveMobileWidth}) {
            & {
                height: 120px;
            }
            h3 {
                font-size: 18px;
                max-height: 42px;
            }
            p {
                font-size: 12px;
                max-height: 30px;
            }
        }
    }
    #image {
        width: 234px;
        height: 156px;
        background-color: #757575;
        background-position: center;
        background-size: cover;
        @media screen and (max-width: ${() => responsiveMobileWidth}) {
            & {
                height: 120px;
                width: 100px;
                border-radius: 0px 10px 10px 0px;
            }
        }
    }
  }
`
const FeaturedArticles = styled.div`
  
`
const Heading = styled.div`
  height: 322px;
  width: 70%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 100px;
  gap: 20px;
  h1.blogTitle {
    margin: 0px;
    font-size: 75px;
    width: 450px;
  }
  p {
    text-align: left;
    width: 100%;
    max-width: 700px;
  }
  button {
    background-color: black;
    border: 0px solid white;
    color: white;
    width: 200px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: ${() => responsiveMobileWidth}) {
    h1.blogTitle {
        font-size: 30px;
        width: 250px;
    }
    p {
        font-size: 13px;
    }
    button {
        font-size: 13px;
        width: 150px;
    }
  }
`