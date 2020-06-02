roll=[0,1,2,3,4,5,6,7,8,9]
for (let i = 0; i < roll.length; i++) {
    const rolls = roll[i];
    if (rolls%2==0){
        console.log(rolls,": roll is even");
    }
    else{
        console.log(rolls,": roll is odd");
    }
}
console.log(roll.length);

function grading(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const marks = numbers[i];
        
        if (marks<33){
            console.log(marks,"Failed");
        }
        else if (marks>=33 && marks<=40){
            console.log(marks,"Grade D");
        }
        else if (marks>=41 && marks<=50){
            console.log(marks,"Grade C");
        }
        else if (marks>=51 && marks<=60){
            console.log(marks,"Grade C+");
        }
        else if (marks>=61 && marks<=70){
            console.log(marks,"Grade B-");
        }
        else if (marks>=71 && marks<=80){
            console.log(marks,"Grade B");
        }
        else if (marks>=81 && marks<=90){
            console.log(marks,"Grade B+");
        }
        else if (marks>=91 && marks<=100){
            console.log(marks,"Grade A");
        }
        else if (marks<100){
            console.log(marks,"Grade Invalid");
        }
    }
}

numbers1=[10,24,36,42,51,64,78,84,95,68,46,25,87,95];
grading(numbers1);
console.log("Break");
numbers2=[55,64,,98,78,94,32,15,46,75,26,45,34,41,21,68];
grading(numbers2);
