let lab = document.querySelector("label");
let inp = document.getElementsByTagName("input");
let tex = document.getElementsByTagName("textarea");
let chatex = document.querySelector("#text2");
let script = "";
let x = 0;
console.clear();
inp[0].onkeydown =  function (e) {
    console.log(e.target.value);
    lab.innerText = e.target.value;
};

codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
// console.log(codeCrewString[0]);

tex[0].onkeydown = function (a) {
    console.log(codeCrewString[x]);
    script = script + codeCrewString[x];
    chatex.value = `${script}`;
    console.log(`${script}`);
    x++;
};