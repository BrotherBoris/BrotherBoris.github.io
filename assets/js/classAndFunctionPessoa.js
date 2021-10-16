let Person={
        name: 'Jason',
        surname: 'Joeman',
        age: '22',
        id: 132465798,
        alive: true
    }

    function printWholeName(Person) {
        console.log("The person's name is: "+Person.name+" "+Person.surname)
    }
    function printAge(Person) {
        console.log("The person's age is: "+Person.age+" years old");
    }
    function printID(Person) {
        console.log("The person's ID is: "+Person.id);
    }
    function printStatus(Person) {
        if(Person.alive==true){
            console.log("The person Status is: 'Alive'");
        }else{
            console.log("The person Status is: 'Dead'");
        }
    }
    function printPersonData2(Person) {
    console.log("The person's name is: "+Person.name+" "+Person.surname)
    console.log("The person's age is: "+Person.age+" years old");
    console.log("The person's ID is: "+Person.id);
        if(Person.alive==true){
            console.log("The person Status is: 'Alive'");
        }else{
            console.log("The person Status is: 'Dead'");
        }
    }
    
    function printPersonData(Person) {
        printWholeName(Person);
        printAge(Person);
        printID(Person);
        printStatus(Person);
    }
 
        printPersonData(Person);