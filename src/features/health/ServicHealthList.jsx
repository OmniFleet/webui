import React, { useState } from "react";
import { List } from "semantic-ui-react";
import ServiceHealth from "./ServiceHealth";

export default function ServiceHealthList({ apiGateway }) {
  const GPSTrackingService = new URL(apiGateway + "/tracking/health/readiness");
  const [services, setServices] = useState([
    {
      name: "GPS Tracking Service",
      url: GPSTrackingService,
    },
  ]);

  return (
    <List divided relaxed>
      {services.map((service) => (
        <ServiceHealth
          url={service.url}
          name={service.name}
          frequency='10000'
          key={service.name}
        />
      ))}
    </List>
  );
}
