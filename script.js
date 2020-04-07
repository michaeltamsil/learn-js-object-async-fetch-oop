const manusia = {
    name: 'hartono',
    lastName: 'gokil',
    //getFullName: function(){
    getFullName(){
        manusia.name
        return `${this.name} ${this.lastName}`
    },
    changeName(namaYgDiubah){
        this.name = namaYgDiubah;
    },
    setAnak(...args){
        debugger;
        let anakArray = [];
        for (let anak of args ){
            anakArray.push(anak);
        }
        this.anak = anakArray;
    },
    getAnak(){
        debugger;
        return this.anak;
    }
}

console.log(manusia.getFullName());

let namaLengkap = manusia.getFullName();
console.log(namaLengkap);

manusia.changeName('budi');
namaLengkap = manusia.getFullName();
console.log(namaLengkap);

// Date function

const date = new Date();

const tanggal = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
console.log(`tanggal hari ini adalah : ${tanggal}`);

// destructure
// const name = manusia.name;
// const lastName = manusia.lastName;



const { name, lastName } =  manusia;
console.log(`${name} ${lastName}`);

// learn DOM event listener
document.querySelector('#clickMe').addEventListener('click', (event) => {
    const stringHTML = '<button class="btn btn-danger">Awas</button>';
    document.getElementById('content').innerHTML += stringHTML
    //window.alert('saya terklick')
});