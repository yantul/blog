function contain (arry, val) {
  for (let index = 0; index < arry.length; index++) {
    if (arry[index] === val) {
      return true
    }
  }
  return false
}

export default contain
