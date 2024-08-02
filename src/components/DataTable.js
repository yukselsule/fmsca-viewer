import React, { useMemo, useState, useCallback, useEffect } from "react";
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

  const filteredData = useMemo(() => {
    if (loading) return [];
    return data.filter((row) =>
      Object.keys(filters).every((key) => {
        if (!filters[key]) return true;
        return row[key]
          ?.toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase());
      })
    );
  }, [filters, data, loading]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  const handleChangePage = useCallback(
    (event, newPage) => {
      setPage(newPage);
      setLoading(false);
    },
    [setLoading]
  );

  const handleChangeRowsPerPage = useCallback((event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#99c9e6" }}>
            <TableRow>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Created Date
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Modified Date
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Entity
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Operating Status
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Legal Name
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                DBA Name
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Physical Address
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Phone
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                USDOT
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                MC/MX/FF Number
              </TableCell>
              <TableCell sx={{ width: "5%", fontSize: "0.8rem" }}>
                Power Units
              </TableCell>
              <TableCell sx={{ width: "10%", fontSize: "0.8rem" }}>
                Out of Service Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
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
                    <Typography variant="h6" sx={{ fontSize: "0.8rem" }}>
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
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.created_dt}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.data_source_modified_dt}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.entity_type}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.operating_status}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.legal_name}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.dba_name}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.physical_address}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.phone}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.usdot_number}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
                      {row.mc_mx_ff_number}
                    </TableCell>
                    <TableCell sx={{ width: "5%", fontSize: "0.7rem" }}>
                      {row.power_units}
                    </TableCell>
                    <TableCell sx={{ width: "10%", fontSize: "0.7rem" }}>
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

export default React.memo(DataTable);
