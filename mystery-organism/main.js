// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creates a mysterious organism with a number and dna strand
function pAequorFactory(num, dna){
  if (dna.length !== 15 || typeof(num) !== 'number'){
    return 'Error: Organism must have a number and 15 bases.';
  } 
  return{ //Object returned (DNA)
    specimenNum: num,
    dna: dna,
    mutate(){ //Mutates one DNA point to a different type
      let num = Math.floor(Math.random() * 15);

      let oldBase = this.dna[num];
      let newBase;
      do {
        newBase = returnRandBase();
        this.dna[num] = newBase;
      } while (newBase == oldBase);
      return this.dna;
    },
    compareDNA(other){ //Compares DNA of self to others of same species. returns % of identical genes
      let counter = 0;
      for (let i = 0; i < 15; i++){
        if (this.dna[i] == other.dna[i]){
          counter++;
        }
      }
      sum = ((counter / 15) * 100).toFixed(2); 
      return `specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${sum}% DNA in common.`;
    },
    willLikelySurvive(){
      let counter = 0;

      for (let i = 0; i < 15; i++){
        if (this.dna[i] == 'C' || this.dna[i] == 'G'){
          counter++;
        }
      }
      if (((counter / 15) * 100) >= 60){
        return true;
      } else return false;
    }
  }
}

// Creates an array of 30 organisms that will likely survive
let orgCounter= 1;
let strong30 = [];
do {
  let organism = pAequorFactory(orgCounter, mockUpStrand());
  if (organism.willLikelySurvive() == true){
    strong30.push(organism);
  }
} while (strong30.length < 30);
