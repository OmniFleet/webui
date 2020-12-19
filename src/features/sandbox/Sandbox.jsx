import React, { Fragment } from "react";
import { Tab } from "semantic-ui-react";
import FleetList from "../fleet/FleetList";
import { sampleTelemetry } from "../../app/api/sampleTelemetry";

export default function Sandbox() {
  const panes = [
    {
      menuItem: { key: "active", icon: "bus", content: "Active" },
      render: () => <Tab.Pane attached={false}>foobar</Tab.Pane>,
    },
    {
      menuItem: { key: "messages", icon: "envelope", content: "Notifications" },
      render: () => (
        <Tab.Pane attached={false}>
          <FleetList telemetry={sampleTelemetry} />
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
