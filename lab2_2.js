function pascalsTriangle(n) {
    if (n>2) {
    let a = [1,1,1];

    for (let i = 3; i<=n; i++){

      a.push(1)
      for (let g = 1; g<i-1; g++){
        let newel = a[a.length-i]+a[a.length-i+1]
        a.push(newel)
      }
      a.push(1)
    }
    return a
    }

  if (n==2) {
    return [1,1,1]
  }
  else return [1]
}
