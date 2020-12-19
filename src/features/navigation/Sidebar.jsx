import React, { Fragment } from "react";
import { Tab } from "semantic-ui-react";
import FleetList from "../fleet/FleetList";
import ServiceHealthList from "../health/ServicHealthList";

export default function Sidebar({ telemetry, apiGateway }) {
  const panes = [
    {
      menuItem: { key: "active", icon: "bus", content: "Active" },
      render: () => (
        <Tab.Pane attached={false} style={{ background: "white" }}>
          <FleetList telemetry={telemetry} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: "services", icon: "server", content: "Service Health" },
      render: () => (
        <Tab.Pane attached={false} style={{ background: "white" }}>
          <ServiceHealthList apiGateway={apiGateway} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Fragment>
      <Tab menu={{ pointing: true }} panes={panes} />
    </Fragment>
  );
}
