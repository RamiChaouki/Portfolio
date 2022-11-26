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

const backArrow=document.getElementById("backArrow");
const frontArrow=document.getElementById("frontArrow");

backArrow.addEventListener('click',()=>{newPage('back')});
frontArrow.addEventListener('click',()=>{newPage('front')});

const screenImgPath=
[
    './images/Projects/Commons.JPG',
    './images/Projects/AbyssSocial.JPG',
    './images/Projects/HomingPigeon.JPG',
    './images/Projects/GoblinWare.JPG',
    './images/Projects/SSotM.JPG'
]

const titles=['Commons','Abyss.SOCIAL','HomingPigeon','GoblinWare', 'Sunny Side of the Moon'];

const descriptions=
[
    'A C2C hub for lending and borrowing items created in at the breakneck speed of three days! My responsibilities for this project were to implement Spring Security login functions and to code the user MVC layers using Hibernate ORM.'
    ,
    'A goth-themed social media website with search, friending, posting and admin functionalities done with React on the front-end, and node.js and Sequelize on the back-end. In this project, I implemented a scalable search algorithm that utilized hash-maps for increased performance. I also implemented the friending logic.'
    ,   
    'An E-commerce website specialized in selling locally made postcards. I was responsible for implementing the admin functions. One thing I am particularly proud of is designing the back-end algorithm to manage the server-side storage of images'
    ,
    "An earlier project of mine made with the help of SpringBoot. This was meant as a first step towards an online table-top simulator similar to Roll Twenty. My goal had been to allow Dungeon Masters and players to design their own assets, and share them online to create a limitless pool of images users could search and add in their campaign. One particular thing I am proud of is creating the drawing app from scratch with the help of HTML5's Canvas"
    ,
    'One of my earliest projects, where we use JQuery and Bootstrap 5 to create a website that offers to fly you to the moon. This was the first time I hosted something myself on heroku (back when it was still free), before porting it to github pages.'
]

const stack=
[
    ['html','css','bs','tl','sb','hb','nt'],
    ['html','css','bs','rt','nj','sq','e2','s3'],
    ['html','css','bs','php'],
    ['html','css','js','sb'],
    ['html','css','js','jq','hrk']
]

const screenImg=document.getElementById("screenImg");
const projectTitle=document.getElementById("projectTitle");
const projectText=document.getElementById("projectText");
const stackImages=document.getElementById("stackImages");
var index=0;
generateStackImages(stack[index]);
function newPage(command)
{
    if(command=="front")
    {
        index=(1+index)%titles.length;
        console.log(index);
        projectTitle.innerHTML=titles[index];
        projectText.innerHTML=descriptions[index];
        screenImg.src=screenImgPath[index];
        generateStackImages(stack[index]);
    }
    else
    {
        index=index-1<0?titles.length-1:index-1;
        console.log(index);
        projectTitle.innerHTML=titles[index];
        projectText.innerHTML=descriptions[index];
        screenImg.src=screenImgPath[index];
        generateStackImages(stack[index]);
    }
}

function generateStackImages(stackArray)
{
    var stackImages =document.getElementById("stackImages")
    stackImages.replaceChildren(); //removes all children

    for(const stack of stackArray)
    {
        switch (stack){
            case 'html':
                var img=document.createElement('img');
                img.src='./images/Stack/html-5.svg';
                img.alt='html 5';
                img.title="Html 5";
                stackImages.appendChild(img);
                break;
            case 'css':
                var img=document.createElement('img');
                img.src='./images/Stack/css-3.svg';
                img.alt='CSS 3';
                img.title="CSS 3";
                stackImages.appendChild(img);
                break;
            case 'js':
                var img=document.createElement('img');
                img.src='./images/Stack/javascript.svg';
                img.alt='Javascript';
                img.title="Javascript";
                stackImages.appendChild(img);
                break;
            case 'bs':
                var img=document.createElement('img');
                img.src='./images/Stack/bootstrap.svg';
                img.alt='Bootstrap';
                img.title="Bootstrap";
                stackImages.appendChild(img);
                break;
            case 'tl':
                var img=document.createElement('img');
                img.src='./images/Stack/thymeleaf-icon.svg';
                img.alt='Thymeleaf';
                img.title="Thymeleaf";
                stackImages.appendChild(img);
                break;
            case 'sb':
                var img=document.createElement('img');
                img.src='./images/Stack/spring-icon.svg';
                img.alt='Spring Boot';
                img.title="Spring Boot";
                stackImages.appendChild(img);
                break;
            case 'hb':
                var img=document.createElement('img');
                img.src='./images/Stack/hibernate.svg';
                img.alt='Hibernate';
                img.title="Hibernate";
                stackImages.appendChild(img);
                break;
            case 'nt':
                var img=document.createElement('img');
                img.src='./images/Stack/netlify.svg';
                img.alt='Netlify';
                img.title="Netlify";
                stackImages.appendChild(img);
                break;
            case 'rt':
                var img=document.createElement('img');
                img.src='./images/Stack/react.svg';
                img.alt='React';
                img.title="React";
                stackImages.appendChild(img);
                break;
            case 'nj':
                var img=document.createElement('img');
                img.src='./images/Stack/nodejs-icon.svg';
                img.alt='NodeJS';
                img.title="NodeJS";
                stackImages.appendChild(img);
                break;
            case 'sq':
                var img=document.createElement('img');
                img.src='./images/Stack/sequelize.svg';
                img.alt='Sequelize';
                img.title="Sequelize";
                stackImages.appendChild(img);
                break;
            case 'e2':
                var img=document.createElement('img');
                img.src='./images/Stack/aws-ec2.svg';
                img.alt='AWS EC2';
                img.title="AWS EC2";
                stackImages.appendChild(img);
                break;
            case 'php':
                var img=document.createElement('img');
                img.src='./images/Stack/php.svg';
                img.alt='PHP';
                img.title="PHP";
                stackImages.appendChild(img);
                break;
            case 'jq':
                var img=document.createElement('img');
                img.src='./images/Stack/jquery.svg';
                img.alt='JQuery';
                img.title="JQuery";
                stackImages.appendChild(img);
                break;
            case 'hrk':
                var img=document.createElement('img');
                img.src='./images/Stack/heroku.svg';
                img.alt='Heroku';
                img.title="Heroku";
                stackImages.appendChild(img);
                break;
            case 's3':
                var img=document.createElement('img');
                img.src='./images/Stack/aws-s3.svg';
                img.alt='S3';
                img.title="S3";
                stackImages.appendChild(img);
                break;
            
        }
        
    }
}