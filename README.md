# OmniFleet Web UI

[OmniFleet](https://github.com/OmniFleet) is a fictional fleet management service designed around a microservices architecture for the purposes of demonstrating various deployment, troubleshooting, and performance analysis situations.  For more information please look at the project [documentation](https://github.com/OmniFleet/docs)

This component is the react based UI.
# Configuration

This component uses the Goole Maps API.  Because google now requires billing to be enabled for this API, you will need to supply your own API key at runtime using the `GOOGLE_MAPS_API_KEY` environment variable.  **Please remember that this is a client side javascript application.  As such the key you provide will be available to anybody that views the source.**


# Container Execution

```bash
docker run --rm -it -p 8080:80 -e GOOGLE_MAPS_API_KEY=super_secret scbunn/omnifleet-ui:tag
```

# Faults and Issues

This application is designed as a demonstration tool.  As such a number of know faults, issues, performance bugs, etc have been introduced to showcase various tools and troubleshooting techniques.  These known issues are documented here.

| Version  | Description                 | Notes |
| -------- | --------------------------- | ----- |
| v1.0.0.0 | MVP release.  No auth, etc. | None  |


# Attributions
Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [Flaticon](https://www.flaticon.com/)
unless otherwise indicated.
