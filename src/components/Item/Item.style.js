import styled from "styled-components";

export const Item=styled.div`
    align-items: center;
    background: #ffffff;
    border-radius: 1rem;
    border: none;
    display: grid;
    grid-template-columns: 100px 5fr auto;
    margin: 0.25rem;
    overflow: hidden;
`
export const ImageContainer=styled.div`
    aspect-ratio: 1/1;
    border-right: 1px solid #333333;
    overflow: hidden;
    width: 100px;
`
export const Image=styled.img`
    width: 100%;
`
export const Title = styled.p`
    color: #1ca35e;
    font-size: 2rem;
    padding-left: 2rem;
    text-transform: capitalize;
` 
export const Sales = styled.p`
    color: #919191;
    font-size: 1.5rem;
    padding-right: 2rem;
    text-transform: capitalize;
` 