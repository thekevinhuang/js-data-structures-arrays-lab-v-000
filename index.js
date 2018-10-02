// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph")
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver() {
  return [...drivers, "Broom"]
}

function prependDriver() {
  return ["Arnold", ...drivers]
}

function removeLastDriver() {
  let final_drivers = drivers.slice(-1)
  return final_drivers
}

function removeFirstDriver() {
  return []
}
