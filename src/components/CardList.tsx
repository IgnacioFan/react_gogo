import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "./Card";
import { ICard } from "../types/card";

interface CardListProps {
  id?: string;
  list: ICard[];
}

const CardList: React.FC<CardListProps> = ({ id, list }) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/heros/${id}`);
  };

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        padding: "10px",
        marginBottom: "20px",
        border: "1px solid",
        borderColor: "#fff",
      }}
    >
      {list.map((item) => (
        <Card
          key={item.id}
          card={item}
          isSelected={item.id === id}
          onClick={() => handleClick(item.id)}
        ></Card>
      ))}
    </Grid>
  );
};

export default CardList;
