
import "./Banner.css"
const Banner = () => {
  return (
    <div className="bg-gradient min-h-screen px-6 md:px-0" style={{}}>
      <div className="md:px-8 mx-auto py-24 lg:max-w-6xl grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-between">
        {/* Banner Text Section */}
        <div className="space-y-4 text-center md:text-start">
            <h4 className="text-2xl ">Welcome to</h4>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-[600] font-Poppins">
            E-commers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
              Shopping
            </span>{" "}
           shop available online
          </h2>
          <p className="text-base text-[#616161] font-sans">
            <span className="font-semibold">SHOPPING</span> with us wherever you are
              all products listed in the services and visible on our website have been developed by new Collection aktivitas .
          </p>
          <button className="btn-info btn text-transparent bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]">Shopping Now</button>
        </div>
        {/* Banner Image Section */}
        <div className="grid grid-cols-3 gap-4 justify-center md:justify-end mt-16 md:mt-0">
          <img className="rounded-md mt-16" src="https://partners-online-available.netlify.app/assets/Picture%20(2)-6b9f951f.png" alt="" />
          <img className="rounded-md mb-10" src="https://partners-online-available.netlify.app/assets/Picture%20(2)-6b9f951f.png" alt="" />
          <img className="mt-8 rounded-md" src="https://partners-online-available.netlify.app/assets/Picture%20(2)-6b9f951f.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;