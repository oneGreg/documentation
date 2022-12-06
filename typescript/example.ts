// List which keys come from:
type NavigationPages = "home" | "stickers" | "about" | "contact";

class Example extends Object{
  x: number = 0;
  y: number = 0;

  private _length: number = 0;

  constructor(x?: number, y?: number) {
    super();
    if(x) {
      this.x = x;
    }  
    if(y) {
      this.y = y;
    }
  }
  
  scale(n: number): number{
        this.x *= n;
        this.y *= n;
        return 1;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

var example = new Example();
example.length;
example.scale(0);
console.log("scale:" + example.scale(0));
console.log(example.toString());

// Object Destructuring
var rect = { x: 0, y: 10, width: 15, height: 20 };

// Destructuring assignment
var {x, y, width, height} = rect;

// tip to me: use such fancy stuff in functions , so the 
// normal javascript code is not to cluttered 
var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
console.log(w, x, remaining); // 1, 2, {y:3,z:4}
