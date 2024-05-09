import { Section, responsiveMobileWidth } from "@/app/globalStyles";
import Head from "next/head";
import Image from "next/image";
import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactElement, SetStateAction, useState } from "react";
import { FaSkiing } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { GiDiscGolfBasket } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdSportsTennis } from "react-icons/md";
import styled, { IStyledComponent } from "styled-components";
import { FastOmit } from "styled-components/dist/types";

export default () => {
    let [currIndex, setCurrIndex] = useState(0)
    return (
        <Section>
            <h1 id="testimonials" className="heading" style={{ "fontSize": "45px" }}>Testimonials</h1>
            <CardSlide currIndex={currIndex} setCurrIndex={setCurrIndex}>
                <Testimonial profile={"/testimonials/DavidSteadman.jpg"}>
                    <div id="img"></div>
                    <a href="https://www.linkedin.com/in/david-steadman/">    
                        <h2>David (Steady) Steadman</h2>
                    </a>
                    <p>
                        "I've had the immense pleasure of working alongside Keegan at CyDeploy, where he has unequivocally established himself as a rockstar in our midst. Through his unparalleled expertise and dedication, Keegan has revolutionized the way we operate by masterfully orchestrating a Kubernetes cluster and automating all facets of our Azure marketplace and deployment processes.
                    </p>
                    <p>
                        His approach to challenges is nothing short of inspiring; Keegan doesn't just tackle issues as they arise—he dives headfirst into the heart of the problem with a solution-oriented mindset that uplifts the entire team. This isn't just about technical proficiency; it's about an attitude that elevates our collective spirit and drives towards excellence.
                    </p>
                    <p>
                        The ripple effects of Keegan's contributions are felt across all our projects. His work has not only streamlined our operations but also dramatically enhanced our efficiency and effectiveness, allowing us to deliver superior services to our clients with unprecedented speed and reliability.
                    </p>
                    <p>
                        Keegan is more than just a skilled professional; he's a team player through and through. His willingness to share knowledge, offer guidance, and foster a collaborative environment has significantly contributed to our team's growth and success.
                    </p>
                    <p>
                        In summary, Keegan's impact at CyDeploy has been transformative. His blend of technical acumen, problem-solving prowess, and collaborative spirit marks him as a true rockstar in our field. We're incredibly fortunate to have him on our team, pushing the boundaries of what's possible and setting new benchmarks for excellence."
                    </p>
                    
                </Testimonial>
                <Testimonial profile={"/testimonials/TinaWilliams.jpg"}>
                    <a href="https://www.linkedin.com/in/tcwk/">    
                        <div id="img"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/tcwk/">    
                        <h2>Tina Williams-Koroma, Esq., CISSP, PMP</h2>
                    </a>
                    <p>"One of the core values at CyDeploy is "professional curiosity."  This entails team members really owning their respective crafts and taking initiative on the next step, always thinking of how something could be done better.  Keegan embodies this value.  He's not only a strong engineer, but also a clear, and effective communicator, a rare combination among tech professionals!"</p>
                </Testimonial>
            </CardSlide>
        </Section>
    );
}


const Testimonial:IStyledComponent<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement> & {profile:string}, HTMLDivElement>, never>> = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #img {
        width: 100px;
        height: 100px;
        ${props => {
            return `background-image: url("${props.profile}");`
        }}
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        margin: 0px;
        margin-bottom: 5px;
        @media screen and (max-width: ${()=>responsiveMobileWidth}) {
            & {
                margin-bottom: 10px;
            }
        }
    }
    a {
        text-decoration: none;
        color: black;

    }
    h2 {
        margin: 0px;
        margin-bottom: 20px;
        @media screen and (max-width: ${()=>responsiveMobileWidth}) {
            & {
                font-size: 16px;
                text-align: center;
            }
        }
    }
    p {
        font-size: 18px;
        @media screen and (max-width: ${()=>responsiveMobileWidth}) {
            & {
                font-size: 12px;
            }
        }
    }
`

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
function CardSlide(props:{children:ReactElement | ReactElement[], currIndex:number, setCurrIndex:Dispatch<SetStateAction<number>>}) {
    
    if (!Array.isArray(props.children)) return (
        <Wrapper>
            <CardWrapper>
                <Card key={"card"} offset={props.currIndex}>{props.children}</Card>
            </CardWrapper>
        </Wrapper>
    )
    let children = props.children;
    const prev = () => {
        if (props.currIndex == 0) return;
        props.setCurrIndex(props.currIndex - 1)
    }
    const next = () => {
        if (props.currIndex == children.length-1) return;
        props.setCurrIndex(props.currIndex + 1)
        
    }
    return (
        <Wrapper>
            <CardWrapper>
                {children.map((card, i) => <Card key={"card"+i} offset={props.currIndex}>{card}</Card>)}
            </CardWrapper>
            <div id="overlay">
                <div className="nav" id="left" onClick={()=>prev()}><IoIosArrowBack/></div>
                <div id="spacer"></div>
                <div className="nav" id="right" onClick={() => next()}><IoIosArrowForward/></div>
                <PageIndicator>{children.map((c, i) => (
                    <div key={"indicator"+i} id={i == props.currIndex ? "current" :""}></div>
                ))}</PageIndicator>
            </div>
        </Wrapper>
    )
}

const PageIndicator = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;

    div {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #6E07F3;
    }
    div#current {
        background-color: #6E07F3;
        border: 1px solid #6E07F3;
        
    }
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    --width: min(800px,60%);
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
        & {
            --width: 80%;
        }
    }
    #overlay {
        pointer-events: none;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        #spacer {
            cursor: default;
            min-width: var(--width);
            pointer-events: none;
            @media screen and (max-width: ${()=>responsiveMobileWidth}) {
                & {
                    flex: 1;
                    min-width: 0px;
                }
            }
        }
        div {
            flex: 1;
            @media screen and (max-width: ${()=>responsiveMobileWidth}) {
                &.nav {
                    max-width: 100px;
                }
                &#left svg {
                    margin-right: 40px;
                }
                &#right svg {
                    margin-left: 40px;

                }
                svg {
                    width: 30px !important;
                    height: 30px !important;
                }
            }
            cursor: pointer;
            pointer-events: all;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                width: 60px;
                height: 60px;
            }
        }
    }
`
    
const CardWrapper = styled.div`
    width: 90%;
    display: flex;
    overflow: hidden;
`
const Card:IStyledComponent<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement> & {offset:number}, HTMLDivElement>, never>> = styled.div`
    width: 100%;
    min-width: 100%;
    --offset: ${props=>props.offset};
    transform: translateX(calc(-100% * var(--offset)));
    transition: transform 0.25s;
    padding-bottom: 20px;
    
`