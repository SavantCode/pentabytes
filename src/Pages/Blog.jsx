import React from 'react';

// Sample image of Taj Mahal and author image (replace with your actual image paths)
import tajMahalImage from '../assets/taj-mahal.jpeg';
import authorImage from '../assets/author_1..jpg'; // Replace with actual author image
import payal from "../assets/payal.jpg";

const BlogSection = () => {
  return (
    <section className="bg-[#F1F8F4] py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Blog Content */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-[#2C3930] mb-6">Hiking Off the Beaten Path to Huchuy Qosqo</h2>
          
          {/* Article Image */}
          <img
            src={tajMahalImage}
            alt="Taj Mahal"
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-8"
          />
          
          {/* Author Info */}
          <div className="flex items-center mb-8">
            <img
              src={payal}
              alt="Author"
              className="w-16 h-16 rounded-full border-4 border-[#2C3930] mr-6"
            />
            <div>
              <p className="text-[#2C3930] font-semibold text-xl">Payal Sisodhiya</p>
              <p className="text-sm text-[#6C7C6B]">Travel Blogger</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="text-lg text-[#2C3930] space-y-6">
            <p>“How high is this hike again?” I asked as I panted up the mountain trail, the top seeming so far off in the distance.</p>
            <p>“12,000 feet,” our guide Efrain said cheerily as he and the others from the Amazonas Explorers office glided up the trail. “But it flattens out soon!” he added as a bit of encouragement.</p>
            <p>I was skeptical. When I first reached out to Amazonas regarding my Machu Picchu hike, I asked them to pick a route that was a little off the beaten path and could be done in a day. There are lots and lots to choose from in the Sacred Valley after all; the Incas built over 40,000 kilometers of roads through their empire, and many of them have become hiking trails.</p>
            <p>The full-day hike selected was less traveled than others and would take us to the archaeological site called Huchuy Qosqo (“Little Cusco” in Quechua). Starting an hour outside of Cusco in the small village of Taucca, it goes over some mountains, through abandoned villages and a delightful ravine full of Incan ruins, and winds over a ridge before getting to our final destination: Huchuy Qosqo.</p>
            <p>Beginning in the village, we hiked straight up to our first waypoint. We were at the highest altitude I had ever been in my life (higher than Machu Picchu), and, despite having been in the region for a week, I was feeling it, needing to take frequent breaks while I wheezed my way up the mountain. Thankfully, the sky was overcast and hid the sun while the gentle wind kept me cool.</p>
          </div>
        </div>

        {/* Author Section (Right Side) */}
        <div className="w-96 bg-white rounded-lg shadow-lg p-8">
          {/* Author Info */}
          <div className="flex items-center mb-8">
          <img
              src={payal}
              alt="Author"
              className="w-20 h-20 rounded-full border-4 border-[#2C3930] mr-6"
            />
            <div>
              <p className="text-[#2C3930] font-semibold text-xl">Payal Sisodiya</p>
              <p className="text-sm text-[#6C7C6B]">Travel Blogger</p>
              <button className="mt-4 px-4 py-2 bg-[#2C3930] text-white rounded-full hover:bg-[#3D4C43] transition-all">Follow</button>
            </div>
          </div>

          {/* Explore Articles Section */}
          <div>
            <h3 className="text-xl font-extrabold text-[#2C3930] mb-6">Explore More Articles</h3>

            {/* Article Cards */}
            <div className="space-y-6">
              {/* Article Card 1 */}
              <div className="flex space-x-4 hover:scale-105 transition-transform">
                <img
                  src={tajMahalImage}
                  alt="Article Image"
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div>
                  <p className="font-semibold text-[#2C3930]">The Hidden Beauty of Machu Picchu</p>
                  <p className="text-sm text-[#6C7C6B]">A journey through the breathtaking ruins and stunning views...</p>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="flex space-x-4 hover:scale-105 transition-transform">
                <img
                  src={tajMahalImage}
                  alt="Article Image"
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div>
                  <p className="font-semibold text-[#2C3930]">Uncovering the Secrets of Kyoto</p>
                  <p className="text-sm text-[#6C7C6B]">A deep dive into the cultural wonders of Japan's ancient city...</p>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="flex space-x-4 hover:scale-105 transition-transform">
                <img
                  src={tajMahalImage}
                  alt="Article Image"
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div>
                  <p className="font-semibold text-[#2C3930]">Exploring the Great Wall of China</p>
                  <p className="text-sm text-[#6C7C6B]">An epic journey through history, culture, and nature...</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-[#2C3930] text-white rounded-lg hover:bg-[#3D4C43] transition-all">
                View All Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
