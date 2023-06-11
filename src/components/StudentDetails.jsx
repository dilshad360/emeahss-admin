import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

function StudentDetails({ data }) {

  const student = data[0];

  return (
    <TableContainer component={Paper} className="mt-3 p-2">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Typography variant="" className="font-semibold text-lg px-2">
              Student&apos;s Details
            </Typography>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <b>Name: </b>
              {student.Name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Mobile Number: </b>
              {student.MobileNumber}
            </TableCell>
            <TableCell>
              <b>Whatsapp Number: </b>
              {student.WhatsappNumber}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentDetails;
