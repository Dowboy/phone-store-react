import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="red">Seb Phones</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Orders are shipped within 1-2 business days."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="mobile-screen" />}
              title="High Volume"
              para="We have a high volume of phone stock. No running out anytime soon."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get access to modern phones for an affordable price tag."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
