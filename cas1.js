/*"5" + 3 = 53
"5" - 3 = 2
5 + "3" = 53
true + 1 = 2
"a" + null = anull
[] + [] = vide
[] + {} = [object Object]*/

null || "défaut";     
0 || "défaut";        
"" || "défaut";       
null ?? "défaut";     
0 ?? "défaut";        
"" ?? "défaut";


const v = "" ?? "défaut"

console.log(null || "défaut",0 || "défaut","" || "défaut",null ?? "défaut",0 ?? "défaut","" ?? "défaut")