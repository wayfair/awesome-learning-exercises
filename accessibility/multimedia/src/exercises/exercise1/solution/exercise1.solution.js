/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */

`
✅ Exercise 1: Accessible Icons Solution ✅
Check out the CSS file for some updates as well!
`;

const Exercise1 = () => {
  const [shouldShowSurprise, setShouldShowSurprise] = useState(false);
  useShowAltTextAfterMedia();

  return (
    <div className="Exercise1">
      <section>
        <h2>Element 1</h2>
        <p>
          Without adding text next to the icon, how can you make this icon
          accessible to non-sighted users?
        </p>
        <p>
          <button
            // ✅ You can edit the CSS to give this button a different
            // color on hover/focus1
            className="Exercise1-button"
            onClick={() => alert("You've got a new notification!")}
            // ✅ Give this button an title OR aria-label to indicate
            // what happens when it's clicked
            title="Check notifications"
            type="button"
          >
            <NotificationBellIcon className="Exercise1-buttonIllustration" />
          </button>
        </p>
      </section>

      <section classname="Exercise1-section2">
        <h2>Element 2</h2>
        <p>How would you make this decorative icon accessible?</p>
        <p>
          {/* ✅ This just needs alt="" to indicate that the image
                 is decorative and can be skipped
                 by assistive technology */}
          <p>
            <img
              alt=""
              src="img/a11y.svg"
              className="Exercise1-decorativeIllustration"
            />{" "}
            The A11y icon is a universal representation of accessibility in
            digital and print media!
          </p>
        </p>
      </section>

      <section>
        <h2>Element 3</h2>
        <p>Evaluate this button to determine how best to make it accessible.</p>
        <p>
          <button
            className="Exercise1-button"
            onClick={() => setShouldShowSurprise((value) => !value)}
            type="button"
          >
            {/* ✅ Adding a label to this icon would be repetitive, since it has
              text right next to it. Providing a blank label is sufficient */}
            <PartyIcon
              aria-label=""
              role="img"
              className="Exercise1-buttonIllustration"
            />{" "}
            {shouldShowSurprise ? "End" : "Initiate"} surprise
          </button>
        </p>
      </section>

      {/*`️⬆️⬆️⬆️⬆️ Edit code above this line! ⬆️⬆️⬆️⬆️⬆️*/}
      {shouldShowSurprise && <Surprise />}
    </div>
  );
};

const NotificationBellIcon = (props) => (
  <svg fill="white" viewBox="0 0 611.999 611.999" {...props}>
    <path d="M570.107 500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203C381.969 34 347.883 0 306.001 0c-41.883 0-75.968 34.002-76.121 75.849-70.682 29.804-120.425 99.801-120.425 181.203v84.578c-.046 3.181-2.522 129.251-67.561 158.622a17.257 17.257 0 007.103 32.986h164.88c3.38 18.594 12.172 35.892 25.619 49.903 17.86 18.608 41.479 28.856 66.502 28.856 25.025 0 48.644-10.248 66.502-28.856 13.449-14.012 22.241-31.311 25.619-49.903h164.88a17.26 17.26 0 0016.872-13.626 17.25 17.25 0 00-9.764-19.358zm-85.673-60.395c6.837 20.728 16.518 41.544 30.246 58.866H97.32c13.726-17.32 23.407-38.135 30.244-58.866h356.87zM306.001 34.515c18.945 0 34.963 12.73 39.975 30.082-12.912-2.678-26.282-4.09-39.975-4.09s-27.063 1.411-39.975 4.09c5.013-17.351 21.031-30.082 39.975-30.082zM143.97 341.736v-84.685c0-89.343 72.686-162.029 162.031-162.029s162.031 72.686 162.031 162.029v84.826c.023 2.596.427 29.879 7.303 63.465H136.663c6.88-33.618 7.286-60.949 7.307-63.606zm162.031 235.749c-26.341 0-49.33-18.992-56.709-44.246h113.416c-7.379 25.254-30.364 44.246-56.707 44.246z" />
    <path d="M306.001 119.235c-74.25 0-134.657 60.405-134.657 134.654 0 9.531 7.727 17.258 17.258 17.258 9.531 0 17.258-7.727 17.258-17.258 0-55.217 44.923-100.139 100.142-100.139 9.531 0 17.258-7.727 17.258-17.258-.001-9.532-7.728-17.257-17.259-17.257z" />
  </svg>
);

