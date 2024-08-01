import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await import("../data.json");
        setData(jsonData.default);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred while fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ loading, setLoading, data }}>
      {children}
    </DataContext.Provider>
  );
}
function useData() {
  const context = useContext(DataContext);
  return context;
}

export { DataProvider, useData };
