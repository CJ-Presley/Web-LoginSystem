import React, { useEffect } from "react";

const TableBookings = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/r/n06MBy"
      width="100%"
      height="1100"
      className=""
      title="Bean & Brew - Table Bookings"
    />
  );
};

export default TableBookings;
