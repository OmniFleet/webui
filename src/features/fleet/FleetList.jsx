import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

export default function FleetList({ telemetry }) {
  return (
    <List divided relaxed>
      {telemetry.slice(0, 25).map((data) => (
        <List.Item key={data.objectId}>
          <List.Icon name='bus' size='large' verticalAlign='middle' />
          <List.Content as={Link} to='#'>
            <List.Header>
              {data.source} {data.objectId}
            </List.Header>
            <List.Description>
              Coords: {data.position.latitude}, {data.position.longitude}
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}
