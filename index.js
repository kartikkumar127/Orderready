function validate(){
    var uname=document.getElementById('username').value;
    var email= document.getElementById('email').value;
    var pswd= document.getElementById('password').value;
    var cpswd= document.getElementById('cpassword').value;
    var X=checkuname(uname) && checkemail(email) && checkpswd(pswd) && checkcpswd(pswd,cpswd)
    if(X==true){
        confirm('Are you sure to proceed with these credentials?')
    }
    if(X!=false){
        confirm('Please re-check your details!')
    }
}

function checkuname(uname){
    if(uname.length>7){
        document.getElementById('username').classList.add('success') 
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username-error').innerHTML=''
        return true
    }
    else{
        document.getElementById('username').classList.add('error') 
        document.getElementById('username-error').innerText='username must be 8 letters long'
        return false
    }
    
}
function checkemail(email){
    if(email.length>7 && email.includes('@')){
        document.getElementById('email').classList.add('success') 
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email-error').innerHTML=''
        return true
    }
    else{
        document.getElementById('email').classList.add('error') 
        document.getElementById('email-error').innerText='email must be 8 letters long and must include @'
        return false
    }
}
function checkpswd(pswd){
     if(pswd.length>7 && pswd.includes('@')){
        document.getElementById('password').classList.add('success') 
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password-error').innerHTML=''
        return true
    }
    else{
        document.getElementById('password').classList.add('error') 
        document.getElementById('password-error').innerText='password must be 8 letters long and must include @'
        return false
    }
}
function checkcpswd(pswd, cpswd){
    if(pswd==cpswd && pswd!=''){
        document.getElementById('cpassword').classList.add('success') 
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword-error').innerHTML=''
        return true
    }
    else{
        document.getElementById('cpassword').classList.add('error') 
        document.getElementById('cpassword-error').innerText='password mismatch'
        return false
    }
}

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.products');
    let l = document.getElementsByTagName('h5');
    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h5')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }

function carts(){
    let cart=document.querySelector('.cart')
    let cartfield=document.querySelector('.cart-field')
    let add= document.getElementsByClassName('.add')
    for(let but of add){
     but.onclick= e=>{
        
        let item=Number(cart.getAttribute('data-count')||0)
        cart.setAttribute('data-count',item + 1)
        cart.classList.add('on')

        let parent=e.target.parentNode.parentNode.parentNode
        let image=parent.querySelector('img')
        let span=document.createElement('span')  
        span.className='img-carrier'
        parent.insertBefore(span, parent.lastElementChild)

        let s_image=image.cloneNode(false)
        span.appendChild(s_image)
        span.classList.add('active')
        setTimeout(()=>{
            span.classList.remove('active')
            span.removeChild(s_image)
        }, 500)

        let clone=parent.cloneNode(true);
        clone.querySelector('.add').style.display="none"
        clone.querySelector('.add').removeAttribute('class')
        cartfield.appendChild(clone)

        if(clone){
            cart.onclick= ()=>{
                cartfield.classList.toggle('display')
            }
        }
     }
    }
}
function deleteitem(){
    const element=e.target
    if(element.classList[0]=='far'){
        element.parentElement.remove()
    }
}

function order(){
    let nm=document.getElementsByClassName(".p-name")
    pr=document.getElementsByClassName(".p-price")
    let userDiv = document.createElement("div");
    userhead = document.createElement("h4")
    userDiv.id = "user"
    userDiv.className = "user-response"
    userhead.appendChild(nm)
    userhead.appendChild(pr)
    userDiv.appendChild(userhead)
}




