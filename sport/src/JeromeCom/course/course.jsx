import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './course.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Head from './components/head';
import Scroll from './components/scroll';
import Body from './components/body';
import Footer from '../footer';



AOS.init();

class Course extends Component {
    state = { } ;
    render() { 
        return (
            <div>
                <Head />
                <Scroll />
                <Body />
                <Footer />
            </div>
        );
    }
}
 
export default Course;