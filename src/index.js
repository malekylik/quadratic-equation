module.exports = function solveEquation(equation) {
    let expression = equation;
    let temp = "";

    for(let i = 0; i < expression.length; i++){
      if(expression[i] === 'x' || expression[i] === '^' || expression[i] === '*'
      || (expression[i] === '2' && expression[i - 1] === '^') ||
        (expression[i]  === ' ' && expression[i - 1]  === '-')){ 
        continue;
      }
      temp += expression[i];
    }

    temp = temp.split(" ");

    let newExp = [];

    for(let i = 0; i < temp.length; i++){ 
      if(temp[i] !== '' && temp[i] !== '+'){
          newExp.push(parseInt(temp[i]));
      }
    }
    const A = 0, B = 1, C = 2;

    let d = newExp[B]**2 - 4 * newExp[A] * newExp[C];

    let roots = [];

    let x1 = Math.round((- newExp[B]) - Math.sqrt(d)) / (2 * newExp[A]);
    let x2 = Math.round((- newExp[B]) + Math.sqrt(d)) / (2 * newExp[A]);

    if(x2 > x1){
      roots[1] = x2;
      roots[0] = x1;
    }else{
      roots[0] = x2;
      roots[1] = x1;
    }

    return roots;

}