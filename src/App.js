import { FiltersProvider } from "./contexts/FilterContext";
import { DataProvider } from "./contexts/DataContext";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <FiltersProvider>
          <AppLayout />
        </FiltersProvider>
      </DataProvider>
    </div>
  );
}

export default App;
