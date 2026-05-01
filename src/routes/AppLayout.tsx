const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-300 via-indigo-400 to-purple-600 relative ">
      {/* Optional decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AppLayout;
