function add(){
    var act = 0, b=0;
    act= form.text.value; //input value
    b = act.charAt(act.length-1); //last input value
    if (b=='+' || b=='-' || b=='/' || b=='*'){
        form.text.value= act.substring(0, act.length-1);
        form.text.value+='+';
    }
    else{
        form.text.value+='+';
    }
}

function sub(){
    var act = 0, b=0;
    act= form.text.value; //input value
    b = act.charAt(act.length-1); //last input value
    if (b=='+' || b=='-' || b=='/' || b=='*'){
        form.text.value= act.substring(0, act.length-1);
        form.text.value+='-';
    }
    else{
        form.text.value+='-';
    }
}

function division(){
    var act = 0, b=0;
    act= form.text.value; //input value
    b = act.charAt(act.length-1); //last input value
    if (b=='+' || b=='-' || b=='/' || b=='*'){
        form.text.value= act.substring(0, act.length-1);
        form.text.value+='/';
    }
    else{
        form.text.value+='/';
    }
}

function mul(){
    var act = 0, b=0;
    act= form.text.value; //input value
    b = act.charAt(act.length-1); //last input value
    if (b=='+' || b=='-' || b=='/' || b=='*'){
        form.text.value= act.substring(0, act.length-1);
        form.text.value+='*';
    }
    else{
        form.text.value+='*';
    }
}