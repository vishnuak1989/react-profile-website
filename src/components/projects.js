import React, { Component } from 'react';
import Gallery from './gallery.js';

const projects=()=>(
            <div className="projects">
            <h1>These are the projects I have done</h1>
            <p>You can view all of these in my GitHub</p>
            <h1>This is my technology stack</h1>
            <Gallery />
          </div>
        )

export default projects;