import './App.css';
import React from 'react';
import { Tooltip } from 'react-tooltip';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f0f8ff',
      }}
    >
      <h1 className="stylish-heading">Hover Over the Links!</h1>

      <div
        className="tooltip-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2vh',
        }}
      >
        <a
          className="bottom-hover"
          data-tooltip-id="swap-tooltip"
          data-tooltip-content="Hi Ninjas"
          data-tooltip-place="bottom"
        >
          Bottom Hover
        </a>
        <a
          className="top-hover"
          data-tooltip-id="swap-tooltip"
          data-tooltip-content="Hi Ninjas"
          data-tooltip-place="top"
        >
          TOP Hover
        </a>
        <a
          className="left-hover"
          data-tooltip-id="swap-tooltip"
          data-tooltip-content="Hi Ninjas"
          data-tooltip-place="left"
        >
          LEFT Hover
        </a>
        <a
          className="right-hover"
          data-tooltip-id="swap-tooltip"
          data-tooltip-content="Hi Ninjas"
          data-tooltip-place="right"
        >
          RIGHT Hover
        </a>
      </div>

      <Tooltip id="swap-tooltip" />
    </div>
  );
}

export default App;
