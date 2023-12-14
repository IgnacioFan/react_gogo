import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Button from "./Button";
import { IAbility } from "../types/ability";
import { useState } from "react";

interface AbilitySettingsProps {
  id: string;
  abilities: IAbility;
  remain: number;
}

const Wrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  border: "1px solid",
  borderColor: "black",
  color: "black",
  backgroundColor: "#fff",
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

const AbilitySettings: React.FC<AbilitySettingsProps> = ({
  id,
  abilities,
  remain,
}) => {
  const [getRemain, setRemain] = useState<number>(remain);
  const [getAbilities, setAbilities] = useState<IAbility>(abilities);

  const handleAdd = (key: string, val: number) => {
    if (getRemain > 0) {
      setRemain((old) => (old -= 1));
      setAbilities((old) => ({
        ...old,
        [key]: val + 1,
      }));
    }
  };
  const handleMinus = (key: string, val: number) => {
    if (val > 0) {
      setRemain((old) => (old += 1));
      setAbilities((old) => ({
        ...old,
        [key]: val - 1,
      }));
    }
  };
  const handleSave = () => {
    console.log("save current abilities and remain for " + id);
  };
  return (
    <Wrapper>
      <Box>
        {Object.entries(getAbilities).map(([ability, val]) => (
          <Box key={ability}>
            <Typography variant="h5" component="div">
              {ability.toUpperCase()}
            </Typography>
            <Button
              content="+"
              isDisabled={getRemain == 0}
              action={() => handleAdd(ability, val)}
            ></Button>
            <Typography variant="h5" component="div">
              {val}
            </Typography>
            <Button
              content="-"
              isDisabled={val == 0}
              action={() => handleMinus(ability, val)}
            ></Button>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography component="div">Remain Points: {getRemain}</Typography>
        <Button content="Save" action={() => handleSave()}></Button>
      </Box>
    </Wrapper>
  );
};

export default AbilitySettings;
