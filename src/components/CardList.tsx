import { Grid } from "@mui/material";
import Card from "./Card";
import { ICard } from "../types/card";

interface CardListProps {
  id: string;
  list: ICard[];
}

const CardList: React.FC<CardListProps> = ({ id, list }) => {
  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <Grid container alignItems="center">
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
