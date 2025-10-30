import { Button } from "./components";

function App() {
  return (
    <>
      <div className="container-fixed">
        <div className="row  place-items-center">
          <div className="col-span-full mt-3xl">
            <Button variant={"danger-plain"} disabled>Danger Plain</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
