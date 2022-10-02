import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import RadioButtonGroup from "./components/RadioButtonGroup";

function App() {

  const radioData = [
    {
      label: "Coffee",
      name: "drink-types",
    },
    {
      label: "Tea",
      name: "drink-types",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Web Text Design</h1>

        <div className="components">
          <div className="component">
            <h3>Buttons:</h3>
            <Button text="Normal" />
            <Button text="Double" double="true" />
          </div>

          <div className="component">
            <h3>Progress bar:</h3>
            <ProgressBar currentValue="0" />
            <ProgressBar currentValue="25" />
            <ProgressBar currentValue="50" />
            <ProgressBar currentValue="75" />
            <ProgressBar currentValue="100" />
          </div>

          <div className="component">
            <h3>Radio Buttons:</h3>
            <RadioButtonGroup label="Select your drink:"
              options={radioData} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
