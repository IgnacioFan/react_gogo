import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Button from "./Button";
import { IAbility } from "../types/ability";

interface AbilitySettingsProps {
  id: string;
  abilities: IAbility;
  remain: number;
  setAbilities: (value: React.SetStateAction<IAbility>) => void;
  setRemain: (value: React.SetStateAction<number>) => void;
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
  setAbilities,
  setRemain,
}) => {
  const handleAdd = (key: string, val: number) => {
    if (remain > 0) {
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
        {Object.entries(abilities).map(([ability, val]) => (
          <Box key={ability}>
            <Typography variant="h5" component="div">
              {ability.toUpperCase()}
            </Typography>
            <Button
              content="+"
              isDisabled={remain == 0}
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
        <Typography component="div">Remain Points: {remain}</Typography>
        <Button content="Save" action={() => handleSave()}></Button>
      </Box>
    </Wrapper>
  );
};

export default AbilitySettings;
