import React from "react";
import DataTable from "./DataTable";
import Filters from "./Filters";
import Header from "./Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function AppLayout() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Box component="main" sx={{ mt: 2 }}>
          <Filters />
          <DataTable />
        </Box>
      </Container>
    </div>
  );
}

export default AppLayout;
