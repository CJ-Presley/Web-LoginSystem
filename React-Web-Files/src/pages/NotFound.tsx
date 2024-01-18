import { useEffect } from "react";

function Error() {
  useEffect(() => {
    document.title = "Bean & Brew | 404";
  });
  return (
    <>
      <h1 className="my-5 py-5">
        Error 404:
        <br />
        Page Not Found
      </h1>
    </>
  );
}
export default Error;
