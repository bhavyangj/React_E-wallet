// Soft UI Dashboard React examples
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function OpenTickets() {
  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <Card>
          <SoftBox p={3} mb={3}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <SoftTypography variant="h5">New Ticket</SoftTypography>
            </SoftBox>
            <div className="card-body pt-0">
              <div className="row">
                <div className="form-group col-4">
                  <label for="exampleFormControlSelect1">Subject</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Select option</option>
                    <option>Money not arrived to receptiant</option>
                    <option>Top Up failed</option>
                    <option>Didn't receive my money</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Explain issue</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <SoftButton color="primary">Submit</SoftButton>
            </div>
          </SoftBox>
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default OpenTickets;
