import { CORRECT, INCORRECT, UNVISITED } from './../constants/SnippetStates';
import _ from 'lodash';

export const getIndex = (typos) => typos.findIndex(character => character === UNVISITED);

export const getAccuracy = (typos) => {
    const occurences = _.countBy(typos);
    const c = occurences[CORRECT] || 0;
    const i = occurences[INCORRECT] || 0;
    if(i === 0 && c === 0)
        return 0;
    const percentage = 100 * (c / (c + i));
    return Math.round(percentage);
};

export const getWordsPerMinute = (beginTime, endTime, snippet) => {
    const totalTime = endTime - beginTime;
    return totalTime === 0 ? 0 : Math.round(10000 * (snippet.length - 1) / (5 * totalTime))
};