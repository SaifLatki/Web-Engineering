var y=20;// global scope

{
    const y=30; //block level scope
    console.log("Constant value= ",y); //print 30

    y=50 // throw error we can't re-assign the value of y (constant)
    console.log("Re assign value of y= ",y)// never print this statement
}

console.log ("var value= ",y)//print 20