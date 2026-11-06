for(i=1;i<=1000;i++){
    let temp1=i;
    let count=0;
    while(temp1>0){
        temp1=Math.floor(temp1/10);
        count++;

    }
    let temp2=i;
    let sum=0;
    while(temp2>0){
        let rem=temp2%10;
        sum+=rem**count;
        temp2=Math.floor(temp2/10);
    }
    if(sum===i){
        console.log(i);
}
}