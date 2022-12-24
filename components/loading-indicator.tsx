const LoadingIndicator = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-2 border-solid border-gray-700 rounded-full p-2 box-border">
        <p>.</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
