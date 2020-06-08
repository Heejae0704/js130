/* eslint-disable max-lines-per-function */
function translate(RNA) {
  if (!RNA) return [];
  let codonArr = [];
  let rnaArr = RNA.split("");
  for (let idx = 0; idx < RNA.length; idx += 3) {
    codonArr.push(rnaArr.splice(0, 3).join(""));
  }
  let proteinArr = codonArr.map((codon) => {
    if (codon === "AUG") return "Methionine";
    if (codon === "UUU" || codon === "UUC") return "Phenylalanine";
    if (codon === "UUA" || codon === "UUG") return "Leucine";
    if (["UCU", "UCC", "UCA", "UCG"].includes(codon)) return "Serine";
    if (codon === "UAU" || codon === "UAC") return "Tyrosine";
    if (codon === "UGU" || codon === "UGC") return "Cysteine";
    if (codon === "UGG") return "Tryptophan";
    if (["UAA", "UAG", "UGA"].includes(codon)) return "STOP";
    throw new Error("Invalid codon");
  });
  if (proteinArr.indexOf("STOP") !== -1) {
    return proteinArr.splice(0, proteinArr.indexOf("STOP"));
  } else {
    return proteinArr;
  }
}

module.exports = translate;
