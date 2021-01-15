import React from 'react'
import styled from "styled-components"


const Container = styled.div`
    margin-top:5rem;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    grid-auto-rows:300px;
    grid-gap:1rem;
`
const ImgWrap= styled.div`
       & img{
           width:100%;
           height: 100%;
           object-fit:cover;
       }
        
`

const UnsplashImages = ({images}) => {
    return (
        <>
        <div className="container-fluid">

        <Container>
        {
            images.map((item,index)=>(
                <ImgWrap key={index}>
                <img src={item.webformatURL} alt="images" className="img-fluid" style={{width:"100%"}}/>  
                </ImgWrap>
                ))} 
                
                </Container>
        </div>
        </>
    )
}

export default UnsplashImages
