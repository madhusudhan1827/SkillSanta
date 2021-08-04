const name=
{
    firstName:'philip',
    lastName:'fry'
};
const details=
{
    job:'delivery boy',
    employer:'planet expressor'
};
const root={...name, ...details};
console.log(root);


/* output:
 {
  firstName: 'philip',
  lastName: 'fry',
  job: 'delivery boy',
  employer: 'planet expressor'
} */
