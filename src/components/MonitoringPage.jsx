import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import FirstChart from "./FirstChart";
import SecondChart from "./SecondChart";
import TemperaturePlot from "./TemperaturePlot";
import "./Blinking.css";

function MonitoringPage() {
  return (
    <div>
      <Header />
      <ResponsiveContainer>
        <h1>Real-Time Monitoring</h1>
        <VisualizationSection>
          <Graph>
            <FirstChart />
            <span className="red">
              [<div id="blink-red" /> - negative]
            </span>
            <p>
              <b>Total Dissolved Solids (TDS)</b> - cumulative measurement of
              inorganic salts, minerals, and other dissolved substances present
              in the water and nutrient solution used in hydroponics.
            </p>
          </Graph>
          <Graph>
            <SecondChart />
            <span className="red">
              [<div id="blink-red" /> - negative]
            </span>
            <p>
              <b>Potential of Hydrogen (pH)</b> - quantitative measure of the
              acidity or basicity of aqueous or other liquid solutions.
            </p>
          </Graph>
          <Graph>
            <TemperaturePlot />
            <span className="green">
              [<div id="blink-green" /> - active]
            </span>
            <p>
              <b>Temperature (T)</b> - physical quantity that quantitatively
              expresses the attribute of hotness or coldness.
            </p>
          </Graph>
          <Graph>
            <p></p>
          </Graph>
        </VisualizationSection>
      </ResponsiveContainer>
      <Footer />
    </div>
  );
}

export default MonitoringPage;

const ResponsiveContainer = styled.div`
  width: 100%;
  padding-top: 70px;

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;

const VisualizationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: calc(100vh - 70px);
  height: 100%;
  width: 100%;
`;

const Graph = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: auto;
  margin: 10px;
  padding-bottom: 50px;

  p {
    width: 600px;
    @media (max-width: 700px) {
      width: 350px;
    }
  }

  span {
    display: flex;
    align-items: center;
  }
`;
