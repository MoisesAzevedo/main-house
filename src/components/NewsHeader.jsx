import React, { useState, useEffect } from "react";
import {
  Container,
  Icon,
  Category,
  Wrapper,
  NoStyledElement
} from "./NewsHeaderStyled";
import favicon from "../assets/img/favicon.ico";

let category = localStorage.getItem("category");
//string que vai recebero valor da categoria
let categoryNotDefined = "";

var categories = [
  "all",
  "technology",
  "programming",
  "science",
  "finance",
  "art",
  "gadgets"
];
var categoriesSelector = [
  "Noticias Divesas",
  "Tecnologia",
  "Programação",
  "Ciência",
  "Dinheiro",
  "Artes",
  "Gadgets"
];

//Selector of category
var categoryJSX = [];

//add selectors
for (let i in categories) {
  console.log("Categories");
  console.log(categories[i]);

  categoryJSX.push(
    <Category
      onClick={() => {
        category = categories[i];

        localStorage.setItem("category", JSON.stringify(category));
        window.location.reload(true);
      }}
    >
      {categoriesSelector[i]}
    </Category>
  );
}

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

        {categoryJSX}
      </Container>
    </Wrapper>
  );
};

export default NewsHeader;
