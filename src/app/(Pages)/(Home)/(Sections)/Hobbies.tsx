import { Section, responsiveMobileWidth } from "@/app/globalStyles";
import Head from "next/head";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FaSkiing } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { GiDiscGolfBasket } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdSportsTennis } from "react-icons/md";
import styled, { IStyledComponent } from "styled-components";
import { FastOmit } from "styled-components/dist/types";

export default () => {
  return (
      <Section>
        <h1 id="personal" className="heading" style={{ "fontSize": "45px" }}>Personal Life</h1>
        <p>
            Born on the beaches of the Florida Keys, raised in the Appalachian mountains of the Carolinas, 
            and adventuring in the Colorado Rockies. All the while, exploring my love for computers! 
            I am a Full Stack, DevSecOps and Machine Learning Engineer. It&apos;s a long title that basically means that I am a
            extremely passionate developer that wants to be involved in every part of the development lifecycle.
            I currently reside in the mountains of Asheville NC and enjoy the warm weather by exploring the plethora of 
            breweries and hiking trails. In my free time, I enjoy traveling with my family whether thats domestic or abroad.
            I am also an avid fan of historical building techniques and ancient architecture. The nordic Vikings are a particular area
            of interest, especially how they were able to hand craft boats that could survive the oceans. 
        </p>
        <div style={{"height":"50px"}}></div>
        <Grid>
            <Hobbie $img="hobbie4.jpg"></Hobbie>
            <Hobbie $img="hobbie5.jpg" style={{"backgroundPosition":"center -145px"}}></Hobbie>
            <Hobbie $img="hobbie2.jpg"></Hobbie>
            <Hobbie $img="hobbie3.jpg"></Hobbie>
            <Hobbie $img="hobbie1.jpeg"></Hobbie>
            <Hobbie $img="hobbies6.jpg"></Hobbie>
            <Hobbie $img="hobbies7.jpg"></Hobbie>
            <Hobbie $img="hobbies8.jpg"></Hobbie>
            <Label $number={0}>Traveling With My Family</Label>
            <Label $number={1}>
                <span style={{ "textAlign": "right" }}>Robotics Competion</span>
                <span style={{ "textAlign": "left" }}>Asheville Breweries</span>
            </Label>
            <Label $number={2}>Exploring Historical Building Techniques</Label>
        </Grid>
        <h1 className="heading" style={{ "fontSize": "35px" }}>Favorite Sports</h1>

        <Sports>
          <div className="SportCard">
            <div id="icon"><FaBasketball /></div>
            <h3>Basketball</h3>
          </div>
          <div className="SportCard">
            <div id="icon"><MdSportsTennis /></div>
            <h3>Tennis</h3>
          </div>
          <div className="SportCard">
            <div id="icon"><FaSkiing /></div>
            <h3>Skiing</h3>
          </div>
          <div className="SportCard">
            <div id="icon"><GiDiscGolfBasket /></div>
            <h3>Discgolf</h3>
          </div>
        </Sports>
    </Section>
  );
}
const Sports = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
        & {
            width: 90%;
        }
    }
  .SportCard {
    display: flex;
    flex-direction: column;
    align-items: center;
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
`
const Label:IStyledComponent<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {$number:number}, never>> = styled.div`
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%) translateY(${(props)=>250*props.$number}px);
    font-size:30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    gap: 20px;
`
const Hobbie: IStyledComponent<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {$img:string}, never>> = styled.div`
    background-image: url(${(props)=>"/images/"+props.$img});
    background-size: cover;
    background-position: center;
    grid-column: span 2;
    width: 100%;
    aspect-ratio: 3 / 2;
    background-color: #757575;
    border-radius: 10px;
    &:nth-of-type(4) {
        grid-column: 2 / span 2;
    }
`
const Grid = styled.div`
    margin-top: 30px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 140px);
    gap: 60px 10px;
    div {
        
    }
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
        & {
            transform: scale(0.5) translateY(-50%);
            height: 350px;
        }
    }
    @media screen and (max-width: 400px) {
        & {
            transform: scale(0.4) translateY(-80%);
            height: 270px;
        }
    }
    
`