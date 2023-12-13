import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Button from "./Button";
import { IAbility } from "../types/ability";

interface AbilitySettingsProps {
  id: string;
  abilities: IAbility;
}

const Wrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  border: "1px solid",
  borderColor: "white",
  "& > .MuiBox-root:first-of-type": {
    display: "flex",
    flexDirection: "column",
    ".MuiTypography-root": {
      minWidth: "80px",
      width: "30%",
      margin: "10px",
    },
    "*": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  "& > .MuiBox-root:last-of-type": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    ".MuiTypography-root": {
      display: "flex",
      alignItems: "start",
      margin: "10px",
    },
  },
}));

const AbilitySettings: React.FC<AbilitySettingsProps> = ({ id, abilities }) => {
  const handleAdd = (value: number) => {
    console.log(value);
  };
  const handleMinus = (value: number) => {
    console.log(value);
  };
  const handleSave = () => {
    console.log("save!");
  };
  return (
    <Wrapper>
      <Box>
        {Object.entries(abilities).map(([ability, value]) => (
          <Box key={ability}>
            <Typography variant="h5" component="div">
              {ability}
            </Typography>
            <Button content="+" action={() => handleAdd(value)}></Button>
            <Typography variant="h5" component="div">
              {value}
            </Typography>
            <Button content="-" action={() => handleMinus(value)}></Button>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography variant="h6" component="div">
          Remain Points: 10
        </Typography>
        <Button content="Save" action={() => handleSave()}></Button>
      </Box>
    </Wrapper>
  );
};

export default AbilitySettings;
