import issos from "../assets/issos.png";

const Project = () => {
  return (
    <div id="projects">
      <div className="flex gap-6 bg-white/20 py-5 px-7 rounded-lg border border-white/20 mb-20 flex-col">
        <img className="w-35 h-20 rounded" src={issos} alt="" />
        <div>
          <h3 className="text-white">Issos Store</h3>
          <p className="text-gray-200">
            Issos Store is a clothing e-commerce platform built with the MERN
            stack, offering a seamless shopping experience. It features secure
            payments, user authentication, and a modern, stylish interface for
            browsing fashion collections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
