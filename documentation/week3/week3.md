# Week 3 - Learning A-Frame

## Overview

### Team Members

- Gray Assi: UX Lead
- Celine Nakpil: Programming Lead

### Timeline

02 February 2023 - 08 February 2023

### MVP Functions

- [x] Load and track multiple tags on the camera at the same time
- [x] Swap marker tag 'Y' for 'K' because 'Y' and 'A' are too similar in form
- [x] Update the Blender model with new letter
- [x] Make documentation .gifs
- [x] Place the blender cube into the A-frame scene
- [ ] Begin prototyping custom AR.js events to manipulate cube rotation position

### Stretch Goals

- [ ] Figure out how to hide the live camera feed, either by covering it with another layer or removing it completely
- [ ] Refine the Blender model to match SketchUp branding
- [ ] Style A-Frame to mimic SketchUp online workspace

---

## Process

### Debugging AR Markers

After loading all the markers into the project, the algorithm kept confusing 'Y' and 'A'. Thus, we swapped 'Y' for 'K'. We might need to swap 'E' or 'B' since their character forms are also very similar, but we'll cross that bridge when we get to it.

![Updated cube template with 'K'](img/updated-cube-template.png)

### Beginning Dev on Software

With the hardware interaction having advanced enough to test out the rest of our interaction, it's time to start focusing on producing the interactions that we actually want our users to have. This means creating a scene in A-Frame, independent of the AR camera frame and prototyping custom AR.js events to affect the rotational data of objects in that scene. Hopefully, this will be as simple as importing the blender cube into A-frame as an obj, and using if statements to control its rotation.

### Issues with A-frame and AR.js

After a considerable amount of time spent on testing and failing to get the interactions I wanted from A-Frame and AR.js, it seems like I need to find a different solution where I have more control. Ergo, the most ideal interaction would be being able to scan one side of the paper cube and use some basic if statements to say "if this tag is shown, orient the object in the scene in this particular way".

AR.js is extremely powerful, but being a library geared specifically towards augmented reality means that it is also limited to *only* be optimal for augmented reality use, which is not really applicable for this project. I have discovered that the interaction we are trying to create is somehow too simple for AR.js. This means that I spent the week fighting with the library, trying to hack it to do things it was arguably never intended to do.

I haven't yet figured out how to hide the camera feed (which looks like it's impossible, as the video feed is "appended" to the body of the page after everything else is loaded) or change its canvas size on the screen to only take up half the space to leave space for another a-frame instance (which I have been informed is actually impossible because most webpages only support one instance of webgl at a time). So, I think it's time to consider alternative solutions.

### Next Steps

There are a few solutions I'm looking into including changing the fundamental interaction to better suit augmented reality (camera scans static tag, object appears "in" the video reality).

1. Dig into the AR.js, as it is an open-source project, and repurpose the marker recognition algorithm. This effectively means modifying a chunk of the AR.js library by paring down functionality.
2. Spend a little more time "hacking" the loading process of AR.js into A-Frame to interrupt the loader the appends the video feed. This is technically part of above, I guess.
3. Test AR.js with Three.js. A-frame is built on top of Three.js and removes some granular interactions. Perhaps I can get a similar interaction to what I'm looking for with said interactions.
4. Quit trying to use AR.js and use a combination of A-frame/Three.js and a basic QR/Barcode reader. Might run into the same issue of getting data "out" of the QR reader library and into the A-frame side.
5. If all the above fail, rethink the interaction of the cube with online, perhaps stratifying more towards a traditional AR.js approach.

This is, after all, the prototyping phase. Since I'm making more of a proof of concept prototype, it's good that I'm finding the limitations of the software now instead of handing a dud to the SketchUp Dev teams.

---

## Sources

- [A-Frame rotating StackOverflow](https://stackoverflow.com/questions/57757101/how-to-make-spinning-rotate-an-entity-in-a-frame)
