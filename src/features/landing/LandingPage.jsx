import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import FleetTracker from "../fleet/FleetTracker";
import Sidebar from "../navigation/Sidebar";
import axios from "axios";

export default function LandingPage() {
  const [telemetry, setTelemetry] = useState([]);

  const apiGateway = process.env.REACT_APP_API_GATEWAY_URI;
  const GPSTrackingService = new URL(apiGateway + "/tracking/api/v1/location/");

  const getTelemetry = async () => {
    try {
      const serverData = await axios.get(GPSTrackingService, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTelemetry(serverData.data);
      console.log("Fetching new telemetry...");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTelemetry();
    const interval = setInterval(() => {
      getTelemetry();
    }, 30000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column floated='left' width={4}>
          <Sidebar telemetry={telemetry} apiGateway={apiGateway} />
        </Grid.Column>
        <Grid.Column width={12}>
          <FleetTracker telemetry={telemetry} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
