import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Autocomplete,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import NavBar from "../components/NavBar";
import axios from "axios";
import { nomineesOptions } from "../const/options";
import StudentDetails from "../components/StudentDetails";
import WarningAlert from "../components/alerts/WarningAlert";

function Dashboard() {
  const [applicationNo, setApplicationNo] = useState("");
  const [studentDetails, setStudentDetails] = useState({});
  const [selectedNominee, setSelectedNominee] = useState("");

  const [openWarningAlert, setOpenWarningAlert] = useState(false);

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `${
          import.meta.env.VITE_TEST_LINK
        }/search?AppNo=${applicationNo}`
      );
      setSelectedNominee("");
      console.log(response.data);
      if (response.data.length > 0) {
        setStudentDetails(response.data);
      } else {
        setStudentDetails({});
        setOpenWarningAlert(true);
      }
    } catch (error) {
      alert(error);
      console.error("An error occurred:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!studentDetails.length) {
      return;
    }
  
   // Assuming the sheet has an "id" field for each row
  
    const updatedStudent = {
      ...studentDetails[0], // Keep the existing data
      Nominee: selectedNominee, // Update the Nominee field
    };
  
    try {
      const response = await axios.patch(
        `https://sheet.best/api/sheets/b9ccbd5f-ec54-40e0-8175-22ecbcec2dbd/AppNo/${applicationNo}`,
        updatedStudent,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  

/*
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(selectedNominee);
    const formattedValues = {
      Name:studentDetails[0].Name
    }
    //const response = await axios.post(`https://sheet.best/api/sheets/fbf9c08d-1133-4189-9432-19090a40f8af`,)
    console.log(formattedValues);
    console.log(selectedNominee);
  };*/

  const handleCloseWarningAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWarningAlert(false);
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col items-center bg-slate-100">
        <Box className="w-11/12 my-5 md:w-5/6">
          <Paper className="p-4">
            <h3 className="font-bold text-2xl mb-4">Add Management Nominee</h3>
            <div className="flex gap-3">
              {/* Student Search Form */}

              <form
                onSubmit={handleSearch}
                className="flex flex-col gap-3 md:flex-row w-full"
              >
                <TextField
                  label="Application No."
                  value={applicationNo}
                  onChange={(e) => setApplicationNo(e.target.value)}
                  required
                  fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                  <SearchIcon />
                </Button>
              </form>

              {/* Nominee Add Form */}

              <form
                className="flex flex-col gap-3 md:flex-row w-full"
                onSubmit={handleSubmit}
              >
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={!studentDetails.length}
                    freeSolo
                    inputValue={selectedNominee}
                    onInputChange={(event, newInputValue) => {
                      setSelectedNominee(newInputValue);
                    }}
                    options={nomineesOptions.map((option) => option)}
                    renderInput={(params) => (
                      <TextField {...params} label="Nominee" />
                    )}
                  />
                </FormControl>
                <Button
                  type="submit"
                  disabled={!studentDetails.length}
                  variant="contained"
                  color="success"
                >
                  <CheckIcon />
                </Button>
              </form>
            </div>
          </Paper>
          {!!studentDetails.length && <StudentDetails data={studentDetails} />}
        </Box>
      </div>
      <WarningAlert
        open={openWarningAlert}
        handleClose={handleCloseWarningAlert}
        message="Application not found!"
      />
    </>
  );
}

export default Dashboard;
