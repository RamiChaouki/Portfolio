//TYPE WRITER
const typeWriter = (toWrite, isDelete,element) => {
    const typewrite=document.getElementById(element);
    if (!isDelete) {
        const fn = async (position = 0) => {
            if (position < toWrite.length) {
                typewrite.innerHTML += toWrite.charAt(position);
                await new Promise(resolve => setTimeout(resolve, Math.random()*100 + 50));
                return fn(position+1);
            }
        };
        return () => fn(0);
    } else {
        const fn = async (position) => {
            if (position < toWrite.length) {
            
                typewrite.innerHTML = typewrite.innerHTML.slice(0,-1);
                await new Promise(resolve => setTimeout(resolve, 40));
                return fn(position + 1);
            }
        };
        return () => fn(0);
    }
};

Promise.resolve()
.then(typeWriter("Hi, my name is Rami    ",false, "typewriteTop"))
.then(typeWriter("I am a Professional Googler   ",false,"typewriteBottom"))
.then(typeWriter("Professional Googler   ",true,"typewriteBottom"))
.then(typeWriter("Stack-Overflow Enthusiast",false,"typewriteBottom"))
.then(typeWriter("Stack-Overflow Enthusiast",true,"typewriteBottom"))
.then(typeWriter("Full-Stack Developer",false,"typewriteBottom"))

//Active menu
//TODO