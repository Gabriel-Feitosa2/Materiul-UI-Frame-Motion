import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, FormGroup, TextField, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const schema = yup
  .object({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().required(),
    cep: yup.string().required(),
    fone: yup.string().required(),
  })
  .required();

const ButtonModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data, e) => {
    data.id = null;
    console.log(data);
    props.addUser(data);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Adicionar Pessoa
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="normal" variant="standard">
              <Grid container>
                <Grid item>
                  <FormGroup>
                    <TextField
                      name="name"
                      label="Nome"
                      variant="outlined"
                      margin="normal"
                      {...register("name")}
                    ></TextField>
                    <TextField
                      name="cpf"
                      label="CPF"
                      variant="outlined"
                      margin="normal"
                      {...register("cpf")}
                    ></TextField>
                  </FormGroup>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      {...register("email")}
                    ></TextField>
                    <TextField
                      name="cep"
                      label="CEP"
                      variant="outlined"
                      margin="normal"
                      {...register("cep")}
                    ></TextField>
                    <TextField
                      name="fone"
                      label="Telefone"
                      variant="outlined"
                      margin="normal"
                      {...register("fone")}
                    ></TextField>
                  </FormGroup>
                </Grid>
                <Button variant="contained" color="success">
                  Adicionar
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancelar
                </Button>
              </Grid>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonModal;
