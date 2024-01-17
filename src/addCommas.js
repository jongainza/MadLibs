import React from "react";

function addCommas({ number }) {
  const numberString = number.toString();
  const formatedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div>
      <p>
        {number} → '{formatedNumber}'
      </p>
    </div>
  );
}

export default addCommas = addCommas;
