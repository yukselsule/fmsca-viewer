import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

const initialFilters = {
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
};

function FiltersProvider({ children }) {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, handleFilterChange, resetFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

function useFilters() {
  const context = useContext(FiltersContext);
  return context;
}

export { FiltersProvider, useFilters };
