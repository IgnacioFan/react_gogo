import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroList, getHeroProfle } from "../services/hero";
import CardList from "../components/CardList";
import AbilitySettings from "../components/AbilitySetting";
import { ICard } from "../types/card";
import { IAbility } from "../types/ability";

const DEFAULT_MAX_POINT = 30;

const HeroProfile: React.FC = () => {
  const { id } = useParams();
  const initialAbilities: IAbility = {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  };
  const [herorList, setHeroList] = useState<ICard[]>([]);
  const [abilities, setAbilities] = useState<IAbility>(initialAbilities);
  const [remain, setRemain] = useState<number>(0);

  useEffect(() => {
    const fetchData = () => {
      try {
        getHeroList().then(({ data }) => {
          setHeroList(data);
        });
        getHeroProfle(id || "").then(({ data }) => {
          setAbilities(data);
          setRemain(DEFAULT_MAX_POINT - getRemainPoints(data));
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const findHeroName = (id: string) => {
    if (id === "") {
      return "";
    }
    return herorList.find((card) => card.id == id)?.name;
  };

  const getRemainPoints = (abilities: IAbility): number => {
    let sum = 0;
    Object.values(abilities).forEach((val) => {
      sum += val;
    });
    return sum;
  };

  return (
    <>
      <h1>Hero {findHeroName(id || "")}</h1>
      <CardList id={id || ""} list={herorList} />
      {id && (
        <AbilitySettings
          id={id}
          abilities={abilities}
          remain={remain}
          setAbilities={setAbilities}
          setRemain={setRemain}
        ></AbilitySettings>
      )}
    </>
  );
};

export default HeroProfile;
