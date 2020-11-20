const weight_form = document.getElementById('solve-for-weight')
const edge_form = document.getElementById('solve-for-edge')
const max_form = document.getElementById('solve-for-max')
const smallest_form = document.getElementById('solve-for-smallest')
const percent_form = document.getElementById('solve-for-percent')
const sensible_output = function() {
  return document.getElementById('sensible').checked && !document.getElementById('raw').checked
}

var init_weight, init_edge, target_weight, target_edge, bodyweight, head_html, body_html

// function draw_results_tables() {
//   let results_tables = [document.getElementById('edge-results'),  document.getElementById('smallest-results')]
//   for (const table of results_tables) {
//     head_html = '<thead><tr><th scope="col">Average</th>'
//     body_html = '<tbody><tr><td id="Average-'+ table.id +'">-</td>'
//     for (key of Object.keys(formulas)) {
//         head_html += '<th scope="col" colspan="2">' + key + '</th>'
//         body_html += '<td id="' + key+'-'+table.id + '-1">-</td>'
//         body_html += '<td id="' + key+'-'+table.id + '-2">-</td>'
//       }
//
//     head_html += '</tr></thead>'
//     body_html += '</tr></tbody>'
//
//     table.innerHTML = head_html + body_html
//   }
// }

function inject(formulas, solveFunction, elementSuffix, input, roundFunction, regulateFunction=null, preEval=null) {
  let avg = 0, length=0, out;
  let avg_valid=true

  input = input.map(x => Number.parseFloat(x))
  if(input.some(x => Number.isNaN(x))) {
    for (const [key,value] of Object.entries(formulas)) {
      document.getElementById(key+elementSuffix+'-1').innerText = '-'
      if (elementSuffix == '-edge-results' || elementSuffix == '-smallest-results'){
        document.getElementById(key+elementSuffix+'-2').innerText = '-'
      }
    }
    document.getElementById('avg'+elementSuffix).innerText = '-'
  } else {
    for (const [key,value] of Object.entries(formulas)) {
      if(preEval) {
        out = preEval(...input, value)
      } else {
        out = value[solveFunction](...input)
      }

      if(regulateFunction) {
        out = regulateFunction(...input, out)
      }

      if (out.length){
        let y = 1
        for (const x of out) {
          if (!Number.isNaN(x)) {
            avg += x
            length ++
          }
          document.getElementById(key+elementSuffix+'-'+y).innerText = roundFunction(x)
          y++
        }
      } else {
        avg_valid = false
        document.getElementById(key+elementSuffix+'-1').innerText = 'X'
        console.log(elementSuffix)
        if (elementSuffix == '-edge-results' || elementSuffix == '-smallest-results'){
          document.getElementById(key+elementSuffix+'-2').innerText = 'X'
        }
      }
    }
    if(avg_valid) { document.getElementById('avg'+elementSuffix).innerText = roundFunction(avg/length) }
    else { document.getElementById('avg'+elementSuffix).innerText = 'X' }
  }
}

const weight_eval = function(event) {
  init_weight = document.getElementById('init-weight-weight').value
  init_edge = document.getElementById('init-edge-weight').value
  target_edge = document.getElementById('target-edge-weight').value
  input = [init_weight, init_edge, target_edge]

  inject(formulas, 'solveForWeight', '-weight-results', input, x=>math.round(x, 1),
    sensible_output() ? (init_weight, init_edge, target_edge, weight) => {return weight.map(x => x<0 ? 0 : x)} : null,
    sensible_output() ? (init_weight, init_edge, target_edge, formula_block) => { return (init_edge == target_edge) ? [init_weight] : formula_block['solveForWeight'](init_weight, init_edge, target_edge) } : null
  )
}
weight_form.onkeyup = weight_eval
weight_form.onchange = weight_eval

const edge_eval = function() {
  init_weight = document.getElementById('init-weight-edge').value
  init_edge = document.getElementById('init-edge-edge').value
  target_weight = document.getElementById('target-weight-edge').value
  input = [init_weight, init_edge, target_weight]

  inject(formulas, 'solveForEdge', '-edge-results', input, x=>math.round(x, 1),
    sensible_output() ? (init_weight, init_edge, target_weight, edge) => {return edge.map(x => x<0 ? 0 : x)} : null,
    sensible_output() ? (init_weight, init_edge, target_weight, formula_block) => {
      if (init_weight==target_weight) { return [init_edge] }
      else if (target_weight > formula_block['solveForMax'](init_weight, init_edge)) { return [0,0] }
      else { return formula_block['solveForEdge'](init_weight, init_edge, target_weight) }
    } : null
  )
}
edge_form.onkeyup = edge_eval
edge_form.onchange = edge_eval

const max_eval = function() {
  init_weight = document.getElementById('init-weight-max').value
  init_edge = document.getElementById('init-edge-max').value

  inject(formulas, 'solveForMax', '-max-results', [init_weight, init_edge], x=>math.round(x, 1),
    sensible_output() ? (init_weight, init_edge, max) => {return max.map(x => x<0 ? 0 : x)} : null
  )
}
max_form.onkeyup = max_eval
max_form.onchange = max_eval

const smallest_eval = function() {
  init_weight = document.getElementById('init-weight-smallest').value
  bodyweight = document.getElementById('bodyweight-smallest').value
  init_edge = document.getElementById('init-edge-smallest').value

  inject(formulas, 'solveForSmallest', '-smallest-results', [init_weight, bodyweight, init_edge], x=>math.round(x, 1),
    sensible_output() ? (init_weight, bodyweight, init_edge, smallest) => {return smallest.map(x => x<0 ? 0 : x)} : null
  )
}
smallest_form.onkeyup = smallest_eval
smallest_form.onchange = smallest_eval

const percent_eval = function() {
  init_edge = document.getElementById('init-edge-percent').value

  inject(formulas, 'solveForPercent', '-percent-results', [init_edge], x=>math.round(x, 2),
    sensible_output() ? (init_edge, percent) => {return percent.map(x => x<0 ? 0 : x)} : null
  )
}
percent_form.onkeyup = percent_eval
percent_form.onchange = percent_eval

for(radio of document.getElementsByName('calc_output')) {
  radio.onclick = function(event) {
    // draw_results_tables()
    weight_eval(event)
    edge_eval(event)
    max_eval(event)
    smallest_eval(event)
    percent_eval(event)
  }
}
