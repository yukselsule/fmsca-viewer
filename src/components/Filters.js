import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import { useFilters } from "../contexts/FilterContext";

const labelMapping = {
  created_dt: "Created Date",
  data_source_modified_dt: "Modified Date",
  entity_type: "Entity Type",
  operating_status: "Operating Status",
  legal_name: "Legal Name",
  dba_name: "DBA Name",
  physical_address: "Physical Address",
  phone: "Phone",
  usdot_number: "USDOT Number",
  mc_mx_ff_number: "MC/MX/FF Number",
  power_units: "Power Units",
  out_of_service_date: "Out of Service Date",
};

function Filters() {
  const { filters, handleFilterChange } = useFilters();

  return (
    <Box
      className="filters"
      sx={{
        backgroundColor: "white",
        padding: 2,
        borderRadius: 2,
        boxShadow: 1,
        marginBottom: 3,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#090909", fontSize: "0.7rem" }}
      >
        Filters
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 2,
        }}
      >
        {Object.keys(filters).map((key) => (
          <TextField
            key={key}
            name={key}
            label={labelMapping[key] || key.replace(/_/g, " ")}
            value={filters[key]}
            onChange={handleFilterChange}
            variant="outlined"
            size="small"
            InputLabelProps={{ style: { fontSize: "0.7rem" } }}
            inputProps={{ style: { fontSize: "0.7rem" } }}
            sx={{ minWidth: { xs: "100%", sm: 200 }, flexGrow: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default React.memo(Filters);
