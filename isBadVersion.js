/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) return isBadVersion(n);

        let min = 1;
        let max = n;
        let mid;

        while (min <= max) {
            mid = min + Math.floor((max - min) /2);
            let midIsBad = isBadVersion(mid);
            if (midIsBad) {
                let midMinusOneIsBad = isBadVersion(mid - 1);
                if (!midMinusOneIsBad) {
                    return mid;
                }
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }
    };
};