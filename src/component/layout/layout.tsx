// component/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import {  Container, Grid } from "@mui/material";

export default function Layout() {
  return (
    <Grid container sx={{ minWidth: "80vw", overflowX: "auto" }} className="bg-[#f0f7ff]">
      <Grid size={{ xs: 2, md: 2, lg: 2 }}>
        <Sidebar />
      </Grid>
      <Grid size={{ xs: 10, md: 10, lg: 10 }} className="min-h-[100vh] !py-[5rem] bg-[#f0f7ff]">
        <Container disableGutters>
          <div className="px-4 md:px-6">
            <Outlet />
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}
