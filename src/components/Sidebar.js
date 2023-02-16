import {
  FaHome,
  FaTeamspeak,
  FaProjectDiagram,
  FaCalendar,
  FaDochub,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar inactive"}>
      <h2>
        Modal/<span style={{ color: "orange" }}>Sidebar</span>
      </h2>
      <ul className="menu">
        <li>
          <a href="">
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <FaTeamspeak />
            </span>
            <span>Team</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <FaProjectDiagram />
            </span>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <FaCalendar />
            </span>
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <FaDochub />
            </span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
      <ul className="social-media-icons">
        <li>
          <a href="">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <FaBehance />
          </a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <FaTimes className="btn-close" onClick={() => setSidebar(false)} />
    </div>
  );
};

export default Sidebar;
