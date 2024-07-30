import { Box, Divider, List, ListItem } from "@mui/material";
import CustomAvatar from "../customAvatar/customAvatar";
import { Fragment } from "react";

const MembersList = () => {
  const funcionarios = [
    { nome: "Alice", cargo: "Desenvolvedor" },
    { nome: "Bob", cargo: "Designer" },
    { nome: "Carlos", cargo: "Desenvolvedor" },
    { nome: "Diana", cargo: "Gerente de Projeto" },
    { nome: "Eva", cargo: "Designer" },
  ];

  const agruparPorCargo = (funcionarios) => {
    return funcionarios.reduce((acc, funcionario) => {
      const { cargo } = funcionario;
      if (!acc[cargo]) {
        acc[cargo] = [];
      }
      acc[cargo].push(funcionario);
      return acc;
    }, {});
  };

  const funcionariosFinal = agruparPorCargo(funcionarios);

  return (
    <List>
      {Object.keys(funcionariosFinal).map((cargo) => (
        <Fragment key={cargo}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            marginY={1}
          >
            {funcionariosFinal[cargo].map((funcionario, index) => (
              <ListItem key={index} sx={{ width: "auto" }}>
                <CustomAvatar
                  agent_name={funcionario.nome}
                  agent_role={funcionario.cargo}
                />
              </ListItem>
            ))}
          </Box>

          <Divider sx={{ backgroundColor: "#DADADA" }} />
        </Fragment>
      ))}
    </List>
  );
};

export default MembersList;
