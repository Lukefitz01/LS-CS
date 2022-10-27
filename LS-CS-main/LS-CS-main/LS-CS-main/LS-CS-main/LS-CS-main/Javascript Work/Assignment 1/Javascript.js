//Circle
const P = 3.14 ;
let r = 1;
let r2 = r**2;

let Circle_A = r2*P ;

console.log(Circle_A);

//rectangle

let f = 2;
let w = 1;

let Re_A = f*w;
console.log(Re_A);

//Triangle 1

let b = 2;
let h = 2;
let tr_a = 0.5*b*h;

console.log(tr_a);

//Triangle 2

let tr2_a = 2;
let tr2_b = 2;

let asq = tr2_a*tr2_a;
let bsq = tr2_b*tr2_b;

let tr2_sum1 = asq + bsq;

let ans_tr2 = Math.sqrt(tr2_sum1);

console.log(ans_tr2);

//cube

let cub_l = 3;
let cub_w = 2;
let cub_h = 1;

let ans_cub = cub_l*cub_w*cub_h;
console.log(ans_cub);

// Cylinder

let cyl_h = 4 ;
let cyl_r = 4;

let cyl_rsq = cyl_r * cyl_r;

let cyl_V = cyl_h*P*cyl_rsq;

console.log(cyl_V);


// Sphere

let sum11 = 4/3;
let sph_r = 2;
let sph_r3 = sph_r*sph_r*sph_r;

let sph_V = sum11*P*sph_r3;

console.log(sph_V);
