import ReactGA from 'react-ga';

ReactGA.initialize(
  [
    {
      trackingId: 'UA-163467505-1',
      gaOptions: {
        name: 'pokemon-tracker',
      },
    },
  ],
  {
    debug: true, // process.env.NODE_ENV === 'development',
    alwaysSendToDefaultTracker: false,
  }
);

export default ReactGA;
