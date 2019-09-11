let tex = document.querySelector("textarea");
codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
// console.log(codeCrewString[0]);
let x = 0;
let scrpit = "";
tex.onkeydown = function (e) {
	// !! : update the value of your label 
    e.target.value = codeCrewString[x];
    // console.log(e.target.value);
    scrpit = scrpit + e.target.value;
    console.log(scrpit);
    // !! : update the inner text of your label 
    tex.innerText = scrpit;
    x++;
};