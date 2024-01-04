import React, { useEffect } from "react";

const TestComponent = () => {

    const first = () => { console.log('lest see what happen') }

    useEffect(() => first(), [])
  return <div>TestComponent</div>;
};

export default TestComponent;
