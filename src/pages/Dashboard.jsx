import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../components/NavBar";

function Dashboard() {
  const [applicationNo, setApplicationNo] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application No: ${applicationNo}\nDate of Birth: ${dateOfBirth}`);
  };

  return (
    <>
      <NavBar/>
      <div className="h-screen flex flex-col items-center bg-slate-100">
        <Box className="w-11/12 my-5 md:w-5/6">
          <Paper className="p-4">
            <h3 className="font-bold text-2xl mb-4">Add Management Nominee</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row">
              <TextField
                label="Application Number"
                value={applicationNo}
                onChange={(e) => setApplicationNo(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="Date of Birth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button type="submit" variant="contained" color="primary">
                <SearchIcon />
              </Button>
            </form>
          </Paper>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
