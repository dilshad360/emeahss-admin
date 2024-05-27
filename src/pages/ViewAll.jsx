import {
    Box,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewAll() {
    const [ManagementEntries, setManagementEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        } catch (error) {
            console.error("Error fetching entries:", error);
            // You can also display an error message to the user or handle the error in some other way
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <NavBar currentPage={"View All Entries"} />
            <div className="min-h-screen flex flex-col items-center bg-slate-100 ">
                <Box className="w-11/12 my-5 md:w-5/6">
                    <div className="flex justify-between items-center">
                    <h3 className="font-bold text-3xl mb-4">Management Entries</h3>
                    <p className="font-bold">Total: {ManagementEntries.length}</p>
                    </div>
                    <TableContainer component={Paper} sx={{ width: '100%', overflow: 'hidden' }} >
                        <div className="overflow-auto">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small" >
                                <TableHead >
                                    <TableRow sx={{ backgroundColor: "#dfdfdf" }}>
                                        <TableCell sx={{ fontWeight: 'bold' }} >AppNo</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Mobile No</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >DOB</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Reg No</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >School</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Gender</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Panchayath & Ward</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Course 1</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} >Course 2</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="overflow-auto" >
                                    {ManagementEntries.map((row) => (
                                        <TableRow className="whitespace-nowrap" key={row.AppNo}>
                                            <TableCell scope="row">{row.AppNo}</TableCell>
                                            <TableCell>{row.Name}</TableCell>
                                            <TableCell>{row.MobileNumber}</TableCell>
                                            <TableCell>{row.DateOfBirth}</TableCell>
                                            <TableCell>{row.RegNumber}</TableCell>
                                            <TableCell>{row.SchoolName}</TableCell>
                                            <TableCell>{row.Gender}</TableCell>
                                            <TableCell>{row.Panchayath}, {row.Ward}</TableCell>
                                            
                                            <TableCell  >{row.coursePreference1}</TableCell>
                                            <TableCell>{row.coursePreference2}</TableCell>
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
