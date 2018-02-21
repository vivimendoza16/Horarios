'use strict';

const Gatherer = require('lighthouse').Gatherer;

class FirstCall extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.FirstAppCall')
            .then(FirstAppCall => {
                if (!FirstAppCall) {

                    throw new Error('Unable to find the first app call');
                }
                return FirstAppCall;
            });
    }
}

module.exports = FirstCall;
