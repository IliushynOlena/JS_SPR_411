
class Car{
    constructor(model, year, color)
    {
       this.model = model;
       this.year = year;
       this.color = color;
       this.speed = 0;
    }

    set Speed(value){
         if(value >= 0)
            this.speed = value;
        else
            this.speed = 0;
    }
    get mils()
    {
        return this.speed * 0.621;
    }
    setSpeed(value)
    {
        if(value >= 0)
            this.speed = value;
        else
            this.speed = 0;
    }
    paint(newColor)
    {
        this.color = newColor;
    }
    print(){
        console.log(`Car : ${this.model} ${this.year} ${this.color} ${this.speed}km/h`)
    }
}

//================= Extends ==========
class PoliceCar extends Car{
    constructor(model, year, color, volume)
    {
        super(model,year,color);
        this.volume = volume;
    }
    beep()
    {
        console.log("Stop!!! Beep, beep, beep ....Volume :"
             + this.volume);
    }
    print()
    {
        super.print();
        console.log("Volume : " + this.volume + "!");
    }
}

const policeCar = new PoliceCar("Toyota",2022,"white",800);
policeCar.beep();
policeCar.Speed = 220;
policeCar.print();

//let var const 
const myCar = new Car("Nissan",2025,"pink");

myCar.paint("Grey");
// myCar.model = "Nissan";
// myCar.year = 2025;
// myCar.color = "pink";
// myCar.speed = 180;
myCar.setSpeed(150);//method
myCar.print();

myCar.Speed = 180;//setter
myCar.print();
console.log("Speed in miles : " + myCar.mils.toFixed(1) + "mi/h");