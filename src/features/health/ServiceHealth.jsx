import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "semantic-ui-react";

export default function ServiceHealth({ url, name, frequency }) {
  const [serviceHealth, setServiceHealth] = useState({
    status: "failed",
    icon: "location arrow",
    healthy: false,
  });

  const getServiceHealth = async () => {
    try {
      console.log(`Getting health of ${name} service`);
      const health = await axios.get(url);
      setServiceHealth({
        ...serviceHealth,
        healthy: true,
        status: health.statusText,
        ...health.data,
      });
    } catch (err) {
      setServiceHealth({
        ...serviceHealth,
        message: err.message,
        healthy: false,
      });
      console.error(err.message);
    }
  };

  useEffect(() => {
    getServiceHealth();
    const interval = setInterval(() => {
      getServiceHealth();
    }, frequency);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <List.Item key={name}>
      <List.Icon
        name={serviceHealth.icon}
        size='large'
        verticalAlign='middle'
        color={serviceHealth.healthy ? "green" : "red"}
      />
      <List.Content>
        <List.Header>{name}</List.Header>
        <List.Description>
          status: {serviceHealth.status}{" "}
          {serviceHealth.message ? "- " + serviceHealth.message : null}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}
