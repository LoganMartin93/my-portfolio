// src/App.js
import React from "react";
import Card from "./Card";
import Button from "./Button";
import headshot from "./IMG_5519.jpg"; // make sure this file exists in src

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
            <a href="https://github.com/LoganMartin93/myFlix-client" target="_blank" rel="noopener noreferrer">
              <Button>MyFlix</Button>
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/LoganMartin93/pokeDex" target="_blank" rel="noopener noreferrer">
              <Button>PokeDex</Button>
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/LoganMartin93/chatApp" target="_blank" rel="noopener noreferrer">
              <Button>Chat App</Button>
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/LoganMartin93/meet" target="_blank" rel="noopener noreferrer">
              <Button>Meet App</Button>
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/LoganMartin93/to-do-list-app" target="_blank" rel="noopener noreferrer">
              <Button>To-Do</Button>
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/LoganMartin93/my-portfolio" target="_blank" rel="noopener noreferrer">
              <Button>Portfolio</Button>
            </a>
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
    <li>X: <a href="https://x.com/Logan4127726042" target="_blank" rel="noopener noreferrer">@Logan4127726042</a></li>
    <li>Medium: <a href="https://medium.com/@thisisloganmartinsemail" target="_blank" rel="noopener noreferrer">@thisisloganmartinsemail</a></li>
  </ul>
</Card>

    </div>
  );
}

export default App;
