function explain_callback(name,age,task){
    console.log('Hello',name);
    console.log('Your age',age);
    task();
}

function wash_hand(){
    console.log('wash your hand with soap');
}

function take_shower(){
    console.log('go to bathroom and take shower with soap');
}

function scroll_facebook(){
    console.log('Scroll facebook but dont like any post');
}

explain_callback('Sogir Uddin',19,wash_hand);
explain_callback('jogir Uddin',17,take_shower);
explain_callback('mogir Uddin',21,scroll_facebook);