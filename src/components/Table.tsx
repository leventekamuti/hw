import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import CircularProgress from "@mui/material/CircularProgress";
import { CharacterData } from "../interfaces/CharacterData";

interface TableProps {
  onCharacterClick: (characterData: CharacterData) => void;
  searchQuery: string;
}

function Table_({ onCharacterClick, searchQuery }: TableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TableContainer
      component={Paper}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Table sx={{ width: "600px" }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => onCharacterClick(row)}
                  className="tableRowHover"
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={row.image}
                      alt={row.name}
                      width="50"
                      height="50"
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.species}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))
          )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                25,
                { label: "All", value: filteredData.length },
              ]}
              colSpan={4}
              count={filteredData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default Table_;
