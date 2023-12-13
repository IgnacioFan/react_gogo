import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardList from "./components/CardList";
import { ICard } from "./types/card";
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Hero List</h1>
        <CardList id="1" list={items} />
      </ThemeProvider>
    </>
  );
}

export default App;
