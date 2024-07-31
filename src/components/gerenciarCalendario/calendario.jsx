import React, { useState } from "react";

const CLIENT_ID =
  "644077428903-rikmeoc5ngel15q6sebqju5mobc478l6.apps.googleusercontent.com"; // Substitua com seu Client ID

const GoogleCalendar = () => {
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [authToken, setAuthToken] = useState("");

  const handleLoginSuccess = (response) => {
    setAuthToken(response.tokenId);
    loadGapi();
  };

  const handleLoginError = (error) => {
    console.error("Login failed:", error);
  };

  const loadGapi = () => {
    if (!gapiLoaded) {
      gapi.load("client:auth2", initClient);
      setGapiLoaded(true);
    }
  };

  const initClient = () => {
    gapi.client
      .init({
        apiKey: "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", // Substitua com sua API Key
        clientId: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/calendar",
      })
      .then(() => {
        console.log("GAPI client initialized.");
        listUpcomingEvents();
      });
  };

  const listUpcomingEvents = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        gapi.client.calendar.events
          .list({
            calendarId: "primary",
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: "startTime",
          })
          .then((response) => {
            const events = response.result.items;
            console.log("Upcoming events:", events);
          })
          .catch((error) => {
            console.error("Error retrieving events:", error);
          });
      });
  };

  return (
    <div>
      <h2>Google Calendar Integration</h2>
      {!authToken ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          scope="https://www.googleapis.com/auth/calendar"
        />
      ) : (
        <button onClick={listUpcomingEvents}>List Upcoming Events</button>
      )}
    </div>
  );
};

export default GoogleCalendar;
