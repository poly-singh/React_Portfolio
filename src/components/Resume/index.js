import React from "react";
function Resume() {
    return(
        <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
      <div>
        <div class="mt-5">
          <h2 className="top-title">Poly Singh</h2>
          <ul>
            <li>
            Full-Stack web developer with previous experience in Build and 
            Release Engineering excited to build more intuitive and user-friendly websites.
            </li>
          </ul>
          <p class="mt-5">
            <a href="https://www.linkedin.com/in/poly-singh/ ">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </p>
          <a
            href="../../../assets/Poly_Singh_Resume.docx"
            class="link"
          >
            Download Resume
          </a>
        </div>
    </div>

    <div class="justify-content-center mt-5">
        <div>
            <h2 className="top-title">Proficiencies</h2>
            <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;

