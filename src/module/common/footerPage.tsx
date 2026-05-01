const FooterPage = () => {
  return (
    <footer className="w-full mt-20 bg-white/10 backdrop-blur-md text-white py-8 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1">
        {/* Left: Logo + description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Tasky</h2>
          <p className="text-sm text-gray-200 mt-1">
            Manage your tasks in a simple and efficient way.
          </p>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-200 text-center md:text-right">
          © {new Date().getFullYear()} Tasky. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
