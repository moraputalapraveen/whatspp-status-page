import "./index.css";

export default function App() {
  return (
    <div className="body">
      <div className="back" />
      <img className="photo" src="praveen.jpg" type="audio/jpeg"/> 
      <div className="pic" />
      
      <div className="dot" />
      <video  className="status"autoPlay controls
        disablePictureInPicture controlsList="nofullscreen nodownload  noplaybackrate" loop>
     
      < source src="video1.mp4"  type="video/mp4"/>
     </video>
      <div className="box" />
      <h3 className="name">Praveen Anurag</h3>
      <p className="time">Today 04:23 pm </p>
      <input type="text" className="reply" placeholder=" Replay..." />
      <div className="send" />
      <div className="emoji" />
      <div className="blur" />
      <div className="blur1" />
    </div>
  );
}
