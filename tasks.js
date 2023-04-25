document.addEventListener('DOMContentLoaded',function(){
    const submit = document.querySelector('#submit');
    const newtask = document.querySelector('#task');

    submit.disabled=true;
    newtask.onkeyup=()=>{
        //console.log("Test");
        if(newtask.value.length>0){
            submit.disabled=false;
        }else{
            submit.disabled=true;
        }
    }

    //submission form
    document.querySelector('form').onsubmit = ()=>
    {
        const task = newtask.value;
        const li = document.createElement('li');
        li.innerHTML=task;
        document.querySelector('#tasks').append(li);
        newtask.value='';
        
        return false;

    }
    console.log("Beginning of list");
});