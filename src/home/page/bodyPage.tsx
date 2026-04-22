const BodyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center  mx-56">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Manage Your Tasks Easily
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-200 max-w-xl mb-8">
        Tasky helps you organize, track, and complete your daily tasks in a
        simple and efficient way. Stay productive and never miss anything.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>

        <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition">
          Learn More
        </button>
      </div>

      {/* Features section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
        
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">
            Easy Task Management
          </h3>
          <p className="text-gray-200">
            Create, update, and track your tasks with ease.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">
            Stay Organized
          </h3>
          <p className="text-gray-200">
            Categorize tasks and keep everything in one place.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">
            Boost Productivity
          </h3>
          <p className="text-gray-200">
            Focus on what matters and get things done faster.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BodyPage;