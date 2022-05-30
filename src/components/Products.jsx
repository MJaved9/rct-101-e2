import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
// import axios from "axios";
import AddProduct from "./AddProduct";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
       <AddProduct/> 
      {/*  AddProduct */}
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;