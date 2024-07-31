// // // // import {
// // // //   Table,
// // // //   TableBody,
// // // //   TableCell,
// // // //   TableContainer,
// // // //   TableHead,
// // // //   TableRow,
// // // //   Paper,
// // // // } from "@mui/material";

// // // // import data from "./veri.json";

// // // // const dataLess = [data[0], data[1], data[2], data[3], data[4]];

// // // // console.log(dataLess);

// // // // function TableComponent() {
// // // //   return (
// // // //     <TableContainer component={Paper}>
// // // //       <Table>
// // // //         <TableHead>
// // // //           <TableRow>
// // // //             <TableCell>Created Date</TableCell>
// // // //             <TableCell>Modified Date</TableCell>
// // // //             <TableCell>Entity</TableCell>
// // // //             <TableCell>Operating Status</TableCell>
// // // //             <TableCell>Legal Name</TableCell>
// // // //             <TableCell>DBA Name</TableCell>
// // // //             <TableCell>Physical Address</TableCell>
// // // //             <TableCell>Phone</TableCell>
// // // //             <TableCell>USDOT</TableCell>
// // // //             <TableCell>MC/MX/FF Number</TableCell>
// // // //             <TableCell>Power Units</TableCell>
// // // //             <TableCell>Out of Service Date</TableCell>
// // // //           </TableRow>
// // // //         </TableHead>
// // // //         <TableBody>
// // // //           {dataLess.map((row, index) => (
// // // //             <TableRow key={index}>
// // // //               <TableCell>{row.created_dt}</TableCell>
// // // //               <TableCell>{row.data_source_modified_dt}</TableCell>
// // // //               <TableCell>{row.entity_type}</TableCell>
// // // //               <TableCell>{row.operating_status}</TableCell>
// // // //               <TableCell>{row.legal_name}</TableCell>
// // // //               <TableCell>{row.dba_name}</TableCell>
// // // //               <TableCell>{row.physical_address}</TableCell>
// // // //               <TableCell>{row.phone}</TableCell>
// // // //               <TableCell>{row.usdot_number}</TableCell>
// // // //               <TableCell>{row.mc_mx_ff_number}</TableCell>
// // // //               <TableCell>{row.power_units}</TableCell>
// // // //               <TableCell>{row.out_of_service_date}</TableCell>
// // // //             </TableRow>
// // // //           ))}
// // // //         </TableBody>
// // // //       </Table>
// // // //     </TableContainer>
// // // //   );
// // // // }

// // // // export default TableComponent;

// // // import { useState } from "react";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Paper,
// // //   TablePagination,
// // // } from "@mui/material";
// // // import data from "./veri.json";

// // // function TableComponent() {
// // //   const [page, setPage] = useState(0);
// // //   const [rowsPerPage, setRowsPerPage] = useState(20);

// // //   // Sayfa başına gösterilecek veri dilimlemesi
// // //   const handleChangePage = (event, newPage) => {
// // //     setPage(newPage);
// // //   };

// // //   const handleChangeRowsPerPage = (event) => {
// // //     setRowsPerPage(parseInt(event.target.value, 10));
// // //     setPage(0);
// // //   };

// // //   return (
// // //     <TableContainer component={Paper}>
// // //       <Table>
// // //         <TableHead>
// // //           <TableRow>
// // //             <TableCell>Created Date</TableCell>
// // //             <TableCell>Modified Date</TableCell>
// // //             <TableCell>Entity</TableCell>
// // //             <TableCell>Operating Status</TableCell>
// // //             <TableCell>Legal Name</TableCell>
// // //             <TableCell>DBA Name</TableCell>
// // //             <TableCell>Physical Address</TableCell>
// // //             <TableCell>Phone</TableCell>
// // //             <TableCell>USDOT</TableCell>
// // //             <TableCell>MC/MX/FF Number</TableCell>
// // //             <TableCell>Power Units</TableCell>
// // //             <TableCell>Out of Service Date</TableCell>
// // //           </TableRow>
// // //         </TableHead>
// // //         <TableBody>
// // //           {data
// // //             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// // //             .map((row, index) => (
// // //               <TableRow key={index}>
// // //                 <TableCell>{row.created_dt}</TableCell>
// // //                 <TableCell>{row.data_source_modified_dt}</TableCell>
// // //                 <TableCell>{row.entity_type}</TableCell>
// // //                 <TableCell>{row.operating_status}</TableCell>
// // //                 <TableCell>{row.legal_name}</TableCell>
// // //                 <TableCell>{row.dba_name}</TableCell>
// // //                 <TableCell>{row.physical_address}</TableCell>
// // //                 <TableCell>{row.phone}</TableCell>
// // //                 <TableCell>{row.usdot_number}</TableCell>
// // //                 <TableCell>{row.mc_mx_ff_number}</TableCell>
// // //                 <TableCell>{row.power_units}</TableCell>
// // //                 <TableCell>{row.out_of_service_date}</TableCell>
// // //               </TableRow>
// // //             ))}
// // //         </TableBody>
// // //       </Table>
// // //       <TablePagination
// // //         rowsPerPageOptions={[10, 20, 50]}
// // //         component="div"
// // //         count={data.length}
// // //         rowsPerPage={rowsPerPage}
// // //         page={page}
// // //         onPageChange={handleChangePage}
// // //         onRowsPerPageChange={handleChangeRowsPerPage}
// // //       />
// // //     </TableContainer>
// // //   );
// // // }

