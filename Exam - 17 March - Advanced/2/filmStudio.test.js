let FilmStudio = require('./filmStudio');

let expect  = require('chai').expect;

describe('testing FilmStudio', function() {
    let studio;
    beforeEach(function() {
        studio = new FilmStudio('boyana');
    });

    describe('testing constructor', function() {
        it('testing for arr', function() {
            expect(studio.films).to.deep.equal([]);
        });
        it('testing for name', function() {
            expect(studio.name).to.equal('boyana');
        });
        it('testing for name', function() {
            expect(studio.name).to.not.equal('asd');
        });
    });

    describe('testing makeMovie', function() {
        it('testing with wrong args', function() {
            expect(() => studio.makeMovie('one')).to.throw('Invalid arguments count');
        });
        it('testing with wrong args', function() {
            expect(() => studio.makeMovie(true)).to.throw('Invalid arguments count');
        });
        it('testing with wrong args', function() {
            expect(() => studio.makeMovie([])).to.throw('Invalid arguments count');
        });

        it('testing with wrong args', function() {
            expect(() => studio.makeMovie('one', true)).to.throw('Invalid arguments');
        });

        it('testing with wrong args', function() {
            expect(() => studio.makeMovie(1, 2)).to.throw('Invalid arguments');
        });

        it('testing with wrong args', function() {
            expect(() => studio.makeMovie('one', {})).to.throw('Invalid arguments');
        });

        it('testing with right args', function() {
            expect(studio.makeMovie('avg', ['test1', 'test2'])).to.deep.equal({filmName: 'avg', filmRoles: [{role: 'test1', actor: false}, {role: 'test2', actor: false}] });
        });

        it('testing with right args', function() {
            expect(studio.makeMovie('avg', ['test1', 'test2']).filmRoles[0].actor).to.equal(false);
        });

        it('testing with right args', function() {
            expect(studio.makeMovie('avg', ['test1', 'test2']).filmRoles[0].role).to.equal('test1');
        });

        it('testing with right args', function() {
            expect(studio.makeMovie('avg', ['test1', 'test2'])).to.deep.equal({filmName: 'avg', filmRoles: [{role: 'test1', actor: false}, {role: 'test2', actor: false}] });
            expect(studio.makeMovie('avg', ['test1', 'test2'])).to.deep.equal({filmName: 'avg 2', filmRoles: [{role: 'test1', actor: false}, {role: 'test2', actor: false}] });
            expect(studio.makeMovie('avg', ['test1', 'test2'])).to.deep.equal({filmName: 'avg 3', filmRoles: [{role: 'test1', actor: false}, {role: 'test2', actor: false}] });

        });
    });

    describe('testing casting', function() {
        it('testing with wrong params', function() {
            expect(studio.films).to.deep.equal([])
        });

        it('testing with wrong params', function() {
            expect(studio.casting(true, [])).to.equal('There are no films yet in boyana.');
        });

        it('testing with wrong params', function() {
            expect(studio.casting(1, '')).to.equal('There are no films yet in boyana.');
        });
        
        it('testing with wrong params', function() {
            expect(studio.casting({}, false)).to.equal('There are no films yet in boyana.');
        });

        it('testing with wrong params', function() {
            expect(studio.casting('gosho', 'gosho')).to.equal('There are no films yet in boyana.');
        });

        it('testing with wrong params', function() {
            expect(studio.casting({}, [1, 2, 3])).to.equal('There are no films yet in boyana.');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            expect(studio.casting('pesho', 'test2')).to.equal('You got the job! Mr. pesho you are next test2 in the avg. Congratz!');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            expect(studio.casting('pesho', 'test1')).to.equal('You got the job! Mr. pesho you are next test1 in the avg. Congratz!');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            expect(studio.casting('pesho', 'test3')).to.equal('pesho, we cannot find a test3 role...');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            expect(studio.casting('pesho', 'test2')).to.equal('You got the job! Mr. pesho you are next test2 in the avg. Congratz!');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('test', ['test1', 'test2']);
            expect(studio.casting('pesho', 'test2')).to.equal('You got the job! Mr. pesho you are next test2 in the test. Congratz!');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            studio.makeMovie('peshovi', ['tony stark', 'test2']);
            expect(studio.casting('pesho', 'tony')).to.equal('pesho, we cannot find a tony role...');
        });

        it('testing with right params but no actor', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            studio.makeMovie('avg', ['test1', 'test3']);
            expect(studio.casting('pesho', 'test3')).to.equal('You got the job! Mr. pesho you are next test3 in the avg 2. Congratz!');
        });
    });


    describe('testing lookForProducer', function() {
        it('testing with wrong params', function() {
            expect(() => studio.lookForProducer(true)).to.throw('true do not exist yet, but we need the money...')
        });
        it('testing with wrong params', function() {
            expect(() => studio.lookForProducer(1)).to.throw('1 do not exist yet, but we need the money...')
        });
        
        it('testing with right params but no movie', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            expect(studio.lookForProducer('avg')).to.equal('Film name: avg\nCast:\nfalse as test1\nfalse as test2\n');
        });

        it('testing with right params but no movie', function() {
            studio.makeMovie('avg', ['test1', 'test2']);
            studio.makeMovie('avg', ['test1', 'test3']);
            studio.casting('avg', 'test3');
            expect(studio.lookForProducer('avg 2')).to.equal('Film name: avg 2\nCast:\nfalse as test1\navg as test3\n');
        });
    });
});