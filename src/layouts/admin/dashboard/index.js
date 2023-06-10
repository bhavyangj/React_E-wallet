// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";

import Transactions from "layouts/client/billing/components/Transactions";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import { Icon } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import gradientLineChartData from "./data/gradientLineChartData";
import typography from "assets/theme/base/typography";
import ByCountry from "./components/ByCountry";

function AdminDashboard() {
  const { size } = typography;
  // const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Users" }}
                count="930"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "dark", component: "person" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "New Users" }}
                count="744"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "dark", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Sessions" }}
                count="1,414"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "dark", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Pages/Session" }}
                count="1.76"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "dark", component: "image" }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <SoftBox mb={0}>
                <GradientLineChart
                  title="Traffic channels"
                  description={
                    <SoftBox display="flex" alignItems="center">
                      <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon className="font-bold">arrow_upward</Icon>
                      </SoftBox>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                        4% more
                        <SoftTypography variant="button" color="text" fontWeight="regular">
                          in 2021
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  }
                  height="20.25rem"
                  chart={gradientLineChartData}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <ByCountry />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Transactions />
    </DashboardLayout>
  );
}

export default AdminDashboard;
