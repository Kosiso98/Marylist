import React from 'react';

function RefreshButton() {
  function handleClick() {
    window.location.reload(true); // Reloads the current page
  }

  return (
    <button 
    style={{borderRadius:'10px',fontSize:'18px', padding:'10px',textAlign:'right',backgroundColor:'purple',color:'white',margin:'10px'}}
    onClick={handleClick}>Refresh</button>
  );
}

export default RefreshButton;
