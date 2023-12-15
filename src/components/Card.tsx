import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { createTheme } from "@mui/system";
import { ICard } from "../types/card";

interface CardProps {
  card: ICard;
  isSelected: boolean;
  onClick: () => void;
}

const theme = createTheme({
  palette: {
    background: {
      selected: "#e74c3c",
      default: "#fff",
    },
  },
});

const BasicCard: React.FC<CardProps> = ({ card, isSelected, onClick }) => {
  return (
    <Card
      sx={{
        margin: theme.spacing(1),
        cursor: "pointer",
        pointerEvents: isSelected ? "none" : "auto",
        border: "1px solid",
        borderColor: isSelected
          ? theme.palette.background.selected
          : theme.palette.background.default,
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        image={card.image}
        title={card.name}
      ></CardMedia>
      <CardContent>
        <Typography variant="h5" component="div">
          {card.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
