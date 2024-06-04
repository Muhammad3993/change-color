// Router dom
import { BrowserRouter } from "react-router-dom";
// Context
import Context from "./context/Context";
// Routes
import MainRoute from "./routes/MainRoute";

function App() {



  const contextValue = {
    
  };
  return (
    <div className='every_site' id="every_site">
      <Context.Provider value={contextValue}>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
