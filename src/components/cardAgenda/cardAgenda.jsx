import React, { useEffect, useState } from 'react';

const CLIENT_ID = '1000453594918-ppluvv8due4uloi23i1i6mp6vpdh4vcn.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB5W0cAAiiqS_J7l5ua3C84aOHAprxNMKU';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

function GoogleCalendar() {
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [tokenClient, setTokenClient] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const gapiLoaded = () => {
      window.gapi.load('client', initializeGapiClient);
    };

    const gisLoaded = () => {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });
      setTokenClient(client);
      setGisInited(true);
    };

    const initializeGapiClient = async () => {
      await window.gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
      setGapiInited(true);
    };

    const script1 = document.createElement('script');
    script1.src = 'https://apis.google.com/js/api.js';
    script1.onload = gapiLoaded;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://accounts.google.com/gsi/client';
    script2.onload = gisLoaded;
    document.body.appendChild(script2);
  }, []);

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      await listUpcomingEvents();
    };

    if (window.gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const handleSignoutClick = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
      setEvents([]);
    }
  };

  const listUpcomingEvents = async () => {
    try {
      const response = await window.gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });
      const events = response.result.items;
      setEvents(events);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h4>Google Calendar API Quickstart</h4>
      <button onClick={handleAuthClick}>Authorize</button>
      <button onClick={handleSignoutClick}>Sign Out</button>
      <hr />
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=your_time_zone"
        style={{ border: 0, width: '100%', height: '600px' }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>{event.summary}</strong>
                <br />
                {event.start.dateTime || event.start.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GoogleCalendar;