import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { ProductItemProps } from "../Types/app";

function ProductItem({ product }: ProductItemProps) {
  return (
      <h1>{product.id}</h1>
  );
}

export default ProductItem;
