import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const { filters, handleFilterChange, resetFilters } = useFilters();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filters-content"
        id="filters-header"
      >
        <Typography variant="h6">Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
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
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button variant="contained" color="primary" onClick={resetFilters}>
              Reset Filters
            </Button>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default React.memo(Filters);
