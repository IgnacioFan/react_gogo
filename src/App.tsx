import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardList from "./components/CardList";
import AbilitySettings from "./components/AbilitySetting";
import { ICard } from "./types/card";
import { IAbility } from "./types/ability";
import "./App.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  let id = "1";
  let items: ICard[] = [
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Hero List</h1>
        <CardList id={id} list={items} />
        <AbilitySettings id={id} abilities={abilities}></AbilitySettings>
      </ThemeProvider>
    </>
  );
}

export default App;
