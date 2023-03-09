var markers = document.querySelectorAll("a-marker")

let a_visible = false;
let b_visible = false;
let c_visible = false;
let d_visible = false;
let e_visible = false;
let k_visible = false;

for (let i = 0; i < markers.length; i++) {
    markers[i].addEventListener("markerFound", (e) => {
        console.log(`${markers[i].id} found`);
        show_cube(markers[i]);
    })
    markers[i].addEventListener("markerLost", (e) => {
        console.log(`${markers[i].id} lost`);
        hide_cube(markers[i]);
    })
}

function show_cube(marker) {
    if ((marker.id === "A") && !(b_visible || c_visible || d_visible || e_visible || k_visible)) {
        a_visible = true;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: red"></a-box>';
    }
    if (marker.id === "B" && !(a_visible || c_visible || d_visible || e_visible || k_visible)) {
        b_visible = true;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: orange"></a-box>';
    }
    if (marker.id === "C" && !(a_visible || b_visible || d_visible || e_visible || k_visible)) {
        c_visible = true;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: yellow"></a-box>';
    }
    if (marker.id === "D" && !(a_visible || b_visible || c_visible || e_visible || k_visible)) {
        d_visible = true;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: green"></a-box>';
    }
    if (marker.id === "E" && !(a_visible || b_visible || c_visible || d_visible || k_visible)) {
        e_visible = true;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: blue"></a-box>';
    }
    if (marker.id === "K" && !(a_visible || b_visible || c_visible || d_visible || e_visible)) {
        k_visible = true;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: purple"></a-box>';
    }
    // console.log(`MARKER: ${marker.id} | A: ${a_visible}; B: ${b_visible}; C: ${c_visible}; D: ${d_visible}; E: ${e_visible}; K: ${k_visible}`)
}

function hide_cube(marker) {
    if (marker.id === "A") {
        a_visible = false;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: red" transparent="true" opacity="0">';
    }
    if (marker.id === "B") {
        b_visible = false;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: orange" transparent="true" opacity="0">';
    }
    if (marker.id === "C") {
        c_visible = false;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: yellow" transparent="true" opacity="0">';
    }
    if (marker.id === "D") {
        d_visible = false;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: green" transparent="true" opacity="0">';
    }
    if (marker.id === "E") {
        e_visible = false;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: blue" transparent="true" opacity="0">';
    }
    if (marker.id === "K") {
        k_visible = false;
        marker.innerHTML = '<a-box position="0 -1 0" material="color: purple" transparent="true" opacity="0">';
    }
    // console.log(`MARKER: ${marker.id} | A: ${a_visible}; B: ${b_visible}; C: ${c_visible}; D: ${d_visible}; E: ${e_visible}; K: ${k_visible}`)
}