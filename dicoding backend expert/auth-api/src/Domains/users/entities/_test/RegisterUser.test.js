const RegisterUser = require('../RegisterUser');

describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // action and assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    const paylad = {
      username: 123,
      fullname: true,
      password: 'abc',
    };

    expect(() => new RegisterUser(paylad)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username contains more than 50 character', () => {
    const paylad = {
      username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
      fullname: 'Dicoding indonesia',
      password: 'abc',
    };

    expect(() => new RegisterUser(paylad)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw error when username contains restricted character', () => {
    const paylad = {
      username: 'dico ding',
      fullname: 'dicoding',
      password: 'abc',
    };

    expect(() => new RegisterUser(paylad)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  });

  it('should create registerUser object correctly', () => {
    // arrange
    const paylaod = {
      username: 'dicoding',
      fullname: 'dicoding indonesia',
      password: 'abc',
    };

    // action
    const { username, fullname, password } = new RegisterUser(paylaod);

    // assert
    expect(username).toEqual(paylaod.username);
    expect(fullname).toEqual(paylaod.fullname);
    expect(password).toEqual(paylaod.password);
  });
});
