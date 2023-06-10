// Soft UI Dashboard React examples
import SoftBox from "components/SoftBox";
import { Card } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import Table from "examples/Tables/Table";
import { Delete, Person } from "@mui/icons-material";
import usersTableData from "./usersTableData";

function AllUsers() {
  const { columns, rows } = usersTableData;

  function Actions() {
    return (
      <SoftBox display="flex" gap={2}>
        <SoftBox onClick={() => {}}>
          <Person />
        </SoftBox>
        <SoftBox onClick={() => {}}>
          <Delete />
        </SoftBox>
      </SoftBox>
    );
  }

  return (
    <SoftBox mb={3}>
      <Card>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <SoftTypography variant="h6">All Users</SoftTypography>
        </SoftBox>
        <SoftBox
          sx={{
            "& .MuiTableRow-root:not(:last-child)": {
              "& td": {
                borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              },
            },
          }}
        >
          <Table columns={columns} rows={rows.map((item) => ({ ...item, action: <Actions /> }))} />
        </SoftBox>
      </Card>
    </SoftBox>
  );
}

export default AllUsers;
