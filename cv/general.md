---
layout: cv
title: Daniel Paredes's CV
description: cv 
---

# Daniel Paredes
Embedded Machine Learning Engineer

* <a href="mailto:daleonpz@gmail.com">daniel@baremetallics.com</a>
* <a href="https://www.linkedin.com/in/daniel-paredes-2522b91a7/">https://www.linkedin.com/in/daleonpz/</a>
* <a href="http://github.com/daleonpz">Github</a>


---
# Education
`2022-`
__Heinrich-Heine-University Düsseldorf:__ Master programme AI and Data Science.  

`2017-2020`
__University of Applied Science and Arts Dortmund:__ MEng. Embedded Systems for Mechatronics.  
- **Focus:** Systems Engineering.

`2012-2014`
__Pontificia Universidad Catolica del Peru:__ MSc. Digital Signal and Image Processing. 
- **Focus:** Pattern Recognition, Machine Learning, Parallel Computing.

`2006-2011`
__Pontificia Universidad Catolica del Peru:__ BSc. Electronic engineering.


---
# Experience leading teams
`2020`: Al fondo a la derecha podcast. I started and lead this project for 1 year with some friends from USA and Peru. We talked about practical tips based on finances, social psychology, and marketing. We stopped the project because we realized that we were not having fun. I learned how to work with a global team, set tasks to run independently, and delegate responsibilities.

`2015-2017`: InnerMovement Parkour Group. I started this project with a friend of mine but we ended up being 4. I was in charge of our marketing campaign including video and photo shooting, and social media management. And also business development, the main strategy was creating a solid and loyal community through workshops and guided training, and leveraging that to promote our paid events and sell our clothing collection. I learned a lot about finances, budgeting, supply chain and product development, sales, and marketing. 


---
# Languages
- Spanish (native)
- English (C1)
- German (B2)

# References

Available on request.


##################################################################
---
# Employment
`2020-` 
__Qbeyond AG - IoT solutions (Cologne, DE)__ Senior Software Engineer  
__Tools__: Git, CI/CD, Docker, Embedded Linux, Python, C, Test-Driven Development, Building systems (CMake, Make, Rake), Ruby, Python, Bash.  
**Tasks:**  
- Development of the repeater feature in C for linux-based gateways with Wi-Fi (through MQTT) and radio (823 MHz) connectivity.
- Development of the gateway testing unit for the following features: address whitelisting, internal queue, radio communication protocol, management unit of the firmware images to be distributed over the air to the devices connected to the gateway. 
- Setup the continous integration/ continous development environment for linux-based gateways on gitlab-ci/cd. The pipelines include the testing unit, build and deployment. 
- Development of a debugging tool for a Proprietary Android Device based on a Rockchip processor with a disabled Android Debug Bridge. Used Binary Walk and Bash scripts to read the raw flash memory; search, extract and mount the Linux F2FS file system; extract relevant databases and CSV files, and show them in the terminal.  
- Development of a proof of concept (POC) for a client in the IIoT industry with a MSP430 microcontroller from TI, an LPWA module from Quectel and 2G in C. Development of an interface between a pump (UART) and Cloud (MQTT) using AT commands. 
- Development of a gateway based on a DA1468X Dialog microcontroller for communication between other DA1468X microcontrollers and the cloud (REST API).
- Support on the development of an industrial gateway using Python, Embedded Linux, and the Teamviewer API. 
- Responsable for writing the code guidelines for C, dockerizing the toolchain for MPS430 and Dialog MCUs, and dockerizing Ceedling (a C test framework). 
- Responsable for automating the code quality assurance using Docker. Check that the code follows our code guidelines. Control of the code complexity. Inspection of the code using CppCheck. The development was mainly in Bash, Docker, and Gitlab CI/CD.
- Development of a testing script for industrial gateways based on the BACnet Protocol. The script sends commands through a Javascript based interface, and process the output using bash.
- Development of the Build system for industrial gateways using Gitlab CI/CD.
\
&nbsp;

