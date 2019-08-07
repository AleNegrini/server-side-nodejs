//create and exports variables to modules
module.exports = (l,b,callback) => {
  if(l <= 0 || b <= 0){
    setTimeout(() =>
        callback(new Error("Rectagle dimensions should be greater than 0"),
        null),
        2000)
  }else{
    setTimeout(() =>
        callback(null,
        {
          perimeter: (x,y) => (2*(x+y)),
          area: (x,y) => (x*y)
        }),
        2000)
  }
}

perimeter = (x,y) => 2*(x+y)
area = (x,y) => (x*y)
