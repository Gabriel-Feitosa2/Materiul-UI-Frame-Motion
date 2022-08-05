import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { motion } from "framer-motion";

function createData(name, cpf, email, cep, fone) {
  return { name, cpf, email, cep, fone };
}

const rows = [
  createData("Gabriel ", "056.432.432", "gabriel@gmail.com", 24, 4.0),
  createData("Jose", "056.333.332", "jose@gmail.com", 37, 4.3),
  createData("Cladiu", "256.433.332", "cladiu@gmail.com", 24, 6.0),
  createData("Maria", "534.333.339", "maria@gmail.com", 67, 4.3),
  createData("Julia", "234.564.789", "julia@gmail.com", 49, 3.9),
];

const DataTable = () => {
  const [users, setUser] = useContext(UserContext);

  return (
    <motion.div
      initial={{ x: 3350 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">CEP</TableCell>
              <TableCell align="right">Telefone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.cpf}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.cep}</TableCell>
                <TableCell align="right">{user.fone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </motion.div>
  );
};

export default DataTable;
