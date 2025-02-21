import "./Testimonials.css";
import next_icon from "../assets/next-icon.png";
import prev_icon from "../assets/back-icon.png";
import user_1 from "../assets/author_1..jpg";  // Fixed extra dot in filename
import user_2 from "../assets/author_2..jpg";  // Fixed extra dot in filename
import user_3 from "../assets/author_3..jpg";  // Fixed extra dot in filename
import user_4 from "../assets/author_4..jpg";  // Fixed extra dot in filename
import naresh from "../assets/naresh.jpg";
import rahul from "../assets/rahul.jpg";
import atithi from "../assets/atithi.jpg";
import pushpendra from "../assets/pushpendra.jpg";
import payal from "../assets/payal.jpg";
import { useState, useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);  // Use state to track the translation

  const slideForward = () => {
    if (tx > -75) {
      setTx(tx - 25); // Move the slider forward
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(tx + 25); // Move the slider backward
    }
  };

  // Update the transform style whenever the tx changes
  if (slider.current) {
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <section className="testimonials-section py-16 px-8 bg-[#F1F8F4]">
      <div className="testimonials-container max-w-7xl mx-auto relative flex items-center justify-between">
        <img
          src={prev_icon}
          alt="Previous"
          className="prev-btn cursor-pointer"
          onClick={slideBackward}
        />
        
        {/* Slider */}
        <div className="slider overflow-hidden w-full">
          <ul ref={slider} className="flex transition-transform duration-500 ease-in-out">
            {/* Testimonial 1 */}
            <li className="testimonial-card bg-white shadow-lg rounded-lg p-6 mx-4 mb-8">
              <div className="user-info">
                <img src={naresh} alt="User 1" className="rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3930]">Naresh </h3>
                  <span className="text-sm text-[#6C7C6B]">Delhi</span>
                </div>
              </div>
              <p className="text-[#6C7C6B] text-base">
              TechWorld Academy, I found a dynamic and supportive environment where I could enhance my skills. The instructors are passionate and always ready to help, and the facilities are top-notch.
              </p>
            </li>

            {/* Testimonial 2 */}
            <li className="testimonial-card bg-white shadow-lg rounded-lg p-6 mx-4 mb-8">
              <div className="user-info">
                <img src={rahul} alt="User 2" className="rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3930]">Rahul </h3>
                  <span className="text-sm text-[#6C7C6B]">Banglore</span>
                </div>
              </div>
              <p className="text-[#6C7C6B] text-base">
              Traveling to exotic destinations opened my eyes to diverse cultures and stunning landscapes. The experiences were unforgettable, and I’ve learned so much about the world and its beauty.
              </p>
            </li>

            {/* Testimonial 3 */}
            <li className="testimonial-card bg-white shadow-lg rounded-lg p-6 mx-4 mb-8">
              <div className="user-info">
                <img src={atithi} alt="User 3" className="rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3930]">Atithi </h3>
                  <span className="text-sm text-[#6C7C6B]">Mahoba</span>
                </div>
              </div>
              <p className="text-[#6C7C6B] text-base">
              Traveling to exotic destinations opened my eyes to diverse cultures and stunning landscapes. The experiences were unforgettable, and I’ve learned so much about the world and its beauty.
              </p>
            </li>

            {/* Testimonial 4 */}
            <li className="testimonial-card bg-white shadow-lg rounded-lg p-6 mx-4 mb-8">
              <div className="user-info">
                <img src={pushpendra} alt="User 4" className="rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3930]">Pushpendra </h3>
                  <span className="text-sm text-[#6C7C6B]">Gwalior</span>
                </div>
              </div>
              <p className="text-[#6C7C6B] text-base">
              Traveling to exotic destinations opened my eyes to diverse cultures and stunning landscapes. The experiences were unforgettable, and I’ve learned so much about the world and its beauty.
              </p>
            </li>
            {/* Testimonial  */}
            <li className="testimonial-card bg-white shadow-lg rounded-lg p-6 mx-4 mb-8">
              <div className="user-info">
                <img src={payal} alt="User 4" className="rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3930]">Payal </h3>
                  <span className="text-sm text-[#6C7C6B]">Gwalior</span>
                </div>
              </div>
              <p className="text-[#6C7C6B] text-base">
              Traveling to exotic destinations opened my eyes to diverse cultures and stunning landscapes. The experiences were unforgettable, and I’ve learned so much about the world and its beauty.
              </p>
            </li>
          </ul>
        </div>

        <img
          src={next_icon}
          alt="Next"
          className="next-btn cursor-pointer"
          onClick={slideForward}
        />
      </div>
    </section>
  );
};

export default Testimonials;
