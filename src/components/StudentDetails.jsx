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
import { useEffect } from "react";

function StudentDetails({ data, isManagement }) {
  const stateMarksToGrade = {
    '9':'A+',
    '8':'A',
    '7':'B+',
    '6':'B',
    '5':'C+',
    '4':'C',
    '3':'D+',
  }
  const cbseMarksToGrade = {
    '10':'A1',
    '9':'A2',
    '8':'B1',
    '7':'B2',
    '6':'C1',
    '5':'C2',
    '4':'D1',
    '3':'D2',
  }
  const student = data[0];
  useEffect(()=>{
    console.log(student.Board);
  })
  return (
    <TableContainer component={Paper} className="mt-3 p-2">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <div className="flex items-center py-3">
              <Typography variant="" className="font-semibold text-3xl px-2">
                Student&apos;s Details
              </Typography>
            </div>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <b>Name: </b>
              {student.Name}
            </TableCell>
            {student.Nominee && (
              <TableCell
                sx={{
                  color: "green",
                }}
              >
                <b>Nominee: </b>
                {student.Nominee}
              </TableCell>
            )}
            {student.Payment && (
              <TableCell
                sx={{
                  color: student.Payment === "PAID" ? "green" : "red",
                }}
              >
                <b>Payment: </b>
                {student.Payment}
              </TableCell>
            )}
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
                {stateMarksToGrade[student.Language1]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.Language2]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.English]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.Hindi]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.SocialScience]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.Physics]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.Chemistry]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.Biology]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.Maths]}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                {stateMarksToGrade[student.IT]}
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
                {cbseMarksToGrade[student.Language2]}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {cbseMarksToGrade[student.English]}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {cbseMarksToGrade[student.Maths]}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {cbseMarksToGrade[student.SocialScience]}
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                {cbseMarksToGrade[student.Science]}
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
      {!isManagement ? (
        <>
          <Table sx={{ marginTop: "20px" }}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <b>
                    Whether the applicant is eligible for bonus points under the
                    following category :
                  </b>
                  {student.ExtraCurricular}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "18px" }}>
                  <b>Participation in Sports</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>
                    State Level Participation(Number of items participated) :
                  </b>
                  {student.SportsStateLevel}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>District Level</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table sx={{ marginBottom: "20px" }}>
            <TableBody>
              <TableRow
                sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
              >
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>A Grade</b>
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>B Grade</b>
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>C Grade</b>
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>Participation</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.SportsDistrictA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.SportsDistrictB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.SportsDistrictC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.SportsDistrictParticipation}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontSize: "18px" }}>
                  <b>Participation in Kerala School Kalotsavam</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>
                    State Level Participation(Number of items participated) :{" "}
                  </b>
                  {student.KalotsavamStateLevel}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>District Level</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table sx={{ marginBottom: "20px" }}>
            <TableBody>
              <TableRow
                sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
              >
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>A Grade</b>
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>B Grade</b>
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>C Grade</b>
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  <b>Participation</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.ArtsDistrictA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.ArtsDistrictB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.ArtsDistrictC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.ArtsDistrictParticipation}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <b>
                    Whether qualified in the National/State Level Test for the
                    National Talent Search Examination :
                  </b>
                  {student.NationalOrStateLevelExamination}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>
                    (a) Details of participation in co-curricular activites and
                    the number of grades won
                  </b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table sx={{ marginBottom: "20px" }}>
            <TableBody>
              <TableRow
                sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
              >
                <TableCell
                  sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
                ></TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  A Grade
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  B Grade
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  C Grade
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  D Grade
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #b6b8bf" }}>
                  E Grade
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
                >
                  State Science Fair
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateScienceFairA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateScienceFairB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateScienceFairC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateScienceFairD}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateScienceFairE}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
                >
                  State Social Science Fair
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateSocialFairA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateSocialFairB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateSocialFairC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateSocialFairD}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateSocialFairE}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
                >
                  State Maths Fair
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateMathsFairA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateMathsFairB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateMathsFairC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateMathsFairD}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateMathsFairE}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
                >
                  State IT Fest
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateITFestA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateITFestB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateITFestC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateITFestD}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateITFestE}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: "#d8dceb", borderColor: "#b6b8bf" }}
                >
                  State Work Experiece Fair
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateWorkExperienceFairA}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateWorkExperienceFairB}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateWorkExperienceFairC}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateWorkExperienceFairD}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
                  {student.StateWorkExperienceFairE}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <b>(b) Relevant</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ paddingLeft: "50px" }}>
                  {student.Club}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      ) : null}
    </TableContainer>
  );
}

export default StudentDetails;
