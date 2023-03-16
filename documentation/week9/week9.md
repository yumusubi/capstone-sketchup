# Week 9 - Hilarious

## Overview

### Team Members

- Gray Assi: UX Lead
- Celine Nakpil: Programming Lead

### Timeline

02 March 2023 - 08 March 2023

### MVP Functions

- [x] Refine cube interaction
- [x] Swap in the Blender cube to the demo
- [x] Troubleshoot making the background opaque/solid

### Stretch Goals
- [ ] Work on making the Figma prototype clickable and interactive for future HX testing

---

## Process

Another successful week! I figured out how to hide the camera feed this week - something that I've been trying to figure out for weeks. I'm rather peeved - it was literally one (1) inline attribute to get it to work and yet it took me nine weeks to figure out.

Here's the updated demo. It's not currently live as literally none of the kinks have been sorted out, but hey - it serves as a nice proof of concept.

![Updated Cube Demo](img/blender-cube-demo.gif)

Here, I am testing the possibility of not having the camera be visible on the canvas. In terms of SketchUp, this simulates a possible interaction within the SketchUp application. It's not perfect - because the laptop camera is front-facing, it is inverted and therefore doesn't provide a direct one to one connection to the user motion. We are still in the process of deciding which kind of interaction is best in terms of whether the cube on screen should mirror the physical motion or if the cube should mimic the motion. It's likely I can use CSS to flip the canvas, but it's something that will simply require testing.

### Whittier Elementary School Visit

On 15 March 2023, Gray and I went to test the cube crafting instructions and interview the kids. We made several enlightening observations:

- The teacher absolutely must complete the assignment before walking the kids through it.
- We need to show the students the final product (the paper cube) before they make it so that they know what the end goal is.
- The AR.js library may not load correctly on secured networks like the school network. Next week, I will look into whether it is possible to load the library locally but to be frank, this is reaching a point outside of our scope. We are tasked to create a functional prototype, not a live, public facing work with a professional degree of polish. 
- The AR.js library may need a higher internet bandwidth to function correctly. This also ties into the above point about loading the library locally.
- The AR.js library may need a specifically well-lit workspace to identify the markers correctly. 
- I will be reducing the size of the marker on the cube to further allow for tolerance of clumsy child hands.

---

## Next Steps

The AR demo needs updating and exploration into the new possibility of mimic-ing vs mirroring the cube, but in order to make a reliably testable version for demo-ing in front of testers, an equally large amount of work needs to be done to simply test the limitations of the AR.js library. 

As I mentioned above, further work on making the demo fully client-facing may be out of scope for our project which is why I will be focussing on developing the prototype to more closely represent possible experiences within the SketchUp application.

### Goals for Next Week

- Test camera inversion on an opaque background.
- Create a cube in Blender that matches the letter rotation on the cube to make the experience more immersive.
- Try to host the AR.js library locally.
- Make the UX prototype fully clickable? This one actually requires quite a bit of work in terms of recreating the SketchUp browser version in figma instead of using a static picture to simulate the background.
