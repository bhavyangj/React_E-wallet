// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";

import ReportCard from "./components/ReportCard";
import AllUsers from "./components/AllUsers";

function AdminReports() {
  // const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={6}>
              <ReportCard
                bgColor="dark"
                count={{ text: "+55%", fontWeight: "bold" }}
                subTitle={{ text: "Users Active", fontWeight: "lighter" }}
                title={{ text: "1600", fontWeight: "bold" }}
                icon={{ color: "dark", component: "person" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ReportCard
                bgColor="dark"
                count={{ text: "+124%", fontWeight: "bold" }}
                subTitle={{ text: "Transactions", fontWeight: "lighter" }}
                title={{ text: "357", fontWeight: "bold" }}
                icon={{ color: "dark", component: "person" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ReportCard
                bgColor="dark"
                count={{ text: "+15%", fontWeight: "bold" }}
                subTitle={{ text: "Purchases", fontWeight: "lighter" }}
                title={{ text: "2300", fontWeight: "bold" }}
                icon={{ color: "dark", component: "person" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <ReportCard
                bgColor="dark"
                count={{ text: "+90%", fontWeight: "bold" }}
                subTitle={{ text: "Likes", fontWeight: "lighter" }}
                title={{ text: "940", fontWeight: "bold" }}
                icon={{ color: "dark", component: "person" }}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <AllUsers />
      {/*  another table */}
    </DashboardLayout>
  );
}

export default AdminReports;
