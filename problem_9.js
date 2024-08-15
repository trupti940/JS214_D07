// Question 1
function codingscorecheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((sum, mark) => sum + mark, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you haven't cleared the coding round.");
            }
        }, 2000); // 2-second delay
    });
}


// Question 2
function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((sum, mark) => sum + mark, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you haven't cleared the HUKUMU round.");
            }
        }, 2000); // 2-second delay
    });
}

// Question 3
function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const combinedAverage = (averageCodingScore + averageHukumuScore) / 2;

            if (combinedAverage >= cutoff) {
                resolve(combinedAverage);
            } else {
                reject("Sorry, you haven't cleared the final cutoff.");
            }
        }, 2000); // 2-second delay
    });
}

// Example

const codingMarks = [80, 85, 90, 70, 95];
const hukumMarks = [75, 80, 78, 82, 85];
const codingCutoff = 80;
const hukumCutoff = 75;
const finalCutoff = 78;

// Check coding score
codingscorecheck(codingMarks, codingCutoff)
    .then(averageCodingScore => {
        console.log(`Coding round passed with an average score of: ${averageCodingScore}`);
        // Return both the averageCodingScore and the promise of HUKUMUScoreCheck
        return HUKUMUScoreCheck(hukumMarks, hukumCutoff).then(averageHukumuScore => {
            return { averageCodingScore, averageHukumuScore };
        });
    })
    .then(scores => {
        const { averageCodingScore, averageHukumuScore } = scores;
        console.log(`HUKUMU round passed with an average score of: ${averageHukumuScore}`);
        return unitMovementCheck(averageCodingScore, averageHukumuScore, finalCutoff);
    })
    .then(finalAverage => {
        console.log(`Final round passed with an average score of: ${finalAverage}`);
    })
    .catch(error => {
        console.error(error);
    });
