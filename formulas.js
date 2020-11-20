const bigmath = math.create({
  number: 'BigNumber'
})

const a1_text = bigmath.parse(
  '-b/(4*a) - (1/2)*sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)*(c^2 - 3*b*d + 12*a*e)/(3*a *(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) - (1/2)*sqrt(b^2/(2*a^2) - 4*c/(3*a) - 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) - (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3) - (-b^3/a^3 + 4*b*c/a^2 - 8*d/a)/(4* sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* ((2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2)))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3))))'
)
const a1 = a1_text.compile()

const a2_text = bigmath.parse(
  '-b/(4*a) - (1/2)*sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)*(c^2 - 3*b*d + 12*a*e)/(3*a *(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) + (1/2)*sqrt(b^2/(2*a^2) - 4*c/(3*a) - 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) - (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3) - (-b^3/a^3 + 4*b*c/a^2 - 8*d/a)/(4* sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* ((2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2)))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3))))'
)
const a2 = a2_text.compile()

const a3_text = bigmath.parse(
  '-b/(4*a) + (1/2)*sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)*(c^2 - 3*b*d + 12*a*e)/(3*a *(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) - (1/2)*sqrt(b^2/(2*a^2) - 4*c/(3*a) - 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) - (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3) + (-b^3/a^3 + 4*b*c/a^2 - 8*d/a)/(4* sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* ((2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2)))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3))))'
)
const a3 = a3_text.compile()

const a4_text = bigmath.parse(
  '-b/(4*a) + (1/2)*sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)*(c^2 - 3*b*d + 12*a*e)/(3*a *(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) + (1/2)*sqrt(b^2/(2*a^2) - 4*c/(3*a) - 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3)) - (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3) + (-b^3/a^3 + 4*b*c/a^2 - 8*d/a)/(4* sqrt(b^2/(4*a^2) - 2*c/(3*a) + 2^(1/3)* (c^2 - 3*b*d + 12*a*e)/(3*a* ((2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2)))^(1/3)) + (1/(3*2^(1/3)*a))*(2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e + sqrt(-4* (c^2 - 3*b*d + 12*a*e)^3 + (2*c^3 - 9*b*c*d + 27*a*d^2 + 27*b^2*e - 72*a*c*e)^2))^(1/3))))'
)
const a4 = a4_text.compile()

const quartic_text = bigmath.parse('(a*(x^4)) +(b*(x^3)) +(c*(x^2)) +(d*x) +e')
const quartic = quartic_text.compile()

function quartic_eval(a,b,c,d,e,x) {
  const result = quartic.evaluate(
    {a:a, b:b, c:c, d:d, e:e, x:bigmath.bignumber(x)}
  )
  return bigmath.numeric(result, 'number')
}

function quartic_inverse(a,b,c,d,e,y) {
  const roots = [a1,a2,a3,a4]
  let actuals = []
  for (const root of roots) {
    let possible = bigmath.round(root.evaluate({a:a,b:b,c:c,d:d,e:bigmath.bignumber(e-y)}), 4)
    if(bigmath.hasNumericValue(possible)) {
       actuals.push(bigmath.numeric(possible, 'number'))
    } else if (bigmath.typeOf(possible) == 'Complex' && bigmath.equal(possible.im,0)) {
      actuals.push(possible.re)
    }
  }
  return actuals

  // let possibles = []
  // for (const root of roots) {
  //   possibles.push(bigmath.round(root.evaluate({a:a,b:b,c:c,d:d,e:bigmath.bignumber(e-y)}), 4))
  // }
  // // console.log(y, possibles)
  // let actuals=[]
  // for (const x of possibles) {
  //   if(bigmath.hasNumericValue(x)) {
  //      actuals.push(bigmath.numeric(x, 'number'))
  //   } else if (bigmath.typeOf(x) == 'Complex' && bigmath.equal(x.im,0)) {
  //     actuals.push(x.re)
  //   }
  // }
}

/**
  curve: x in mm (original function is cm but we convert), output in newtons
  inverse: y in newtons, output in array of mm (original function is cm but we convert)
  curve_scaled: x in mm, output as percentage (e.g. 2% = 0.02)
  inverse_scaled: y as percentage (e.g. 2% = 0.02), output in array of mm
**/
function curve(a, b, c, d, e, x) {
  return quartic_eval(a, b, c, d, e, x/10)
}
function inverse(a, b, c, d, e, y) {
  let result = quartic_inverse(a, b, c, d, e, y)
  return math.map(result, x=> x*10)
}
function curve_scaled (a, b, c, d, e, max_y, x) {
  return curve(a, b, c, d, e, x) / max_y
}
function inverse_scaled (a, b, c, d, e, max_y, y) {
  // console.log(max_y, y)
  return inverse(a, b, c, d, e, y*max_y)
}

