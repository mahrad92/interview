import * as React from "react";
import { ResponsiveAppBar } from "./components/AppBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Grid } from "@mui/material";
import { UsedMaterialListPage } from "./pages/UsedMaterialListPage";
import { UsedMAterialInsertPage } from "./pages/UsedMaterialInsertPage";

function App() {
  return (

    <BrowserRouter>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12}  >
          <ResponsiveAppBar />
        </Grid>
        <Grid item xs={4} sm={8} md={12}  >
          <Routes>
            <Route exact path="/list" element={<UsedMaterialListPage />} />
            <Route exact path="/add" element={<UsedMAterialInsertPage />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
