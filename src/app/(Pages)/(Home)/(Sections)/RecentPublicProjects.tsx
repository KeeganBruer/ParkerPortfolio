import { Section, responsiveMobileWidth } from "@/app/globalStyles";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { FaSteam } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default () => {
  return (
    <Section>
        <h1 id="projects" className="heading">Recent Public Projects</h1>
        <p>Here are a few past projects I&apos;ve worked on that I can share publically.</p>
        <RecentProjects>
          <div className="ProjectGrid" id="javadoc">
            <div>
              <div id="img">
                <div></div>
              </div>
              <div id="overlay">
                <h1>Javadoc-Generator</h1>
                <button onClick={() => {
                  window.open("https://github.com/KeeganBruer/javadoc-generator")
                }}><FaGithub />View on Github</button>
              </div>
            </div>
          </div>
          <div className="ProjectGrid" id="dndengine">
            <div>
              <div id="img">
                <div></div>
              </div>
              <div id="overlay">
                <h1>D&D Engine</h1>
                <button onClick={() => {
                  window.open("https://drive.google.com/file/d/1RUXsD6FblaY3bUKQOEz0xzWqVb__Bxni/view")
                }}>Read The Paper</button>
              </div>
            </div>
          </div>
          <div className="ProjectGrid" id="portfolio">
            <div>
              <div id="img">
                <div></div>
              </div>
              <div id="overlay">
                <h1>Portfolio Website</h1>
                <button onClick={() => {
                  window.open("https://github.com/KeeganBruer/NextJSPortfolio")
                }}><FaGithub />View on Github</button>
              </div>
            </div>
          </div>
          <div className="ProjectGrid" id="malicaitower">
            <div>
              <div id="img">
                <div></div>
              </div>
              <div id="overlay">
                <h1>Malachi&apos;s Tower</h1>
                <button onClick={() => {
                  window.open("https://github.com/KeeganBruer/")
                }}><FaSteam />View on Steam</button>
              </div>
            </div>
          </div>
          <div className="ProjectGrid" id="dipla">
            <div>
              <div id="img">
                <div></div>
              </div>
              <div id="overlay">
                <h1>The Dice Integrated Programming Language</h1>
                <button onClick={() => {
                  window.open("https://github.com/KeeganBruer/The-Dice-Integrated-Programming-Language")
                }}><FaGithub />View on Github</button>
              </div>
            </div>
          </div>
          <div className="ProjectGrid" id="timeSynchronize">
            <div>
              <div id="img">
                <div></div>
              </div>
              <div id="overlay">
                <h1>Time-Synchronize Kinect-RGBD-Streams</h1>
                <button onClick={() => {
                  window.open("https://github.com/KeeganBruer/Time-Synchronize-Kinect-RGBD-Streams")
                }}><FaGithub />View on Github</button>
              </div>
            </div>
          </div>
        </RecentProjects>
      </Section>
  );
}

const RecentProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  
  .ProjectGrid {
    flex: none;
    display: block;
    padding: 20px;
    width: 100%;
    aspect-ratio: 3 / 2;
    max-width: 400px;
    box-sizing: border-box;
    --color: white;
    div {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      height: 100%;
      #img {
        width: 100%;
        height: 100%;
        background-color: #757575;
      }
      #img > div  {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        transition: transform 0.25s;
      }
      #overlay  {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        transition: opacity 0.25s;
        z-index: 3;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--color);
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        button {
            color: var(--color);
            cursor: pointer;
            background: transparent;
            border: 1px solid white;
            border-radius: 10px;
            padding: 10px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            svg {
                height: 100%;
                aspect-ratio: 1;
            }
        }
      }
      &:hover > #overlay {
        opacity: 1;
      }
      &:hover > #img > div {
        transform: scale(1.2);
      }
    }

    &#javadoc {
        --color: white;
      & > div > #img > div {
        background-image: url("/projectCovers/javadoc-generator.jpg");
      }
    } 
    &#dndengine {
        --color: white;
        & > div > #img > div {
            background-image: url("/projectCovers/dndengine.jpg");
        }
    } 
    &#portfolio {
      --color: white;
      & > div > #img > div {
        background-image: url("/projectCovers/PortfolioCover.jpg");
      }
    } 
    &#malicaitower {
      --color: white;
      & > div > #img > div {
        background-image: url("/projectCovers/MalicaiTower.jpg");
      }
    } 
    &#dipla {
      --color: white;
      & > div > #img > div {
        background-image: url("/projectCovers/DIPLA.jpg");
      }
    } 
    &#timeSynchronize {
      --color: white;
      & > div > #img > div {
        background-image: url("/projectCovers/timeSynchronize.jpg");
      }
    } 
  }
  @media screen and (min-width: ${()=>responsiveMobileWidth}) {
    .ProjectGrid {
      width: calc(100% / 2);
    }
  }
  @media screen and (min-width: 1024px) {
    .ProjectGrid {
      width: calc(100% / 3);
    }
  }
  
`