import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`;

const StyledH1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 355px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  width: 125px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 255px;
  height: 255px;
`;

const Header = ({ data, renderResults }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    renderResults(filteredData);
    setSearchValue("");
  };

  return (
    <>
      <StyledHeader>
        <StyledImg src="https://uploaddeimagens.com.br/images/004/309/727/original/Castelo_Create_a_logo_for_a_Brazilian_retail_store_using_the_co_01520fdf-dce1-4bca-be81-023be5c9e404.png?1674505199" />
        <StyledDiv>
        <StyledH1> BRAZUKA ATACAREJO </StyledH1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="search"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search"
          />
          <StyledButton>Search</StyledButton>
        </StyledForm>
        </StyledDiv>
      </StyledHeader>
    </>
  );
};

export default Header;
