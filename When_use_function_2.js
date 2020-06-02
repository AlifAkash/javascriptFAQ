function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num%2==0){
            console.log(num,": is even number")
        }
        else{
            console.log(num*2,": is odd number")
        }
    }
}


nums=[5,18,89,45,15,8];
evenify_all(nums);

friends_age=[13,20,17,18,16];
evenify_all(friends_age);

students_roll_no=[9,4,6,7,2,5];
evenify_all(students_roll_no);