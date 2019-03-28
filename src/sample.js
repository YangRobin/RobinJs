

var compoent1 = (() => {
  return () => {
    return `<div>this is a compoent1 </div> `
  }
}
)()

var compoent2 = (() => {
  return () => {
    return `<div>this is a compoent2 </div>`
  }
}
)()

var compoent3 = (() => {
  return () => {
    return `<div>this is a compoent3 </div> `
  }
}
)()

var cp4 = ((a, b, c) => {
  return () => {
    return `
      <div>
         <a/>
         <b/>
         <c/>
      </div>
      `
  }
}
)(compoent1, compoent2, compoent3)

export default cp4;