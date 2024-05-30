import {
    Box,
    Chip,
    InputAdornment,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';

function ViewAll() {
    const [ManagementEntries, setManagementEntries] = useState([]);
    const [FilteredEntries, setFilteredEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [ ,setSearchText] = useState("");

    useEffect(() => {
        FetchEntries();
    }, []);

    const FetchEntries = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_MANAGEMENT_QUOTA_LINK}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const filteredData = response.data.filter(
                (entry) => entry.AppNo !== "M0001" && entry.AppNo !== "C0001"
            );
            setManagementEntries(filteredData);
            setFilteredEntries(filteredData);
        } catch (error) {
            console.error("Error fetching entries:", error);
            // You can also display an error message to the user or handle the error in some other way
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchText(searchValue);
        setFilteredEntries(ManagementEntries)

        const filtered = ManagementEntries.filter(
            (item) =>
                item.Name.toLowerCase().includes(searchValue) ||
                item.MobileNumber.toLowerCase().includes(searchValue)
        );
        setFilteredEntries(filtered);
    };

    return (
        <div>
            <NavBar currentPage={"View All Entries"} />
            <div className="min-h-screen flex flex-col items-center bg-slate-100 ">
                <Box className="w-11/12 my-5 md:w-5/6">
                    <div className="flex flex-col md:flex-row pb-2 justify-between items-center">
                        <h3 className="font-bold text-3xl mb-4">Management Entries</h3>
                        <div className="flex items-center gap-3">
                            <TextField
                                className="bg-white"
                                id="input-with-icon-textfield"
                                placeholder="Search Name / Mob No"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon  />
                                        </InputAdornment>
                                    ),
                                    onChange: (e) => {
                                        handleSearch(e);
                                    },
                                }}
                                size="small"
                            />
                            <p className="font-bold">Total: {FilteredEntries.length}</p>
                        </div>
                    </div>
                    <TableContainer
                        component={Paper}
                        sx={{ width: "100%", overflow: "hidden" }}
                    >
                        <div className="overflow-auto">
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                                size="small"
                            >
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: "#dfdfdf" }}>
                                        <TableCell sx={{ fontWeight: "bold" }}>AppNo</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Mobile No</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>DOB</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Reg No</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Father</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>School</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                            Panchayath & Ward
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Nominee</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Courses</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="overflow-auto">
                                    {FilteredEntries.map((row) => (
                                        <TableRow className="whitespace-nowrap" key={row.AppNo}>
                                            <TableCell scope="row">{row.AppNo}</TableCell>
                                            <TableCell>{row.Name}</TableCell>
                                            <TableCell>{row.MobileNumber}</TableCell>
                                            <TableCell>{row.DateOfBirth}</TableCell>
                                            <TableCell>{row.RegNumber}</TableCell>
                                            <TableCell>{row.FatherName}</TableCell>
                                            <TableCell>{row.SchoolName}</TableCell>
                                            <TableCell>{row.Gender}</TableCell>
                                            <TableCell>
                                                {row.Panchayath}, {row.Ward}
                                            </TableCell>
                                            <TableCell>{row.Nominee}</TableCell>
                                            <TableCell className="space-x-2">
                                                <Chip size="small" label={row.coursePreference1} />
                                                {row.coursePreference2 && (
                                                    <Chip size="small" label={row.coursePreference2} />
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {isLoading && <LinearProgress />}
                        </div>
                    </TableContainer>
                </Box>
            </div>
        </div>
    );
}

export default ViewAll;
