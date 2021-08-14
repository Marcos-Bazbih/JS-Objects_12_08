const man = {
    skinColor: "black",
    height: 175,
    weight: 70,
    hairColor: "blond",
    running: function(){
        return this.weight - 20;
    },
    growing: function(){
        return this.height + 15;
    }
}


console.log(man.running());
man.weight = 200;
console.log(man.running());


console.log(man.growing());
man.height = 200;
console.log(man.growing());



const student = {
    firstName: "Marcos",
    lastName: "Bazbih",
    phoneNumber: "052-5046632",
    email: "marcosbaza100Gmail.com",
    grades: [85,90,70,100,20],
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    avgGrades: function(){
        let avg = 0;
        let sum = 0;
        for(let i=0; i<this.grades.length; i++){
             sum += this.grades[i];
        }
        avg = sum/this.grades.length;
        return avg;
    },
    minGrades: function(){
        let min=this.grades[0];
        for(let i=1; i<this.grades.length; i++){
            if(this.grades[i]<min){
                min = this.grades[i];
            }
        }
        return min;
    }
}
console.log(student.firstName);
console.log(student.lastName);
console.log(student.phoneNumber);
console.log(student.email);
console.log(student.grades);


console.log(student.fullName());


console.log(student.avgGrades());


console.log(student.minGrades());