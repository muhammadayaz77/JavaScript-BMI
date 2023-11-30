// ---------(DATA # 01)----------
// Ali Data # 1
console.log("-----<(Ali Data # 01)>-----");
let aliWeight1 = 92;
let aliHeight1 = 1.95;
console.log("Ali Weight is "+aliWeight1);
console.log("Ali Height is "+aliHeight1);
console.log("\n");
let aliBMI1;
aliBMI1 = aliWeight1/(aliHeight1*aliHeight1);
console.log("BMI result of 'Ali' is "+aliBMI1);
console.log("\n");
console.log("BMI result of Ali according to standard BMI category is \n'Normal Weight'");
console.log("\n");
console.log("\n");

// Waseem Data # 1
console.log("----<(Waseem Data # 01)>-----");
console.log("\n");
let WaseemWeight1 = 78;
let WaseemHeight1 = 1.69;
console.log("Waseem Weight is "+WaseemWeight1);
console.log("Waseem Height is "+WaseemHeight1);
console.log("\n");
let WaseemBMI1;
WaseemBMI1 = WaseemWeight1/(WaseemHeight1*WaseemHeight1);
console.log("BMI result of 'Waseem' is "+WaseemBMI1);
console.log("\n");
console.log("BMI result of Waseem according to standard BMI category is \n'Over Weight'");

console.log("\n");
// Compare BMI 
console.log("----(BMI Comparison)----");
let WaseemHigherBMI;
WaseemHigherBMI = WaseemBMI1>aliBMI1;
if(WaseemHigherBMI)
{
    console.log("Waseem has higher BMI than Ali");
}
else
{
    console.log("Waseem has low BMI than Ali");
}
console.log("\n");
console.log("---------<()>-----------");

console.log("\n");


// ---------(DATA # 02)----------
// Ali Data # 2
console.log("-----<(Ali Data # 02)>-----");
let aliWeight2 = 85;
let aliHeight2 = 1.76;
console.log("Ali Weight is "+aliWeight2);
console.log("Ali Height is "+aliHeight2);
console.log("\n");
let aliBMI2;
aliBMI2 = aliWeight2/(aliHeight2*aliHeight2);
console.log("BMI result of 'Ali' is "+aliBMI2);
console.log("\n");
console.log("BMI result of Ali according to standard BMI category is \n'Over Weight'");
console.log("\n");
console.log("\n");
// Waseem Data # 2
console.log("----<(Waseem Data # 02)>-----");
let WaseemWeight2 = 95;
let WaseemHeight2 = 1.88;
console.log("Waseem Weight is "+WaseemWeight2);
console.log("Waseem Height is "+WaseemHeight2);
console.log("\n");
let WaseemBMI2;
WaseemBMI2 = WaseemWeight2/(WaseemHeight2*WaseemHeight2);
console.log("BMI result of 'Waseem' is "+WaseemBMI2);
console.log("BMI result of Waseem according to standard BMI category is \n'Over Weight'");

console.log("\n");
// Compare BMI 
console.log("----(BMI Comparison)----");
let WaseemHigherBMI2;
WaseemHigherBMI2 = WaseemBMI2>aliBMI2;
if(WaseemHigherBMI2)
{
    console.log("Waseem has higher BMI than Ali");
}
else
{
    console.log("Waseem has low BMI than Ali");
}