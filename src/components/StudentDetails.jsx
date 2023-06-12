import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

function StudentDetails({ data }) {
  const student = data[0];

  return (
    <TableContainer component={Paper} className="mt-3 p-2">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <div className="flex items-center py-3">
            <Typography variant="" className="font-semibold text-3xl px-2">
              Student&apos;s Details
            </Typography>
            <Button variant="outlined" size="small" startIcon={<PrintIcon />}>
              Print
            </Button>
            </div>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>
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

          <TableRow>
            <TableCell colSpan={2}>
              <b>Single Window Number: </b>
              {student.SingleWindowNo}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Date of Birth: </b>
              {student.DateOfBirth}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>Gender: </b>
              {student.Gender}
            </TableCell>
            <TableCell>
              <b>Religion: </b>
              {student.Religion}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>Register Number: </b>
              {student.RegNumber}
            </TableCell>
            <TableCell>
              <b>Year: </b>
              {student.Year}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Board of Examination: </b>
              {student.Board}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>School Name: </b>
              {student.SchoolName}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Father Name: </b>
              {student.FatherName}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Mother Name: </b>
              {student.MotherName}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>House Name: </b>
              {student.HouseName}
            </TableCell>
            <TableCell>
              <b>Post Office: </b>
              {student.PostOffice}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>Panchayath: </b>
              {student.Panchayath}
            </TableCell>
            <TableCell>
              <b>Ward: </b>
              {student.Ward}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {student.Board === "Other" || student.Board === "STATE" ? (
        <Table
          sx={{
            marginTop: "40px",
            borderTop: "1px solid #d8dceb",
            borderBottom: "1px solid #d8dceb",
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#d8dceb",
                  borderColor: "#b6b8bf",
                  border: "1px solid #b6b8bf",
                }}
                width="5%"
              >
                <b>Subject</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Lang 1</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Lang 2</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>English</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Hindi</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>SS</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Physics</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Chemistry</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Biology</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>Maths</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="9%">
                <b>IT</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#d8dceb",
                  borderColor: "#b6b8bf",
                  border: "1px solid #b6b8bf",
                }}
              >
                <b>Grade</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Language1}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Language2}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.English}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Hindi}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.SocialScience}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Physics}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Chemistry}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Biology}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.Maths}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {student.IT}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : student.Board === "CBSE" ? (
        <Table
          sx={{
            marginTop: "40px",
            borderTop: "1px solid #d8dceb",
            borderBottom: "1px solid #d8dceb",
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#d8dceb",
                  borderColor: "#b6b8bf",
                  border: "1px solid #b6b8bf",
                }}
                width="10%"
              >
                <b>Subject</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="15%">
                <b>Language</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="15%">
                <b>English</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="15%">
                <b>Maths</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="15%">
                <b>SS</b>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }} width="15%">
                <b>Science</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#d8dceb",
                  borderColor: "#b6b8bf",
                  border: "1px solid #b6b8bf",
                }}
                width="200px"
              >
                <b>Grade</b>
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {student.Language2}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {student.English}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {student.Maths}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {student.SocialScience}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {student.Science}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : null}

      <Table
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          borderTop: "1px solid #b6b8bf",
          borderBottom: "1px solid #d8dceb",
        }}
      >
        <TableBody>
          <TableRow sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}>
            <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
              <b>Preference</b>
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
              <b>Course</b>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <b>1</b>
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              {student.coursePreference1}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <b>2</b>
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              {student.coursePreference2}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentDetails;
