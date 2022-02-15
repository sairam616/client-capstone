import personImage from "../images/person.jpg";
const LowerBody = () => {
    return(
        <section className="testimonials-section">
        <div className="container">
          <ul>
            <li>
              <img src={personImage} alt="person" />
              <blockquote>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id
                dolorum aperiam. Nemo deleniti porro voluptatibus eius
                accusamus, sequi minus pariatur magni numquam eligendi at
                distinctio eaque doloribus blanditiis perferendis.
              </blockquote>
              <cite>-Jane Doe</cite>
            </li>
            <li>
              <img src={personImage} alt="person" />
              <blockquote>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id
                dolorum aperiam. Nemo deleniti porro voluptatibus eius
                accusamus, sequi minus pariatur magni numquam eligendi at
                distinctio eaque doloribus blanditiis perferendis.
              </blockquote>
              <cite>-Jane Doe</cite>
            </li>
            <li>
              <img src={personImage} alt="person" />
              <blockquote>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id
                dolorum aperiam. Nemo deleniti porro voluptatibus eius
                accusamus, sequi minus pariatur magni numquam eligendi at
                distinctio eaque doloribus blanditiis perferendis.
              </blockquote>
              <cite>-Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>
    );
};

export default LowerBody;