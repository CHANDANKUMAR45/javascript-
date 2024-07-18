const accountId=1444553
let accountEmail="chandan@google.com"
var accountPassword="12345"
acountCity="Jaipur"

//accountId=2
accountEmail="cy@gmail.com"
accountPassword="1425142"
acountCity="Nawada"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountId,accountEmail,accountPassword,acountCity])
