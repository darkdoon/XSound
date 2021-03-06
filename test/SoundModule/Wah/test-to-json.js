'use strict';

import Wah from '../../../src/SoundModule/Wah';

describe('Wah TEST', () => {
    describe('Wah#toJSON', () => {
        const wah = new Wah(audiocontext, 1024);

        it('should return JSON', () => {
            expect(wah.toJSON()).toEqual('{"state":false,"cutoff":350,"depth":0,"rate":0,"resonance":1}');
        });
    });
});
