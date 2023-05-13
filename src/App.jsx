import Container from "./components/ProfileCard/ProfileCard";

import pfp from "./assets/img/pfp.png";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Container img={pfp} alt={"Foto do Marcelo sorrindo"} />
    </div>
  );
}

export default App;