const A11yIcon = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M 16 4 C 9.3844277 4 4 9.3844277 4 16 C 4 22.615572 9.3844277 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844277 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.534692 21.534692 26 16 26 C 10.465308 26 6 21.534692 6 16 C 6 10.465308 10.465308 6 16 6 z M 16 8 C 14.895431 8 14 8.8954305 14 10 C 14 11.104569 14.895431 12 16 12 C 17.104569 12 18 11.104569 18 10 C 18 8.8954305 17.104569 8 16 8 z M 10.21875 12.03125 L 9.78125 13.96875 L 14 14.90625 L 14 18.96875 L 14 19 L 13.03125 23.8125 L 14.96875 24.1875 L 15.96875 19.1875 L 16 19.09375 L 16.03125 19.1875 L 17.03125 24.1875 L 18.96875 23.8125 L 18 19 L 18 18.96875 L 18 14.90625 L 22.21875 13.96875 L 21.78125 12.03125 L 17.5 13 L 17.4375 13 L 14.5625 13 L 14.5 13 L 10.21875 12.03125 z"></path>
  </svg>
);

// Party icon source:
// https://www.flaticon.com/authors/pongsakornred
const PartyIcon = (props) => (
  <svg fill="white" viewBox="0 0 480.187 480.187" {...props}>
    <path d="M327.417 301.136a8 8 0 00-10.238-4.814 8 8 0 00-4.697 10.542c7.296 19.04 7.824 33.6 1.44 40-7.744 7.728-27.032 5.312-51.608-6.448a342.188 342.188 0 01-88.552-66.08c-62.664-62.672-88.52-124.168-72.528-140.16a21.855 21.855 0 0118.096-4.224 8 8 0 001.552-15.92 36.841 36.841 0 00-30.96 8.8c-29.312 29.304 15.496 105.744 72.528 162.784a357.784 357.784 0 0092.96 69.192 157.602 157.602 0 0019.296 7.72l-56.84 21.552c-75.9-28.856-130.539-96.144-143.2-176.352a8.001 8.001 0 00-15.808 2.48c1.256 8 2.936 16 4.992 23.824a242.84 242.84 0 00132.4 158.224l-93.552 35.4a7.859 7.859 0 00-1.6-1.904 111.465 111.465 0 01-41.28-77.464l-3.712-44.952a7.904 7.904 0 00-8.416-7.357c-.083.006-.166.012-.248.021a8 8 0 00-7.336 8.664l3.776 44.936a127.437 127.437 0 0042.328 84.28l-66.736 25.264 12-49.248a8.003 8.003 0 00-5.88-9.672 8.003 8.003 0 00-9.672 5.88l-15.608 64a7.999 7.999 0 0010.608 9.384l296-112c.471-.23.916-.509 1.328-.832a31.078 31.078 0 0016.984-8.472c7.927-7.928 14.751-24.272 2.183-57.048z" />
    <path d="M402.913 280.504a263.445 263.445 0 00-135.544-13.16l-28.584 4.8a8 8 0 002.64 15.776l28.576-4.76a247.258 247.258 0 01127.296 12.368 8.236 8.236 0 002.808.472 8 8 0 002.808-15.496zM431.353 156.56a8 8 0 00-10.664-3.784l-168 80a8 8 0 00-3.784 10.664 8 8 0 0010.662 3.785l.002-.001 168-80a8 8 0 003.784-10.664zM194.377 54.296a8 8 0 10-15.616 3.472 223.782 223.782 0 01-11.944 135.272l-11.632 27.912a8 8 0 004.296 10.432 8 8 0 0010.456-4.304l11.64-27.88a239.682 239.682 0 0012.8-144.904zM440.105 288c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16zM248.105 64c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 32a8 8 0 110-16 8 8 0 010 16z" />
    <circle cx="176.105" cy="16" r="16" />
    <path d="M400.105 40a8 8 0 00-8 8v8a8 8 0 0016 0v-8a8 8 0 00-8-8zM400.105 0a8 8 0 00-8 8v8a8 8 0 0016 0V8a8 8 0 00-8-8zM424.105 24h-8a8 8 0 000 16h8a8 8 0 000-16zM384.105 24h-8a8 8 0 000 16h8a8 8 0 000-16zM344.105 87.832h-40.168a8 8 0 00-8 8V136a8 8 0 008 8h40.168a8 8 0 008-8V95.832a8 8 0 00-8-8zm-8 40.168h-24.168v-24.168h24.168V128zM285.826 154.636a8 8 0 00-11.073-.58l-80 72a8 8 0 00-.592 11.296 8 8 0 0011.296.592l80-72a8 8 0 00.369-11.308zM432.105 184a8 8 0 00-8 8v8a8 8 0 0016 0v-8a8 8 0 00-8-8zM466.049 182.624l-5.656-5.656a8 8 0 00-11.312 11.312l5.656 5.656a8 8 0 0011.312-.196 8 8 0 000-11.116zM472.105 152h-8a8 8 0 000 16h8a8 8 0 000-16zM465.853 126.064a8.001 8.001 0 00-11.116 0l-5.656 5.656a8 8 0 005.656 13.656 8 8 0 005.656-2.344l5.656-5.656a8 8 0 00-.196-11.312zM432.105 112a8 8 0 00-8 8v8a8 8 0 0016 0v-8a8 8 0 00-8-8zM415.129 131.72l-5.656-5.656a8 8 0 00-11.312 11.312l5.656 5.656a8 8 0 0011.312-.196 8 8 0 000-11.116zM95.713 34.592a8 8 0 00-6.456-5.44l-23.48-3.416L55.305 4.464a8.328 8.328 0 00-14.352 0l-10.52 21.272-23.48 3.416a8 8 0 00-4.448 13.64l16.984 16.56-4 23.384A8 8 0 0027.105 91.2l21-11.072 21 11.04a8 8 0 0011.608-8.432l-4-23.384 16.992-16.56a7.998 7.998 0 002.008-8.2zm-33.208 16.24a8 8 0 00-2.304 7.072l1.984 11.56L51.825 64a8.002 8.002 0 00-7.44 0l-10.4 5.456 1.984-11.56a7.998 7.998 0 00-2.264-7.064l-8.408-8.184 11.608-1.688a7.998 7.998 0 006.024-4.376l5.176-10.504 5.184 10.504a8 8 0 006.016 4.376l11.6 1.688-8.4 8.184zM453.081 401h-.032l-3.296-4.944a120.724 120.724 0 00-80.328-51.944 8 8 0 00-2.64 15.776 104.667 104.667 0 0161.048 34.032 47.198 47.198 0 00-32 21.976c-8.616 15.431-3.091 34.924 12.34 43.54 15.431 8.616 34.924 3.091 43.54-12.34a46.396 46.396 0 005.192-20.536 39.088 39.088 0 011.752 41.544 8 8 0 1013.968 7.792c14.648-26.164 6.02-59.225-19.544-74.896zm-15.32 38.288c-4.27 7.737-14.003 10.547-21.739 6.277s-10.547-14.003-6.277-21.739l.072-.13a29.977 29.977 0 0121.664-14.096 8.135 8.135 0 014 .928c6.752 3.768 7.112 20.104 2.28 28.76z" />
  </svg>
);

` 
✅✅✅ 

  When you're done with Exercise 1, click on
  "Exercise 2" in the browser! Then, open 
  'exercises/exercise2/exercise2.js' to
  begin the next exercise!
  
✅✅✅
`;

// ⛔ You should not need to modify anything
// ⛔ below this line
import React, { useState } from "react";
import Surprise from "react-confetti";
import useShowAltTextAfterMedia from "../../../use_show_alt_text";
import "./exercise1.solution.css";

export default Exercise1;
