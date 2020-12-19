import React, { useState, Fragment } from "react";
import { Image, Card, Icon, Label, Modal, Header } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const BusMarker = ({ onClick, text }) => (
  <Fragment>
    <div onClick={onClick}>
      <img src='/assets/bus-side-view.png' alt='bus' />
      <Label color='blue'>{text}</Label>
    </div>
  </Fragment>
);

const defaultLocation = {
  center: {
    lat: 47.6038321,
    lng: -122.3300624,
  },
  zoom: 16,
};

var googleApiToken = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function FleetTracker({ telemetry }) {
  const [selectedObj, setSelectedObj] = useState(null);
  const [open, setOpen] = useState(false);

  const markers = telemetry.map((data) => {
    return (
      <BusMarker
        key={data.objectId}
        lat={data.position.latitude}
        lng={data.position.longitude}
        text={data.objectId}
        onClick={() => {
          console.log(data);
          setSelectedObj(data);
          setOpen(true);
        }}
      />
    );
  });

  return (
    <Fragment>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Icon name='map marker' size='large' style={{ float: "right" }} />
            <Card.Header>Realtime Fleet Location</Card.Header>
            <Card.Meta>Active Fleet</Card.Meta>
            <Card.Description>
              <div style={{ height: "calc(100vh - 20em)", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: googleApiToken,
                  }}
                  center={defaultLocation.center}
                  zoom={defaultLocation.zoom}
                >
                  {markers}
                </GoogleMapReact>
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>tracking {telemetry.length} objects</p>
          </Card.Content>
        </Card>
      </Card.Group>
      {selectedObj && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(false)}
          open={open}
          dimmer='blurring'
          closeIcon
        >
          <Modal.Header>
            <Icon name='bus' size='huge' />
            {selectedObj.source} - {selectedObj.objectId}
          </Modal.Header>
          <Modal.Content image>
            <Image size='small' src='/assets/satellite-color.svg' wrapped />
            <Modal.Description>
              <Header>
                {selectedObj.source} fleet object {selectedObj.objectId} [
                {selectedObj.status}]
              </Header>
              <p>
                This object was last seen at{" "}
                <strong>
                  {selectedObj.position.latitude},{" "}
                  {selectedObj.position.longitude}
                </strong>{" "}
                at <strong>{selectedObj.updated}</strong>.
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      )}
    </Fragment>
  );
}
