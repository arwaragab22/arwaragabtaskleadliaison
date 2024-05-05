import React, { useState, useEffect } from "react";
import axios from "axios";



import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NavBar from "./Components/Nav";
function App() {
  const [categories, setCategories] = useState<string[]>([]);
  /**  */
  const [selectedCategory, setSelectedCategory] =
    useState<string>("electronics");

  useEffect(() => {
    /**api get all   cateogry  */
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));

    /**api get all products  */
  
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: {
              xs: 0,
              md: 4,
            },
            width: "100%",

            margin: "auto", // Center horizontally and vertically
          }}
        >
          <NavBar
            categories={categories}
            onSelectcategory={handleCategorySelect}
          />
    
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