`2018-2019`
__IDiaL Institute (Dortmund, DE)__ Working student  
__Research Center focused on real-time localization (RTLS) of mobile systems with radio technologies__  
__Topics__: Machine Learning, Computer Vision, Embedded Linux.  
**Tasks:**  
- Development a Position based visual servoing (PBVS) system for Rover (a vehicle based on RPI3) using OpenCV and C.The PBVS algorithm uses the computer vision library (OpenCV) to extract the rotation matrix and translation vector of the marker to follow, and estimates the speed required to keep track of the marker. The closer the marker, the slower the Rover moves. [Code](https://github.com/app4mc-rover/rover-app/blob/master/src/examples/MarkerChaser.cpp).  
- Development was done in C++, CMake, Docker, python, Automotive Grade Linux (AGL), Raspbian, OpenCV, and Yocto.  
- Develop a Docker image for the development environment to simplify the engineering workflow.  
- Maintainer of the rover-app repository related to [Eclipse Kuksa project](https://github.com/app4mc-rover/rover-app).  
\
&nbsp;

`2015-2017`
__Wolfram (Peru/USA)__ Research Developer.  
- Development of algorithms for "Wolfram Mathematica" in C++ for language support.
- Added support to language databases for the "Wolfram Alpha" project.
\
&nbsp;

`2014`
__Pontificia Universidad Catolica del Peru (Peru):__ Junior Researcher  
__Topics__: Machine Learning, Computer Vision  
- Development of feature-matching algorithms based on Linear Optimization for computer vision applications. The feature-maching algorithm was modeled as a sparse correlation matrix. The loss function was a combination between the norm-2 and norm-1. The code was done in MATLAB.
\
&nbsp;

`2013 January-April` 
__Embedded Electronic Systems Research (Rouen, FR)__ Intern.  
__Topics__: Machine Learning, Computer Vision, Embedded Systems.   
- Development of a computer vision algorithm to remove occlusions on images and videos from omnidirectional cameras. The development was using machine learning algorithms based on Markov Random Fields in MATLAB, C, and SIMD. [Code](https://github.com/daleonpz/Projects/tree/master/mex/sumSquaredDifferences).
- From this development, two papers were published.
\
&nbsp;


---
# Projects 
`2022` 
[Vowel recognition on a STM32 microcontroller](https://github.com/daleonpz/stwin_AI_vowel_recognition)
- The objective of this project was to train a neural network with 1000 samples for vowel recognition based on Inertial Movement Unit (IMU) measurements, and deploy it on the dev board STEVAL-STWINKT1 from STM32.
- I used PyTorch 1.10.2 to train and evaluate the neural network, ONNX framework from PyTorch to export the learning algorithm and CUBE-AI 7.1.0 to deploy it on an STM32L4 microcontroller.  
- The neural network is based on two layers of convolutional neural networks (CNN), a global average pooling layer, and a fully connected layer. The activation function was Softmax and the loss function was cross-entropy. The model is 13KB in size with an accuracy of  85% on the test set.
- A full description of the project can be found under the following link: [https://github.com/daleonpz/stwin_AI_vowel_recognition](https://github.com/daleonpz/stwin_AI_vowel_recognition).

`2016-2017`
[XXL clothing](https://www.facebook.com/prendasxxl). 
- Small urban sports fashion business I had with a friend of mine. I quit because I had to move to Germany. It was a lot of fun, we started with almost no capital (50USD) and I earned enough to pay for my plane ticket to Germany and cover my expenses for a 3 months.
- I learned about management, accounting, finance, negotiation, marketing, and sales.

`2017-`
[awmstrips.com](https://awmstrips.com/). Personal blog. 

`2017-`
[Baremetallics.com](https://baremetallics.com/). Embedded systems blog.


`2020`
[Al fondo a la derecha podcast](https://alfondoaladerecha.fm/). 
- I started and led this project for 1 year with some friends from the USA and Peru. We talked about practical tips based on finances, social psychology, and marketing.
- I learned about global collaboration and task delegation. 


---
# Research

# Publications

`2013`
 Daniel Paredes, Paul Rodriguez, Nicolas Ragot, "Catadioptric Omnidirectional Image Inpainting via a Multi-Scale Approach and Image Unwrapping", IEEE International Symposium on Robotic and Sensors Environments (ROSE), (Washington, DC, EE. UU.)  pp 67--72, October, 2013. 

`2013`
Daniel Paredes, Paul Rodriguez, "Multi-scale Image Inpainting with Label Selection Based on Local Statistics", European Signal and Image Processing Conference (EUSIPCO), (Marrakesh, Morroco),  pp. 1-5, September, 2013


# Links

<!-- fa are fontawesome, ai are academicons -->
* <i class="fa fa-envelope"></i> <a href="mailto:daleonpz@gmail.com">daleonpz@gmail.com</a><br />
* <i class="fa fa-github"></i> <a href="http://github.com/daleonpz">Github</a><br />
* <i class="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/daniel-paredes-2522b91a7/">LinkedIn</a>

# References

Available on request.

