export function Havel(n: number[]): boolean {
    const step = n.length;
    const count = n.filter(x => x % 2 === 1).length;

    for (let i = 0; i < step; i++) {
        if (n[i] >= n.length || n[i] > 2 * (n.length - 1) || n[i] < 0 || count % 2 === 1) {
            return false;
            break;
        }
    }

    return true;
}

export function Hakimi(sequence: number[]): any {
    sequence.sort((a, b) => b - a);
    const array = [];
    const step = sequence[0];
    const minIdx = sequence.length;

    if (minIdx > 1 && Havel(sequence)) {
        for (let i = 0; i < step; i++) {
            array.push(sequence.slice(1)[i] - 1);
        }

        if (array.length === 1) {
            sequence[1] = array[0];
            return Hakimi(sequence.slice(1));
        } else {
            sequence.splice(1, array.length, ...array);
            return Hakimi(sequence.slice(1));
        }
    } else {
        return Havel(sequence);
    }
}

console.log(Hakimi([3, 3, 3, 1]));