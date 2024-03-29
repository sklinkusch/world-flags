/** @jsxImportSource theme-ui */
import { useState } from "react"
import Flag from "react-world-flags";
import flags from "../data/flags";

function App() {
  // const [region, setRegion] = useState(localStorage.getItem('region') ||
  // 'null')
  const [region, setRegion] = useState('null')
  const allRegionsRaw = flags.filter(flag => flag.hasOwnProperty("region") && flag.region != null).reduce((acc, curr) => {
    const arr = acc.concat(curr.region)
    return arr
  }, [])
  const allRegionsSet = new Set(allRegionsRaw)
  const allSetRegions = Array.from(allRegionsSet).sort((a, b) => {
    const aName = a.toLowerCase()
    const bName = b.toLowerCase()
    if (aName < bName) {
      return -1
    } else if (bName < aName) {
      return +1
    } 
    return 0
  })
  const allRegions = [ 'null', ...allSetRegions ]
  const selectedFlags = region !== 'null' && region != null ? flags.filter(flag => flag.region && flag.region.includes(region)) : flags
  const sortedFlags = selectedFlags.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
  const handleRegionChange = (e) => {
    const selectedValue = e.target.value
    if (selectedValue !== region) {
      setRegion(selectedValue)
      // localStorage.setItem('region', selectedValue)
    }
  }
  return (
    <div className="App" sx={{ textAlign: "center" }}>
      <header 
        className="App-header" 
        sx={{ 
          maxHeight: "100vh",
          backgroundColor: "#bbbbbb", // #282c34
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          color: "#111111", 
          fontSize: "calc(10px + 2vmin)"
        }}
      >
        <div sx={{ textAlign: "center", width: "100%", py: "20px", boxShadow: "0 10px 5px #999999" }}>
          <select onChange={handleRegionChange} sx={{ height: "30px", width: "250px", fontSize: "14px" }} value={region}>
            {allRegions.map((regionOpt, index) => <option key={index} value={regionOpt}>{regionOpt !== "null" ? regionOpt : "all"}</option>)}
          </select>
        </div>
        <div sx={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-around", 
          alignItems: "center", 
          flexWrap: "wrap" ,
          height: "calc(100vh - 70px)",
          overflowY: "auto",
          padding: "20px 30px"
        }}>
          {sortedFlags.map(flag => (<div key={flag.code} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Flag code={flag.code} sx={{height: "45px", maxWidth: "100px", mx: "8px", my: "12px"}} title={flag.name} />
            <p sx={{ fontSize: "12px", textAlign: "center", maxWidth: "90px", px: "5px"}}>{flag.name}</p>
            </div>))}
        </div>
      </header>
    </div>
  );
}

export default App;
