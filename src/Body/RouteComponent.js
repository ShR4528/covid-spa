import RankedChartsComponent from "./RankedChartsComponent";
import ReportedCasesComponent from "./ReportedCasesComponent";
import CovidTodayComponent from "./CovidTodayComponent";
import { Route, Routes } from "react-router-dom";

function RouteComponent(props) {
  const env = process.env.NODE_ENV;
  const url = process.env[`REACT_APP_HOME_URL_${env}`];
  return (
    <Routes>
      <Route path={`${url}/`} element={<CovidTodayComponent />} />
      <Route
        path={`${url}/reported-cases`}
        element={<ReportedCasesComponent {...props} />}
      />
      <Route
        path={`${url}/reported-cases/:country`}
        element={<ReportedCasesComponent {...props} />}
      />
      <Route
        path={`${url}/ranked-charts/:cases/:count`}
        element={<RankedChartsComponent {...props} />}
      />
    </Routes>
  );
}

export default RouteComponent;
