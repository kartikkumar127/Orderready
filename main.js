/*var addItemId=0;
function add(item){
    this.style.color='Green'
    addItemId+=1;
    var selectedItem= document.createElement('div')
    selectedItem.classList.add('cartImg')
    selectedItem.setAttribute('id',addItemId)
    var img=document.createElement('img')
    img.setAttribute('src',item.children[0].currentsrc)
    var title= document.createElement('div')
    title.innerText=item.children[1].innerText
    var label=document.createElement('div')
    label.innerText=item.children[2].children[0].innerText
    var select=document.createElement('span')
    select.innerText=item.children[2].children[1].value
    label.append(select)
    var del=document.createElement('button')
    del.innerText='Delete'
    del.setAttribute('onclick','del('+addItemId+')')
    var cartItems=document.getElementsByClassName('pname')
    selectedItem.append(img)
    cartItems.append(selectedItem)
}*/
function validate(){
    var uname=document.getElementById('username').value;
    var email= document.getElementById('email').value;
    var X=checkuname(uname) && checkemail(email)
    if(X==true){
        confirm('Confirm Order?')
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