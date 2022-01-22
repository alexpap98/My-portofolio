import {
  NotFoundContainer,
  NotSpan,
  Not404,
  NotText,
} from "./NotFoundElements";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CountUp from "react-countup";

function NotFound() {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 5000);
  });

  return (
    <>
      <NotFoundContainer>
        <Not404>
          <NotSpan>404</NotSpan>
          <NotSpan>404</NotSpan>404
        </Not404>
        <NotText>Page Not Found</NotText>

        <h4>You will redirect to home in</h4>
        <CountUp start={5} end={0} duration={5}/>
      </NotFoundContainer>
    </>
  );
}

export default NotFound;
