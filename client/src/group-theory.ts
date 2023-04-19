export function root(eqn: string, x: number, y: number): number {
    let eqnClean = eqn.replace("x", "*" + y.toString());
    let str1 = " ";

    for (let i = 0; i < eqnClean.length; i++) {
        if (eqnClean[i] === "*" && eqnClean[i - 1] === " ") {
            str1 += "";
        } else if (eqnClean[i] === "^") {
            str1 += "**";
        } else {
            str1 += eqnClean[i];
        }
    }

    if (str1[1] === "*") {
        return eval(str1.slice(2)) % x;
    } else {
        return eval(str1.slice(1)) % x;
    }
}

export const poly = (a: string, b: number): number[] => {
    let l: number[] = [];
    for (let i = 0; i < b; i++) {
        let eqnClean = a.replace(/x/g, "*" + i.toString());
        let str1 = " ";
        for (let j = 0; j < eqnClean.length; j++) {
            if (eqnClean[j] === "*" && eqnClean[j - 1] === " ") {
                str1 += "";
            } else if (eqnClean[j] === "^") {
                str1 += "**";
            } else {
                str1 += eqnClean[j];
            }
        }
        if (str1[1] === "*") {
            if (eval(str1.slice(2)) % b === 0) {
                l.push(i);
            }
        } else {
            if (eval(str1.slice(1)) % b === 0) {
                l.push(i);
            }
        }
    }
    return l;
};

/* console.log(poly("x^2 + 4x + 3", 5));  */