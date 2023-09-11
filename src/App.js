// import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route} from "react-router-dom";
import Topbar from "./Scenes/global/Topbar.jsx"
import Sidebar from "./Scenes/global/Sidebar";
import Dashboard from "./Scenes/dashboard";
import Team from "./Scenes/team";
import Contact from "./Scenes/contact";
import Invoices from "./Scenes/invoices";
import Form from "./Scenes/form";
import Calendar from "./Scenes/Calendar";
import FAQ from "./Scenes/faq";
import Bar from "./Scenes/bar";
import Line from "./Scenes/line";
import Pie from "./Scenes/pie";
import Geography from "./Scenes/geography";

function App() {

  const [theme,colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} ></Sidebar> 
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}></Topbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
