# Examples

### Get the number and name of all players
{
  players {
    number
    name
  }
}

### Get a player with a certain number
{
  player (number: 1) {
    number
    name
    age
    position
  }
}

### Using query variables
query getSinglePlayer ($number: Int!) {
  player (number: $number) {
    number
    name
    age
  }
}

{
  "number": 2
}

### Using fragments
{
  player (number: 2) {
    ...personFields
  }
}

fragment personFields on Player {
  name
  age
}
