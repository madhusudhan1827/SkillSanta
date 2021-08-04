const gimli=
{
    name:"Gimli",
    rece:"dwarf",
    weapon:"axe",
    greet: function()
    {
        return`hi,my name is ${this.name}!`;
    },
};
const S=Object.create(gimli);
console.log(S.greet());

