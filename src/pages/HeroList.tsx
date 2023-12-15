import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { getHeroList } from "../services/hero";
import { ICard } from "../types/card";

const HeroList: React.FC = () => {
  const [herorList, setHeroList] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getHeroList().then(({ data }) => {
          setHeroList(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Hero List</h1>
      <CardList list={herorList} />
    </>
  );
};

export default HeroList;
