import React from 'react';

const ReadOurTravelBlogs = () => {
  return (
    <div className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Read Our Travel Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1739582766872-0689b7ffb372?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D" 
            alt="Country 1" 
            className="w-full h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Country 1
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group">
          <img 
            src="https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Country 2" 
            className="w-full h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Country 2
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group">
          <img 
            src="https://i.pinimg.com/736x/70/b1/61/70b1610357ccccb21d0f7bef586ad3d4.jpg" 
            alt="Country 3" 
            className="w-full h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Country 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOurTravelBlogs;
