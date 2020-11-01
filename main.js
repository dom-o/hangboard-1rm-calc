const weight_form = document.getElementById('solve-for-weight')
const edge_form = document.getElementById('solve-for-edge')
const max_form = document.getElementById('solve-for-max')
const smallest_form = document.getElementById('solve-for-smallest')
const percent_form = document.getElementById('solve-for-percent')

var init_weight, init_edge, target_weight, target_edge, bodyweight, head_html, body_html

function draw_results_tables() {
  let results_tables = [ document.getElementById('edge-results'),  document.getElementById('smallest-results')]
  for (const table of results_tables) {
    head_html = '<thead><tr><th scope="col">Average</th>'
    body_html = '<tbody><tr><td id="Average-'+ table.id +'">-</td>'
    for (key of Object.keys(formulas)) {
        head_html += '<th scope="col" colspan="2">' + key + '</th>'
        body_html += '<td id="' + key+'-'+table.id + '-1">-</td>'
        body_html += '<td id="' + key+'-'+table.id + '-2">-</td>'
      }

    head_html += '</tr></thead>'
    body_html += '</tr></tbody>'

    table.innerHTML = head_html + body_html
  }
}

function inject(formulas, solveFunction, elementSuffix, input, roundFunction, regulateFunction) {
  let avg = 0, length=0, out
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
      out = value[solveFunction](...input)
      // console.log(out)
      out = regulateFunction(...input, out)

      //if out is empty
        //reset all slots to '-'
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
        document.getElementById(key+elementSuffix+'-1').innerText = '-'
        console.log(elementSuffix)
        if (elementSuffix == '-edge-results' || elementSuffix == '-smallest-results'){
          document.getElementById(key+elementSuffix+'-2').innerText = '-'
        }
      }

      // let y = 1
      // for(const x of out) {
      //   document.getElementById(key+elementSuffix+'-'+y).innerText = roundFunction(x)
      //   y++
      // }
    }
    document.getElementById('avg'+elementSuffix).innerText = roundFunction(avg/length)
  }
}

const weight_eval = function(event) {
  init_weight = Number.parseFloat(document.getElementById('init-weight-weight').value)
  init_edge = Number.parseFloat(document.getElementById('init-edge-weight').value)
  target_edge = Number.parseFloat(document.getElementById('target-edge-weight').value)

  inject(formulas, 'solveForWeight', '-weight-results', [init_weight, init_edge, target_edge], x=>math.round(x, 1), (init_weight, init_edge, target_edge, weight) => weight
  )
}
weight_form.onkeyup = weight_eval
weight_form.onchange = weight_eval

const edge_eval = function() {
  init_weight = Number.parseFloat(document.getElementById('init-weight-edge').value)
  init_edge = Number.parseFloat(document.getElementById('init-edge-edge').value)
  target_weight = Number.parseFloat(document.getElementById('target-weight-edge').value)

  inject(formulas, 'solveForEdge', '-edge-results', [init_weight, init_edge, target_weight], x=>math.round(x, 1), (init_weight, init_edge, target_weight, edge) => edge
  )
}
edge_form.onkeyup = edge_eval
edge_form.onchange = edge_eval

const max_eval = function() {
  init_weight = Number.parseFloat(document.getElementById('init-weight-max').value)
  init_edge = Number.parseFloat(document.getElementById('init-edge-max').value)

  inject(formulas, 'solveForMax', '-max-results', [init_weight, init_edge], x=>math.round(x, 1), (init_weight, init_edge, max) => max
  )
}
max_form.onkeyup = max_eval
max_form.onchange = max_eval

const smallest_eval = function() {
  init_weight = Number.parseFloat(document.getElementById('init-weight-smallest').value)
  bodyweight = Number.parseFloat(document.getElementById('bodyweight-smallest').value)
  init_edge = Number.parseFloat(document.getElementById('init-edge-smallest').value)

  inject(formulas, 'solveForSmallest', '-smallest-results', [init_weight, bodyweight, init_edge], x=>math.round(x, 1), (init_weight, bodyweight, init_edge, smallest) => smallest
  )
}
smallest_form.onkeyup = smallest_eval
smallest_form.onchange = smallest_eval

const percent_eval = function() {
  init_edge = Number.parseFloat(document.getElementById('init-edge-percent').value)

  inject(formulas, 'solveForPercent', '-percent-results', [init_edge], x=>math.round(x, 2), (init_edge, percent) => percent
  )
}
percent_form.onkeyup = percent_eval
percent_form.onchange = percent_eval

for(radio of document.getElementsByName('calc_output')) {
  radio.onclick = function(event) {
    draw_results_tables()
    weight_eval(event)
    edge_eval(event)
    max_eval(event)
    smallest_eval(event)
    percent_eval(event)
  }
}

// draw_results_tables()
// weight_eval()
// edge_eval()
// max_eval()
// smallest_eval()
// percent_eval()
