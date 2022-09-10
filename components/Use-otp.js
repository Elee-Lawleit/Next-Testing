import React, { useEffect } from "react";
import MojoAuth from "mojoauth-web-sdk";

const UseOtp = (props) => {
  useEffect(() => {
    const mojoauth = new MojoAuth("test-f756788a-d9b1-4946-a2c9-419bdbdd18ec", {
      source: [{ type: "email", feature: "otp" }],
    });

    mojoauth
      .signIn()
      .then((payload) => {
        props.setPayload(payload);
        document.getElementById("mojoauth-passwordless-form").remove();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center align-middle">
      <div id="mojoauth-passwordless-form" className="absolute z-50" />
      {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
    </div>
  );
};

export default UseOtp;
