import styled from "styled-components";
import React from 'react';

const StylizedProducts = () => {
    return <div>...</div>
}

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledCards = styled.div`
  width: 20%;
  min-height: 500px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: "Roboto", sans-serif;
  background-color: #efefef;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.015);
    transition: all 0.5s ease;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  mix-blend-mode: multiply;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #008000;
  margin-top: 10px;
`;

const Rating = styled.div`
  margin-top: 10px;
  font-size: 14px;
  span {
    color: #ffc107;
  }
`;

const Category = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

export {StyledProducts, StyledCards, Image, Title, Description, Price, Rating, Category};
export default StylizedProducts;