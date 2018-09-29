const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
      var res = isRealString(4);
      expect(res).toBe(false);
    });

    it('should reject a string with only spaces', () => {
      var nonStr = '   ';
      var res = isRealString('    ');
      expect(res).toBe(false);
    });

    it('should allow a string with non-space characters', () => {
      var res = isRealString('  abc ');
      expect(res).toBe(true);
    });
});


// socket.on('join', (params, callback) => {
//   if(!isRealString(params.name) || !isRealString(params.room)){
//     callback('Name and room name are required');
//   }
//     callback();
// });
