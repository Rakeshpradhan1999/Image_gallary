import React,{useState} from "react";
import styled from "styled-components";
import img from "../assets/bg.jpg";
import { RiSearch2Line } from "react-icons/ri";
const HeroSec = styled.section`
  width: 100%;
  /* height: 50vh; */
  padding:100px 0;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align:center;
  color:white;

  `;
const Form = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SearchBar = styled.input`
width:100%;
  border: none;
  padding: 1.2rem 1.5rem;
  font-size: 1rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    font-size:1.2rem;
    position:absolute;
    top:50%;
    right:5%;
    margin-right:10px;
    color:gray;
    transform:translate(0, -50%);
    &:focus{
        outline:none;
        
    }
`;
const InputWrapper = styled.div`
  position: relative;
`;

const Header= styled.h2`

`


const HeroSection = ({ setQuery, setImages}) => {
  const [value, setValue] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    setImages([]);
    setQuery(value);
    setValue("");

  };

  return (
    <HeroSec>
      <Header>Stunning free images & royalty free stock</Header>
      <p>
        Over 1.9 million+ high quality stock images, videos and music shared by
        our talented community.
      </p>
      <Form onSubmit={formHandler}>
        <InputWrapper className="col-12 col-sm-12 col-md-10 col-lg-7">
          <SearchBar
            placeholder="Search Images Here...."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit">
            <RiSearch2Line />
          </Button>
        </InputWrapper>
      </Form>
      <p>
        Popular Images: new year, background, nature, winter, love, money,
        business, food, flowers, fireworks, sky, snow
      </p>
    </HeroSec>
  );
};

export default HeroSection;
