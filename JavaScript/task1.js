function countdown(num){
    const interval = setInterval(() => {// set interval to run every 1000ms
        console.log(num);// print the current number
        num--; // decrement the number
        if(num < 0){// if the number is less than 0
            clearInterval(interval);// clear the interval
            console.log('DONE!');// print 'DONE!'
        }
    }, 1000);// run every 1000ms
}

countdown(5);// 5, 4, 3, 2, 1, DONE! will be printed to the console