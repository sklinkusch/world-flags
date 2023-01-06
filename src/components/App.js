/** @jsxImportSource theme-ui */
import Flag from "react-world-flags";
import flags from "../data/flags";

function App() {
  const sortedFlags = flags.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
  return (
    <div className="App" sx={{ textAlign: "center" }}>
      <header 
        className="App-header" 
        sx={{ 
          backgroundColor: "#282c34", 
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          color: "white", 
          fontSize: "calc(10px + 2vmin)"
        }}
      >
        <div sx={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-around", 
          alignItems: "center", 
          flexWrap: "wrap" 
        }}>
          {sortedFlags.map(flag => (<div sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Flag code={flag.code} sx={{height: "45px", maxWidth: "100px", mx: "8px", my: "12px"}} title={flag.name} />
            <p sx={{ fontSize: "12px", textAlign: "center", maxWidth: "90px"}}>{flag.name}</p>
            </div>))}
        </div>
      </header>
    </div>
  );
}

export default App;
