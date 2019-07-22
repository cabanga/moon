
export function kindLevel (level) {
  var l = ''
  switch (level) {
    case 0:
      l = 'Estagiário'
      break
    case 1:
      l = 'Junior'
      break
    case 2:
      l = 'Pleno'
      break
    default:
      l = 'Senior'
  }
  return l
}

export function kindJob (job) {
  var l = ''
  switch (job) {
    case 0:
      l = 'Remoto'
      break
    default:
      l = 'Presencial'
  }
  return l
}
