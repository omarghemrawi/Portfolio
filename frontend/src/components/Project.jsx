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

      <div className="flex gap-6 bg-white/20 py-5 px-7 rounded-lg border border-white/20 mb-20 flex-col">
        <div>
          <h3 className="text-white">X-O Game</h3>
          <p className="text-gray-200">
           X-O Game is a real-time multiplayer Tic-Tac-Toe application built with the MERN stack,
            offering interactive gameplay and live chat features. 
            It includes secure user authentication,
            seamless game synchronization, and a modern, responsive interface for an engaging player experience.
          </p>
        </div>
      </div>

         <div className="flex gap-6 bg-white/20 py-5 px-7 rounded-lg border border-white/20 mb-20 flex-col">
        <div>
          <h3 className="text-white">Task Manager</h3>
          <p className="text-gray-200">
          Task Manager is a productivity web application built with the MERN stack, designed to help users manage and prioritize tasks efficiently.
            It features secure authentication, real-time notifications, and a clean, responsive UI for creating, updating, and tracking tasks with ease.
            Each task includes AI-powered priority suggestions to enhance decision-making and boost productivity.
          </p>
        </div>
      </div>
        
    </div>
  );
};

export default Project;
