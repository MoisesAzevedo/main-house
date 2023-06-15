import React, { useState, useEffect } from "react";
import { Container, Icon, Category, Wrapper } from "./NewsHeaderStyled";
import favicon from "../assets/img/favicon.ico";

let category = localStorage.getItem("category");
//string que vai recebero valor da categoria
let categoryNotDefined = "";

if (category != null) {
  categoryNotDefined = JSON.parse(category);
} else {
  categoryNotDefined = "";
}

//string que vai exportar valor pego no localStorage
export let categoryParse = categoryNotDefined;

const NewsHeader = () => {
  return (
    <Wrapper>
      <Container>
        <Icon src={favicon}></Icon>
        <Category
          onClick={() => {
            category = "general";
            console.log(category);

            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Noticias Diversas
        </Category>

        <p> •</p>

        <Category
          onClick={() => {
            category = "technology";
            console.log(category);

            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Technologia
        </Category>

        <p> •</p>

        <Category
          onClick={() => {
            category = "programming";
            console.log(category);
            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Programação
        </Category>

        <p> •</p>

        <Category
          onClick={() => {
            category = "science";
            console.log(category);
            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Ciencia
        </Category>

        <p> •</p>

        <Category
          onClick={() => {
            category = "finance";
            console.log(category);
            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Dinheiro
        </Category>

        <p> •</p>

        <Category
          onClick={() => {
            category = "art";
            console.log(category);
            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Artes
        </Category>

        <p> •</p>

        <Category
          onClick={() => {
            category = "gadgets";
            console.log(category);
            localStorage.setItem("category", JSON.stringify(category));
          }}
        >
          Gadgets
        </Category>
      </Container>
    </Wrapper>
  );
};

export default NewsHeader;