// // // export default TableComponent;

// // import React, { useState } from "react";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   TablePagination,
// //   TextField,
// //   Select,
// //   MenuItem,
// //   FormControl,
// //   InputLabel,
// // } from "@mui/material";
// // import data from "./veri.json";

// // function TableComponent() {
// //   const [page, setPage] = useState(0);
// //   const [rowsPerPage, setRowsPerPage] = useState(20);
// //   const [filters, setFilters] = useState({
// //     entity_type: "",
// //     legal_name: "",
// //     dba_name: "",
// //     phone: "",
// //   });

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const handleFilterChange = (event) => {
// //     const { name, value } = event.target;
// //     setFilters({
// //       ...filters,
// //       [name]: value,
// //     });
// //   };

// //   const filteredData = data.filter((item) => {
// //     return (
// //       (filters.entity_type
// //         ? item.entity_type.includes(filters.entity_type)
// //         : true) &&
// //       (filters.legal_name
// //         ? String(item.legal_name).includes(filters.legal_name)
// //         : true) &&
// //       (filters.dba_name
// //         ? String(item.dba_name).includes(filters.dba_name)
// //         : true) &&
// //       (filters.phone ? String(item.phone).includes(filters.phone) : true)
// //     );
// //   });

// //   return (
// //     <Paper>
// //       <div style={{ padding: 16 }}>
// //         <FormControl style={{ margin: 8, minWidth: 120 }}>
// //           <InputLabel>Entity Type</InputLabel>
// //           <Select
// //             name="entity_type"
// //             value={filters.entity_type}
// //             onChange={handleFilterChange}
// //           >
// //             <MenuItem value="">
// //               <em>None</em>
// //             </MenuItem>
// //             <MenuItem value="CARRIER">CARRIER</MenuItem>
// //             <MenuItem value="BROKER">BROKER</MenuItem>
// //             {/* Diğer entity type değerleri buraya eklenebilir */}
// //           </Select>
// //         </FormControl>
// //         <TextField
// //           style={{ margin: 8 }}
// //           label="Legal Name"
// //           name="legal_name"
// //           value={filters.legal_name}
// //           onChange={handleFilterChange}
// //         />
// //         <TextField
// //           style={{ margin: 8 }}
// //           label="DBA Name"
// //           name="dba_name"
// //           value={filters.dba_name}
// //           onChange={handleFilterChange}
// //         />
// //         <TextField
// //           style={{ margin: 8 }}
// //           label="Phone"
// //           name="phone"
// //           value={filters.phone}
// //           onChange={handleFilterChange}
// //         />
// //       </div>
// //       <TableContainer>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Created Date</TableCell>
// //               <TableCell>Modified Date</TableCell>
// //               <TableCell>Entity</TableCell>
// //               <TableCell>Operating Status</TableCell>
// //               <TableCell>Legal Name</TableCell>
// //               <TableCell>DBA Name</TableCell>
// //               <TableCell>Physical Address</TableCell>
// //               <TableCell>Phone</TableCell>
// //               <TableCell>USDOT</TableCell>
// //               <TableCell>MC/MX/FF Number</TableCell>
// //               <TableCell>Power Units</TableCell>
// //               <TableCell>Out of Service Date</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {filteredData
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row, index) => (
// //                 <TableRow key={index}>
// //                   <TableCell>{row.created_dt}</TableCell>
// //                   <TableCell>{row.data_source_modified_dt}</TableCell>
// //                   <TableCell>{row.entity_type}</TableCell>
// //                   <TableCell>{row.operating_status}</TableCell>
// //                   <TableCell>{row.legal_name}</TableCell>
// //                   <TableCell>{row.dba_name}</TableCell>
// //                   <TableCell>{row.physical_address}</TableCell>
// //                   <TableCell>{row.phone}</TableCell>
// //                   <TableCell>{row.usdot_number}</TableCell>
// //                   <TableCell>{row.mc_mx_ff_number}</TableCell>
// //                   <TableCell>{row.power_units}</TableCell>
// //                   <TableCell>{row.out_of_service_date}</TableCell>
// //                 </TableRow>
// //               ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 20, 50]}
// //         component="div"
// //         count={filteredData.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }

// // export default TableComponent;

// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
//   TextField,
//   Box,
//   Typography,
// } from "@mui/material";
// import data from "./veri.json";

// const thomas = data.filter((item) => item.legal_name === "THOMAS WALDRUM");
// console.log(thomas);

// function TableComponent() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(20);
//   const [filters, setFilters] = useState({
//     created_dt: "",
//     data_source_modified_dt: "",
//     entity_type: "",
//     operating_status: "",
//     legal_name: "",
//     dba_name: "",
//     physical_address: "",
//     phone: "",
//     usdot_number: "",
//     mc_mx_ff_number: "",
//     power_units: "",
//     out_of_service_date: "",
//   });

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleFilterChange = (event) => {
//     setFilters({
//       ...filters,
//       [event.target.name]: event.target.value,
//     });
//     setPage(0);
//   };

//   const filteredData = data.filter((row) =>
//     Object.keys(filters).every((key) =>
//       row[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
//     )
//   );

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Filtreleme Seçenekleri
//       </Typography>
//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginBottom: 2 }}>
//         {Object.keys(filters).map((key) => (
//           <TextField
//             key={key}
//             name={key}
//             label={key.replace(/_/g, " ")}
//             value={filters[key]}
//             onChange={handleFilterChange}
//             variant="outlined"
//             size="small"
//             sx={{ minWidth: 200 }}
//           />
//         ))}
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Created Date</TableCell>
//               <TableCell>Modified Date</TableCell>
//               <TableCell>Entity</TableCell>
//               <TableCell>Operating Status</TableCell>
//               <TableCell>Legal Name</TableCell>
//               <TableCell>DBA Name</TableCell>
//               <TableCell>Physical Address</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>USDOT</TableCell>
//               <TableCell>MC/MX/FF Number</TableCell>
//               <TableCell>Power Units</TableCell>
//               <TableCell>Out of Service Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.created_dt}</TableCell>
//                   <TableCell>{row.data_source_modified_dt}</TableCell>
//                   <TableCell>{row.entity_type}</TableCell>
//                   <TableCell>{row.operating_status}</TableCell>
//                   <TableCell>{row.legal_name}</TableCell>
//                   <TableCell>{row.dba_name}</TableCell>
//                   <TableCell>{row.physical_address}</TableCell>
//                   <TableCell>{row.phone}</TableCell>
//                   <TableCell>{row.usdot_number}</TableCell>
//                   <TableCell>{row.mc_mx_ff_number}</TableCell>
//                   <TableCell>{row.power_units}</TableCell>
//                   <TableCell>{row.out_of_service_date}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[10, 20, 50]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//     </Box>
//   );
// }

// export default TableComponent;

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import data from "./veri.json";

function TableComponent() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filters, setFilters] = useState({
    created_dt: "",
    data_source_modified_dt: "",
    entity_type: "",
    operating_status: "",
    legal_name: "",
    dba_name: "",
    physical_address: "",
    phone: "",
    usdot_number: "",
    mc_mx_ff_number: "",
    power_units: "",
    out_of_service_date: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    Object.keys(filters).every((key) => {
      if (!filters[key]) return true; // Filtre değeri boşsa tüm verileri göster
      return row[key]
        ?.toString()
        .toLowerCase()
        .includes(filters[key].toLowerCase());
    })
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginBottom: 2 }}>
        {Object.keys(filters).map((key) => (
          <TextField
            key={key}
            name={key}
            label={key.replace(/_/g, " ")}
            value={filters[key]}
            onChange={handleFilterChange}
            variant="outlined"
            size="small"
            sx={{ minWidth: 200 }}
          />
        ))}
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Created Date</TableCell>
              <TableCell>Modified Date</TableCell>
              <TableCell>Entity</TableCell>
              <TableCell>Operating Status</TableCell>
              <TableCell>Legal Name</TableCell>
              <TableCell>DBA Name</TableCell>
              <TableCell>Physical Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>USDOT</TableCell>
              <TableCell>MC/MX/FF Number</TableCell>
              <TableCell>Power Units</TableCell>
              <TableCell>Out of Service Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.created_dt}</TableCell>
                  <TableCell>{row.data_source_modified_dt}</TableCell>
                  <TableCell>{row.entity_type}</TableCell>
                  <TableCell>{row.operating_status}</TableCell>
                  <TableCell>{row.legal_name}</TableCell>
                  <TableCell>{row.dba_name}</TableCell>
                  <TableCell>{row.physical_address}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.usdot_number}</TableCell>
                  <TableCell>{row.mc_mx_ff_number}</TableCell>
                  <TableCell>{row.power_units}</TableCell>
                  <TableCell>{row.out_of_service_date}</TableCell>
                </TableRow>
              ))}
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

export default TableComponent;
