import "./LazyLoader.css";

const LazyLoader = () => {
  return (
    <div className="w-screen h-screen background-login flex flex-col items-center justify-center overflow-hidden">
      <div className="wrapper-loader mb-8">
        <div className="circle-loader"></div>
        <div className="circle-loader"></div>
        <div className="circle-loader"></div>
        <div className="shadow-loader"></div>
        <div className="shadow-loader"></div>
        <div className="shadow-loader"></div>
      </div>
      {/* <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">buttons</span>
            <span className="word">forms</span>
            <span className="word">switches</span>
            <span className="word">cards</span>
            <span className="word">buttons</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LazyLoader;
