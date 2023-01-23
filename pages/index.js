/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import truncate from "truncate-html";
import {
  StyledProducts,
  StyledCards,
  Image,
  Title,
  Description,
  Price,
  Rating,
  Category,
} from "./StylizedProducts";
import Header from "../components/header.js";
import styled from "styled-components";

const dollarPriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Products() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  const renderSearchResults = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const StyledBG = styled.div`
    background-image: linear-gradient(to right, #00cc99, #006699);
    width: 100%;
    min-height: 1080px;
  `;

  return (
    <>
      <StyledBG>
        <Header data={data} renderResults={renderSearchResults} />
        <StyledProducts>
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <StyledCards key={item.id}>
                <Title>{truncate(item.title, 25)}</Title>
                <Image src={item.image} />
                <Description>{truncate(item.description, 100)}</Description>
                <Price>{dollarPriceFormatter.format(item.price)}</Price>
                <Rating>
                  <span role="img" aria-label="rating">
                    ⭐
                  </span>
                  {item.rating.rate}
                </Rating>
                <Category>{item.category}</Category>
              </StyledCards>
            ))
          ) : (
            <StyledCards>
              No results found. Please try again or or wait a few seconds, the
              API response can sometimes take a while. In the meantime you can
              visit my github to see more projects:{" "}
              <a href="https://github.com/icastelito">
                https://github.com/icastelito{" "}
              </a>
              .
            </StyledCards>
          )}
        </StyledProducts>
      </StyledBG>
    </>
  );
}

export default Products;
