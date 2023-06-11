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

function Dashboard() {
  const [applicationNo, setApplicationNo] = useState("");
  const [studentDetails, setStudentDetails] = useState({});
  const [selectedNominee, setSelectedNominee] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${
        import.meta.env.VITE_MANAGEMENT_QUOTA_LINK
      }/search?AppNo=${applicationNo}`
    );
    console.log(response.data);
    setStudentDetails(response.data);
    setSelectedNominee("");  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(selectedNominee);
    console.log(selectedNominee);
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
          {!!studentDetails.length &&  <StudentDetails data={studentDetails} />}
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
