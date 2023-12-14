import CardList from "../components/CardList";
import AbilitySettings from "../components/AbilitySetting";
import { ICard } from "../types/card";
import { IAbility } from "../types/ability";
import { useParams } from "react-router-dom";

const HeroProfile: React.FC = () => {
  const { id } = useParams();
  let heroCards: ICard[] = [
    {
      id: "1",
      imageUrl:
        "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
      name: "Daredevil",
    },
    {
      id: "2",
      imageUrl:
        "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
      name: "Thor",
    },
    {
      id: "3",
      imageUrl:
        "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
      name: "Iron Man",
    },
    {
      id: "4",
      imageUrl:
        "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
      name: "Hulk",
    },
  ];
  let abilities: IAbility = { str: 2, int: 7, agi: 9, luk: 7 };
  let remain = 5;

  const findHeroName = (id: string) => {
    if (id === "") {
      return "";
    }
    return heroCards.find((card) => card.id == id)?.name;
  };

  return (
    <>
      <h1>Hero {findHeroName(id || "")}</h1>
      <CardList id={id || ""} list={heroCards} />
      {id && (
        <AbilitySettings
          id={id}
          abilities={abilities}
          remain={remain}
        ></AbilitySettings>
      )}
    </>
  );
};

export default HeroProfile;
