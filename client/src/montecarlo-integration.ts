interface monteCarloIntegration {
    (radius: number, dim: number): number;
  }

export const estimateVolume: monteCarloIntegration = (radius, dim) => {
    let count = 0;
    let sum = 0;

    for (let x = 0; x < 100000; x++) {
        for (let i = 0; i < dim; i++) {
            let randomValue = -(radius) + (radius - (-(radius))) * Math.random();
            // console.log(randomValue);
            sum += randomValue * randomValue;
        }
        if (sum - (radius * radius) < 0) {
            count += 1;
        }
        sum = 0;
    }
    return ((count / 100000) * (Math.pow((radius + radius), dim)));
}