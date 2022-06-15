import personImage from "../../images/person.jpg";
const LowerBody = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <ul>
          <li>
            <img src={personImage} alt="person" />
            <blockquote>
              Tinuola is amazing! The service is outstanding and she is
              extremely knowledgeable. You will not be disappointed!
            </blockquote>
            <cite>-Dianne Hamilton</cite>
          </li>
          <li>
            <img src={personImage} alt="person" />
            <blockquote>
              Absolutley the best place to get glasses and contacts in Brampton.
              HANDS DOWN. I will never go anywhere else. Best customer service,
              knowledge and expertise I've come across.
            </blockquote>
            <cite>-Janelle A</cite>
          </li>
          <li>
            <img src={personImage} alt="person" />
            <blockquote>
              This is the best place for all your eye wear needs. I have been
              coming here for over 15 years and hands down is the best prices
              and service.
            </blockquote>
            <cite>-S Cummings</cite>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LowerBody;
