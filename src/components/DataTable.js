import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useFilters } from "../contexts/FilterContext";
import { useData } from "../contexts/DataContext";

function DataTable() {
  const { filters } = useFilters();
  const { data, loading, setLoading } = useData();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const newFilteredData = data.filter((row) =>
        Object.keys(filters).every((key) => {
          if (!filters[key]) return true;
          return row[key]
            ?.toString()
            .toLowerCase()
            .includes(filters[key].toLowerCase());
        })
      );
      setFilteredData(newFilteredData);
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [filters, data, loading]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setLoading(true);
    setTimeout(() => {
      const start = newPage * rowsPerPage;
      const end = start + rowsPerPage;
      setFilteredData(data.slice(start, end));
      setLoading(false);
    }, 500);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#99c9e6" }}>
            <TableRow>
              <TableCell sx={{ width: "10%" }}>Created Date</TableCell>
              <TableCell sx={{ width: "10%" }}>Modified Date</TableCell>
              <TableCell sx={{ width: "10%" }}>Entity</TableCell>
              <TableCell sx={{ width: "10%" }}>Operating Status</TableCell>
              <TableCell sx={{ width: "10%" }}>Legal Name</TableCell>
              <TableCell sx={{ width: "10%" }}>DBA Name</TableCell>
              <TableCell sx={{ width: "10%" }}>Physical Address</TableCell>
              <TableCell sx={{ width: "10%" }}>Phone</TableCell>
              <TableCell sx={{ width: "10%" }}>USDOT</TableCell>
              <TableCell sx={{ width: "10%" }}>MC/MX/FF Number</TableCell>
              <TableCell sx={{ width: "5%" }}>Power Units</TableCell>
              <TableCell sx={{ width: "10%" }}>Out of Service Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "400px",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            ) : filteredData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "400px",
                    }}
                  >
                    <Typography variant="h6">
                      There are no results for your filters.
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#e0e0e0",
                    }}
                  >
                    <TableCell sx={{ width: "10%" }}>
                      {row.created_dt}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.data_source_modified_dt}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.entity_type}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.operating_status}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.legal_name}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>{row.dba_name}</TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.physical_address}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>{row.phone}</TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.usdot_number}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.mc_mx_ff_number}
                    </TableCell>
                    <TableCell sx={{ width: "5%" }}>
                      {row.power_units}
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      {row.out_of_service_date}
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}

export default DataTable;
