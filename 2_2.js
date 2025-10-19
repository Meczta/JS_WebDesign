function groupArrayByTypes(arr) {
    const grouped = {}; 

    function process(currentArray) {
        for (const element of currentArray) {
            if (Array.isArray(element)) {
                process(element);
            } else {
                const type = typeof element;
                if (!grouped[type]) {
                    grouped[type] = [];
                }
                grouped[type].push(element);
            }
        }
    }

    process(arr);

    return Object.values(grouped);
}

const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const arrNew = groupArrayByTypes(arr);

console.log(arrNew);