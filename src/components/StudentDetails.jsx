import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { cbseGradesOptions, examOptions, genderOptions, religionOptions, stateGradesOptions } from "../const/options";
import GradeView from "./GradeView";



function StudentDetails({ data, isManagement }) {

  const [editMode, setEditMode] = useState(false);



  const [student, setStudent] = useState(data[0]);

  const [editData, setEditData] = useState(data[0]);

  const [isloading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
    console.log(editData)
  };


  const updateData = (data) => {
    const updatedData = {
      ...data,
      AppNo: student.AppNo,
    };
    setStudent(
      updatedData
    )
  }

  const handleSubmit = async () => {
    setEditMode(false)
    setIsloading(true)

    const updatedStudent = {
      ...editData, // Keep the existing data
      AppNo: "", // AppNo must be empty to avoid conflict from sheet AppNo(Formula)
    };

    const q = isManagement ? import.meta.env.VITE_MANAGEMENT_QUOTA_LINK : import.meta.env.VITE_COMMUNITY_QUOTA_LINK;

    try {
      const response = await axios.patch(
        `${q}/AppNo/${student.AppNo}`,
        updatedStudent,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      updateData(response.data[0]);
      setIsloading(false)
    } catch (error) {
      console.log(error)
      setIsloading(false)
    }

  }

  return (
    <TableContainer component={Paper} className="mt-3 p-2">
      {isloading && <Loader />}
      <Table aria-label="simple table" className="text-red-500">
        <TableHead  >
          <TableRow>
            <TableCell colSpan={2} className="py-3 bg-slate-100 rounded-md">
              <div className="flex justify-between items-center">
                <Typography variant="" className="font-semibold text-3xl px-2">
                  Student&apos;s Details  <span className="text-blue-700">{student.AppNo}</span>
                </Typography>

                {editMode ?
                  <div className="space-x-2" >
                    <Button variant="outlined" onClick={() => { setEditMode(false); setEditData(data[0]); setStudent(data[0]) }} >
                      <ClearIcon />
                    </Button>
                    <Button color="success" variant="contained" onClick={handleSubmit} >
                      <SaveIcon />
                    </Button>
                  </div>
                  : <Button variant="outlined" onClick={() => { setEditMode(true) }} >
                    <EditIcon />
                  </Button>}

              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell  >
              <b>Name: </b>
              {editMode ?
                <TextField type="text" name="Name" size="small" variant="outlined" onChange={handleChange} value={editData.Name} /> :
                <>{student.Name}</>
              }
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
              {editMode ?
                <TextField type="text" name="MobileNumber" size="small" variant="outlined" onChange={handleChange} value={editData.MobileNumber} /> :
                <>{student.MobileNumber}</>
              }
            </TableCell>
            <TableCell>
              <b>Whatsapp Number: </b>
              {editMode ?
                <TextField type="text" name="WhatsappNumber" size="small" variant="outlined" onChange={handleChange} value={editData.WhatsappNumber} /> :
                <>{student.WhatsappNumber}</>
              }
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Single Window Number: </b>
              {editMode ?
                <TextField type="text" name="SingleWindowNo" size="small" variant="outlined" onChange={handleChange} value={editData.SingleWindowNo} /> :
                <>{student.SingleWindowNo}</>
              }
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Date of Birth: </b>
              {editMode ?
                <TextField type="text" name="DateOfBirth" size="small" variant="outlined" onChange={handleChange} value={editData.DateOfBirth} disabled /> :
                <>{student.DateOfBirth}</>
              }
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>Gender: </b>
              {editMode ?
                <Select
                  size="small"
                  value={editData.Gender}
                  onChange={handleChange}
                  name="Gender"
                >
                  {genderOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select> :
                <>{student.Gender}</>
              }

            </TableCell>
            <TableCell>
              <b>Religion: </b>
              {editMode ?
                <Select
                  size="small"
                  value={editData.Religion}
                  onChange={handleChange}
                  name="Religion"
                >
                  {religionOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select> :
                <>{student.Religion}</>
              }
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>Register Number: </b>
              {editMode ?
                <TextField type="text" name="RegNumber" size="small" variant="outlined" onChange={handleChange} value={editData.RegNumber} /> :
                <>{student.RegNumber}</>
              }
            </TableCell>
            <TableCell>
              <b>Year: </b>
              {editMode ?
                <TextField type="text" name="Year" size="small" variant="outlined" onChange={handleChange} value={editData.Year} /> :
                <> {student.Year}</>
              }
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <b>Board of Examination: </b>
              {editMode ?
                <Select
                  size="small"
                  value={editData.Board}
                  onChange={handleChange}
                  name="Board"
                >
                  {examOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select> :
                <>{student.Board}</>
              }
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

      {editMode ? (<> {editData.Board === "Other" || editData.Board === "STATE" ? (
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
                <Select
                  size="small"
                  value={editData.Language1}
                  onChange={handleChange}
                  name="Language1"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.Language2}
                  onChange={handleChange}
                  name="Language2"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.English}
                  onChange={handleChange}
                  name="English"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.Hindi}
                  onChange={handleChange}
                  name="Hindi"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.SocialScience}
                  onChange={handleChange}
                  name="SocialScience"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.Physics}
                  onChange={handleChange}
                  name="Physics"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.Chemistry}
                  onChange={handleChange}
                  name="Chemistry"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.Biology}
                  onChange={handleChange}
                  name="Biology"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.Maths}
                  onChange={handleChange}
                  name="Maths"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #d8dceb" }}>
              <Select
                  size="small"
                  value={editData.IT}
                  onChange={handleChange}
                  name="IT"
                >
                  {stateGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : editData.Board === "CBSE" ? (
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
                <Select
                  size="small"
                  value={editData.Language2}
                  onChange={handleChange}
                  name="Language2"
                >
                  {cbseGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                <Select
                  size="small"
                  value={editData.English}
                  onChange={handleChange}
                  name="English"
                >
                  {cbseGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                <Select
                  size="small"
                  value={editData.Maths}
                  onChange={handleChange}
                  name="Maths"
                >
                  {cbseGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                <Select
                  size="small"
                  value={editData.SocialScience}
                  onChange={handleChange}
                  name="SocialScience"
                >
                  {cbseGradesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell
                sx={{ borderRight: "1px solid #d8dceb" }}
                width="200px"
              >
                <Select
                  size="small"
                  value={editData.Science}
                  onChange={handleChange}
                  name="Science"
                >
                  {cbseGradesOptions.map((option) => (
                    <MenuItem key={option.value}  value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : null}</>) : (<GradeView student={student} />)}


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
