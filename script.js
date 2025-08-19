document.getElementById('contactForm').addEventListener('submit',function(e){
e.preventDefault();
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let message=document.getElementById('message').value;
if(name===""||email===""||message===""){
alert('Please fill all fields');return;
}
alert('Form submitted successfully!');
this.reset();
});


// Todo
function addTodo(){
let input=document.getElementById('todoInput');
let val=input.value.trim();
if(val===''){return;}
let li=document.createElement('li');
li.innerHTML=val+" <span onclick='this.parentElement.remove()' style='cursor:pointer'>❌</span>";
document.getElementById('todo-list').appendChild(li);
input.value='';
}

// Gallery dynamic load
const images=['https://picsum.photos/200?1','https://picsum.photos/200?2','https://picsum.photos/200?3','https://picsum.photos/200?4'];
const gallery=document.getElementById('gallery');
images.forEach(src=>{
let img=document.createElement('img');
img.src=src;
gallery.appendChild(img);
});
// toggle dark mode
function toggleMode(){document.body.classList.toggle('dark');}


// popup preview
gallery.addEventListener('click',function(e){ if(e.target.tagName==='IMG'){let p=document.createElement('div');p.style.position='fixed';p.style.top='0';p.style.left='0';p.style.width='100%';p.style.height='100%';p.style.background='rgba(0,0,0,0.8)';p.style.display='flex';p.style.alignItems='center';p.style.justifyContent='center';p.innerHTML='<img src="'+e.target.src+'" style="max-width:90%;max-height:90%;border-radius:10px;">'; p.onclick=function(){p.remove();}; document.body.appendChild(p);} });