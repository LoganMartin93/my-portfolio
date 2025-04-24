// src/App.js
import React from "react";
import Card from "./Card";
import Button from "./Button";
import headshot from "./IMG_5519.jpg"; // make sure this file exists in src
import pokeDex from "./photos/pokeDex.png";
import blastoise from "./photos/blastoise.png";
import toDo from "./photos/toDo.png";
import toDoList from "./photos/toDoList.png";
import meet from "./photos/meet.png";
import meet2 from "./photos/meet2.png";
import myFlix from "./photos/myFlix.png";
import myFlixLogin from "./photos/myFlixLogin.png";
import chatAppLogin from "./photos/chatAppLogin.png";
import chatApp from "./photos/chatApp.png";
import profilePage from "./photos/profilePage.png";
function App() {
  return (
    <div className="container mt-5">
      <Card>
        <h1 className="text-primary text-center">Welcome to My Portfolio Page!</h1>

        <div className="d-flex justify-content-center my-4">
          <img
            src={headshot}
            alt="Logan Martin headshot"
            className="rounded-circle border border-3 border-primary"
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
          />
        </div>

        <p className="text-center fs-4">
          Hello! My name is Logan Martin. I'm a junior Full Stack Developer with a Full-Stack Web Development certificate from CareerFoundry and an Associate’s Degree in Computer Science from Diablo Valley College. I build applications using MongoDB, Node.js, Express, Angular, React, HTML, CSS/SCSS, and Bootstrap—and I’m always expanding my skill set. With over 20 years of experience as a musician and more than a decade in sales, I bring strong communication skills, confidence in public speaking, and a natural ability to connect with people. Whether I’m working independently or collaborating with a team, I bring energy, dedication, and creativity to every project. I’m excited to contribute to your team—check out some of my projects below!
        </p>

        <h2 className="text-primary text-center mt-4 underline">Projects</h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1 mt-3">
          <div className="col text-center">
          <img
            src={pokeDex}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <img
            src={blastoise}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <a href="https://loganmartin93.github.io/pokeDex/" target="_blank" rel="noopener noreferrer">
              <Button>PokeDex Live</Button>
            </a>
            <p></p>
            <a href="https://github.com/LoganMartin93/pokeDex" target="_blank" rel="noopener noreferrer">
              <Button>PokeDex on GitHub</Button>
            </a>
            <p>
            This simple JavaScript app is a Pokémon index. You can click each Pokémon listed and a modal will pop up with details and images of each Pokémon. This app fetches data from an API. I have utilized in this project JS, HTML, CSS, Bootstrap, jQuery, and ESLint.
            </p>
          </div>
          <div className="col text-center">
          <img
            src={meet}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <img
            src={meet2}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <a href="https://loganmartin93.github.io/meet/" target="_blank" rel="noopener noreferrer">
              <Button>Meet App Live</Button>
            </a>
            <p></p>
            <a href="https://github.com/LoganMartin93/meet" target="_blank" rel="noopener noreferrer">
              <Button>Meet App on GitHub</Button>
            </a>
            <p>
            Meet App is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
            </p>
          </div>
          <div className="col text-center">
          <img
            src={toDo}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <img
            src={toDoList}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <a href="https://loganmartin93.github.io/to-do-list-app/" target="_blank" rel="noopener noreferrer">
              <Button>To-Do Live</Button>
            </a>
            <p></p>
            <a href="https://github.com/LoganMartin93/to-do-list-app" target="_blank" rel="noopener noreferrer">
              <Button>To-Do on GitHub</Button>
            </a>
            <p>
            This is a simple and interactive to-do list application built with HTML, CSS, JavaScript, and jQuery. Users can add new tasks, mark them as complete by double-clicking, delete tasks with a single click, and reorder tasks using drag-and-drop functionality powered by jQuery UI.
            </p>
          </div>
          <div className="col text-center">
          <img
            src={profilePage}
            style={{ width: "400px", height: "200px", objectFit: "cover" }}
            />
            <a href="https://github.com/LoganMartin93/my-portfolio" target="_blank" rel="noopener noreferrer">
              <Button>Portfolio Live</Button>
            </a>
            <p></p>
            <a href="https://github.com/LoganMartin93/my-portfolio" target="_blank" rel="noopener noreferrer">
              <Button>Portfolio on GitHub</Button>
            </a>
            <p>
            This portfolio site was built with React and Bootstrap 5—because if you’re going to show off your work, it might as well look good doing it. It’s clean, responsive, and modular, just like I pretend my workspace is.
            </p>
          </div>
          <div className="col text-center">
          <img
            src={chatAppLogin}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <img
            src={chatApp}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <a href="https://github.com/LoganMartin93/chatApp" target="_blank" rel="noopener noreferrer">
              <Button>Chat App on GitHub</Button>
            </a>
            <p>
            Chat App provides users with a seamless chat experience where they can send messages, share images, and their location. The app uses Google Firebase for real-time data storage and authentication.
            </p>
          </div>
          <div className="col text-center">
          <img
            src={myFlixLogin}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <img
            src={myFlix}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <a href="https://loganmartin93.github.io/myFlix-client/" target="_blank" rel="noopener noreferrer">
            <Button>MyFlix Live</Button>
            </a>
            <p></p>
            <a href="https://github.com/LoganMartin93/myFlix-client" target="_blank" rel="noopener noreferrer">
              <Button>MyFlix on GitHub</Button>
            </a>
            <p>
            This full-stack application is built using the MERN stack (MongoDB, Express, React, and Node.js). This application interfaces with a REST API to provide users with access to information about different movies, directors, and genres. Users are also able to create and manage their accounts.
            </p>
          </div>
        </div>
      </Card>
      <Card className="mt-5">
  <h2 className="text-primary text-center">Contact Me</h2>
  <p className="text-center fs-5">
    Feel free to reach out or follow me through any of the platforms below!
  </p>
  <ul className="list-unstyled text-center fs-5">
    <li>Email: <a href="mailto:thisisloganmartinsemail@gmail.com">thisisloganmartinsemail@gmail.com</a></li>
    <li>Phone: <a href="tel:+18089878875">(808) 987-8875</a></li>
    <li>GitHub: <a href="https://github.com/LoganMartin93" target="_blank" rel="noopener noreferrer">github.com/LoganMartin93</a></li>
    <li>Linkedin: <a href="https://www.linkedin.com/in/logan-martin-23065425b/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/logan-martin-23065425b/</a></li>
  </ul>
</Card>

    </div>
  );
}

export default App;
