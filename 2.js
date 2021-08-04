var library=[
    {
        author:'Bill Gates',
        title:'The Road Ahead',
        readingstatus:true
    },
    {
        author:'Steve Jobs',
        title:'Walter Isaacson',
        readingstatus:'true'
    },
    {
        author:'Suzanne Collins',
        title:'Mockingjay:The Final Book of The Hungrer Games',
        readingstatus:false
    }
];
for(var i=0; i<library.length; i++)
{
    var book="'" + library[i].title +"'" +'by' + library[i].author +".";
    if(library[i].readingstatus)
    {
        console.log("Already read" + book) ;
    }
    else
    {
        console.log("you still need to read" + book);
    }
}    

/* output:
 Already read'The Road Ahead'byBill Gates.
 Already read'Walter Isaacson'bySteve Jobs.
 you still need to read'Mockingjay:The Final Book of The Hungrer Games'bySuzanne Collins.
*/