function solveForPercent(a,b,c,d,e,max_y, init_edge) {
  return curve_scaled(a,b,c,d,e,max_y, init_edge)
}
function solveForWeight(a,b,c,d,e,max_y, init_weight, init_edge, target_edge) {
  return curve_scaled(a,b,c,d,e,max_y, target_edge) * (init_weight / curve_scaled(a,b,c,d,e,max_y, init_edge))
}
function solveForEdge(a,b,c,d,e,max_y, init_weight, init_edge, target_weight) {
  return inverse_scaled(a,b,c,d,e,max_y, (target_weight * curve_scaled(a,b,c,d,e,max_y, init_edge)) / init_weight) //ARRAY
}
function solveForSmallest(a,b,c,d,e,max_y, init_weight, bodyweight, init_edge) {
  return inverse_scaled(a,b,c,d,e,max_y, bodyweight / ((init_weight + bodyweight) / curve_scaled(a,b,c,d,e,max_y, init_edge))) //ARRAY
}
function solveForMax(a,b,c,d,e,max_y, init_weight, init_edge) {
  return init_weight / curve_scaled(a,b,c,d,e,max_y, init_edge)
}

const half_crimp_a= -2.92
const half_crimp_b= 36.43
const half_crimp_c= -194.6
const half_crimp_d= 512
const half_crimp_e= 0
const half_crimp_max= {x:3.26068, y:533.34} //x in cm, y in newtons

const full_crimp_a= -6.83
const full_crimp_b= 79.72
const full_crimp_c= -357.8
const full_crimp_d= 724.5
const full_crimp_e= 0
const full_crimp_max= {x:2.61901, y:554.021} //x in cm, y in newtons

const slope_a= -9.74
const slope_b= 98.97
const slope_c= -362.7
const slope_d= 634.2
const slope_e= 0
const slope_max= {x:3.95151, y:574.486} //x in cm, y in newtons


const formulas = {
  "half-crimp": {
    solveForPercent: function(init_edge) {
      return [solveForPercent(half_crimp_a,half_crimp_b,half_crimp_c,half_crimp_d,half_crimp_e,half_crimp_max.y, init_edge)]
    },
    solveForWeight: function(init_weight, init_edge, target_edge) {
      return [solveForWeight(half_crimp_a,half_crimp_b,half_crimp_c,half_crimp_d,half_crimp_e,half_crimp_max.y, init_weight, init_edge, target_edge)]
    },
    solveForEdge: function(init_weight, init_edge, target_weight) {
      return solveForEdge(half_crimp_a,half_crimp_b,half_crimp_c,half_crimp_d,half_crimp_e,half_crimp_max.y, init_weight, init_edge, target_weight) //ARRAY
    },
    solveForSmallest: function(init_weight, bodyweight, init_edge) {
      return solveForSmallest(half_crimp_a,half_crimp_b,half_crimp_c,half_crimp_d,half_crimp_e,half_crimp_max.y, init_weight, bodyweight, init_edge) //ARRAY
    },
    solveForMax: function(init_weight, init_edge) {
      return [solveForMax(half_crimp_a,half_crimp_b,half_crimp_c,half_crimp_d,half_crimp_e,half_crimp_max.y, init_weight, init_edge)]
    }
  }, "full-crimp": {
    solveForPercent: function(init_edge) {
      return [solveForPercent(full_crimp_a,full_crimp_b,full_crimp_c,full_crimp_d,full_crimp_e,full_crimp_max.y, init_edge)]
    },
    solveForWeight: function(init_weight, init_edge, target_edge) {
      return [solveForWeight(full_crimp_a,full_crimp_b,full_crimp_c,full_crimp_d,full_crimp_e,full_crimp_max.y, init_weight, init_edge, target_edge)]
    },
    solveForEdge: function(init_weight, init_edge, target_weight) {
      return solveForEdge(full_crimp_a,full_crimp_b,full_crimp_c,full_crimp_d,full_crimp_e,full_crimp_max.y, init_weight, init_edge, target_weight) //ARRAY
    },
    solveForSmallest: function(init_weight, bodyweight, init_edge) {
      return solveForSmallest(full_crimp_a,full_crimp_b,full_crimp_c,full_crimp_d,full_crimp_e,full_crimp_max.y, init_weight, bodyweight, init_edge) //ARRAY
    },
    solveForMax: function(init_weight, init_edge) {
      return [solveForMax(full_crimp_a,full_crimp_b,full_crimp_c,full_crimp_d,full_crimp_e,full_crimp_max.y, init_weight, init_edge)]
    }
  }, "slope": {
    solveForPercent: function(init_edge) {
      return [solveForPercent(slope_a,slope_b,slope_c,slope_d,slope_e,slope_max.y, init_edge)]
    },
    solveForWeight: function(init_weight, init_edge, target_edge) {
      return [solveForWeight(slope_a,slope_b,slope_c,slope_d,slope_e,slope_max.y, init_weight, init_edge, target_edge)]
    },
    solveForEdge: function(init_weight, init_edge, target_weight) {
      return solveForEdge(slope_a,slope_b,slope_c,slope_d,slope_e,slope_max.y, init_weight, init_edge, target_weight) //ARRAY
    },
    solveForSmallest: function(init_weight, bodyweight, init_edge) {
      return solveForSmallest(slope_a,slope_b,slope_c,slope_d,slope_e,slope_max.y, init_weight, bodyweight, init_edge) //ARRAY
    },
    solveForMax: function(init_weight, init_edge) {
      return [solveForMax(slope_a,slope_b,slope_c,slope_d,slope_e,slope_max.y, init_weight, init_edge)]
    }
  }
}
