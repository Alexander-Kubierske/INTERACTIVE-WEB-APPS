const value = "3"
console.log(Number(value) + 4 + Number(value))

// the problem with this code was that the const value is a string and not a number which means that we would get concatenated not added
// :. we  can provide 2 solutions:
// one would be to turn the string to a number using Number()
// the other would be to simply change the const so that it would have a number not a string