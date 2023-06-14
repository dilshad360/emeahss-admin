import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Autocomplete,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import NavBar from "../components/NavBar";
import axios from "axios";
import { nomineesOptions } from "../const/options";
import StudentDetails from "../components/StudentDetails";
import WarningAlert from "../components/alerts/WarningAlert";
import SuccessAlert from "../components/alerts/SuccessAlert";

function Dashboard() {
  const [applicationNo, setApplicationNo] = useState("");
  const [studentDetails, setStudentDetails] = useState({});
  const [selectedNominee, setSelectedNominee] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isManagementQuota, setIsManagementQuota] = useState(true);

  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openWarningAlert, setOpenWarningAlert] = useState(false);

  const handleSearch = async (e) => {
    try {
      e.preventDefault();

      // To prevent the removel of AppNo formula from sheet
      if (applicationNo === "M0001" || applicationNo === "C0001") {
        alert("Access Denied");
        return;
      }

      // check if management quota is selected or not
      const quotaLink = isManagementQuota
        ? import.meta.env.VITE_MANAGEMENT_QUOTA_LINK
        : import.meta.env.VITE_COMMUNITY_QUOTA_LINK;
      const response = await axios.get(
        `${quotaLink}/search?AppNo=${applicationNo}`
      );
      setSelectedNominee("");
      setPaymentStatus("");
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
      AppNo: "", // AppNo must be empty to avoid conflict from sheet AppNo(Formula)
    };

    const paymentUpdated = {
      ...studentDetails[0],
      Payment: paymentStatus,
      AppNo: "",
    };

    console.log(paymentStatus);
    try {
      if (isManagementQuota) {
        const response = await axios.patch(
          `${
            import.meta.env.VITE_MANAGEMENT_QUOTA_LINK
          }/AppNo/${applicationNo}`,
          updatedStudent,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setOpenSuccessAlert(true)
        setStudentDetails(response.data);
        console.log(response.data);
      } else {
        const response = await axios.patch(
          `${import.meta.env.VITE_COMMUNITY_QUOTA_LINK}/AppNo/${applicationNo}`,
          paymentUpdated,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setOpenSuccessAlert(true)
        setStudentDetails(response.data);
        console.log(response.data);
      }
    } catch (error) {
      alert("Something went wrong",error)
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

  const handleCloseSuccessAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessAlert(false);
  };

  return (
    <>
      <NavBar />
      <div className="h-full flex flex-col items-center bg-slate-100">
        <Box className="w-11/12 my-5 md:w-5/6">
          <Paper className="p-4">
            <div className="flex items-center justify-center gap-2 flex-col pb-4">
              <h3 className="font-bold text-3xl">Search Application</h3>
              <ToggleButtonGroup
                color="primary"
                value={isManagementQuota}
                exclusive
                onChange={() => {
                  setIsManagementQuota((prev) => !prev);
                  setStudentDetails({});
                }}
              >
                <ToggleButton value={true} size="small">
                  Management
                </ToggleButton>
                <ToggleButton value={false} size="small">
                  Community
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="flex gap-3 mt-4">
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
              {isManagementQuota ? (
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
                        <TextField {...params} label="Select Nominee" />
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
              ) : (
                <form
                  className="flex flex-col gap-3 md:flex-row w-full"
                  onSubmit={handleSubmit}
                >
                  <FormControl fullWidth>
                    <InputLabel>Payment Status</InputLabel>
                    <Select
                      value={paymentStatus}
                      label="Payment Status"
                      disabled={!studentDetails.length}
                      onChange={(e) => setPaymentStatus(e.target.value)}
                    >
                      <MenuItem value={"PAID"}>PAID</MenuItem>
                      <MenuItem value={"UNPAID"}>UNPAID</MenuItem>
                    </Select>
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
              )}
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
      <SuccessAlert
        open={openSuccessAlert}
        handleClose={handleCloseSuccessAlert}
        message="Application Successfully Updated"
      />
    </>
  );
}

export default Dashboard;
