'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 4000;

class FirstCallAudit extends Audit {
    static get meta() {
        return {
            category: 'First call',
            name: 'card-audit2',
            description: 'Time to pwap called',
            failureDescription: 'App was not called',
            helpText: 'Used to measure time of first call' +
            ' card is shown.',

            requiredArtifacts: ['FirstCall']
        };
    }

    static audit(artifacts) {
        const calledTime = artifacts.FirstCall;

        const timetocall = calledTime <= MAX_CARD_TIME;

        return {
            rawValue: calledTime,
            score: timetocall
        };
    }
}

module.exports = FirstCallAudit;
