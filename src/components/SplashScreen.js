import React from "react";
import "../styles/splashScreen.css";

export const SplashScreen = () => {
  return (
    <section id="splash" className="splash is-fullscreen">
      <div>
        <svg
          className="logo-svg-container splash-logo"
          width="70mm"
          height="70mm"
          viewBox="0 0 70 70"
        >
          <g fillOpacity="1" strokeDasharray="none" strokeOpacity="1">
            <path
              className="logo-letter-one splash-letter-one"
              fill="#3e8ed0"
              stroke="#3e8ed0"
              strokeWidth="1"
              d="M17.357 10.5h14.996a1.993 1.993 0 011.993 1.992v.015a1.99 1.99 0 01-1.99 1.991l-14.157-.002a.853.853 0 00-.647 1.407l16.142 18.839a1.171 1.171 0 010 1.524L17.56 55.085a.859.859 0 00.651 1.417H32.35a2 2 0 012 2.003v.005a1.992 1.992 0 01-1.992 1.99H17.325a4.974 4.974 0 01-4.974-4.974h0a7.018 7.018 0 012.198-5.1l15.2-14.367a.777.777 0 000-1.129L14.522 20.546a6.932 6.932 0 01-2.172-5.037 5.007 5.007 0 015.007-5.008z"
            />
            <path
              className="logo-letter-two splash-letter-two"
              fill="#ce7a34"
              stroke="#ce7a34"
              strokeWidth="1"
              d="M52.742 10.5H37.746a1.993 1.993 0 00-1.993 1.992v.015a1.99 1.99 0 001.99 1.991l14.157-.002a.853.853 0 01.647 1.407L36.405 34.742a1.171 1.171 0 000 1.524l16.133 18.819a.859.859 0 01-.652 1.417H37.75a2 2 0 00-2 2.003v.005a1.992 1.992 0 001.992 1.99h15.031a4.974 4.974 0 004.975-4.974h0a7.018 7.018 0 00-2.198-5.1L40.35 36.06a.777.777 0 010-1.129l15.227-14.384a6.932 6.932 0 002.172-5.037 5.007 5.007 0 00-5.007-5.008z"
            />
            <path
              className="logo-line"
              fill="#868482"
              stroke="#868482"
              strokeWidth="0.5"
              d="M35.977 17.698c-1.455 11.225-1.022 22.683.01 34.602a.18.18 0 01-.18.198 35.009 35.009 179.895 01-.357.001l-1.253.002h0c-.111 0-.19-.089-.176-.199 1.427-11.526 1.344-23.066.001-34.606a.175.175 0 01.173-.199 7.589 7.589 179.938 01.163 0l1.44-.001h.004c.111.001.19.091.175.202z"
              display="inline"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
};
