/**
 * LineVision Analytics
 * Detects the maximum number of points sharing the same linear pattern.
 */


/**
 * Calculates Greatest Common Divisor
 */
function calculateGCD(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return Math.abs(a);
}


/**
 * Finds the largest group of points
 * that exist on the same straight line.
 *
 * @param {number[][]} coordinates
 * @returns {number}
 */
function findLargestLinearGroup(coordinates) {
    const totalPoints = coordinates.length;

    if (totalPoints <= 2) {
        return totalPoints;
    }

    let maximumGroup = 0;


    // Use each point as a reference point
    for (let current = 0; current < totalPoints; current++) {

        const slopeFrequency = new Map();
        let currentMaximum = 0;


        for (let target = current + 1; target < totalPoints; target++) {

            let deltaX =
                coordinates[target][0] - coordinates[current][0];

            let deltaY =
                coordinates[target][1] - coordinates[current][1];


            // Handle vertical lines
            if (deltaX === 0) {
                deltaY = 1;
            }

            // Handle horizontal lines
            else if (deltaY === 0) {
                deltaX = 1;
            }

            // Normalize slope ratio
            else {
                if (deltaX < 0) {
                    deltaX = -deltaX;
                    deltaY = -deltaY;
                }

                const divisor = calculateGCD(
                    Math.abs(deltaX),
                    Math.abs(deltaY)
                );

                deltaX /= divisor;
                deltaY /= divisor;
            }


            const slopeKey = `${deltaX}/${deltaY}`;

            const updatedCount =
                (slopeFrequency.get(slopeKey) || 0) + 1;


            slopeFrequency.set(
                slopeKey,
                updatedCount
            );


            currentMaximum =
                Math.max(
                    currentMaximum,
                    updatedCount
                );
        }


        // Add the reference point itself
        maximumGroup =
            Math.max(
                maximumGroup,
                currentMaximum + 1
            );
    }


    return maximumGroup;
}


/**
 * Example Usage
 */

const sampleCoordinates = [
    [1, 1],
    [2, 2],
    [3, 3]
];


console.log(
    "Largest Linear Group:",
    findLargestLinearGroup(sampleCoordinates)
);
