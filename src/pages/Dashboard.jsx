import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import NavBar from "../components/NavBar";
import axios from "axios";

function Dashboard() {
  const [applicationNo, setApplicationNo] = useState("");
  const [studentDetails, setStudentDetails] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${
        import.meta.env.VITE_MANAGEMENT_QUOTA_LINK
      }/search?AppNo=${applicationNo}`
    );
    console.log(response.data[0]);
    setStudentDetails(response.data[0]);
    alert(`Student Details:${studentDetails}`);
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
                onSubmit={handleSubmit}
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

              <form className="flex flex-col gap-3 md:flex-row w-full">
              <FormControl fullWidth>
        <InputLabel >Nominee</InputLabel>
        <Select
          disabled
          // value={nominee}
          label="Nominee"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                <Button
                  type="submit"
                  disabled
                  variant="contained"
                  color="primary"
                >
                  <CheckIcon />
                </Button>
              </form>
            </div>

            {studentDetails && (
              <>
                <Typography
                  variant="h6"
                  style={{
                    color: "darkblue",
                  }}
                >
                  {studentDetails.AppNo}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: "darkblue",
                  }}
                >
                  {studentDetails.Name}
                </Typography>
              </>
            )}
          </Paper>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
