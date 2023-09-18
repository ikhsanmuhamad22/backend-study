const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('it should contains add, subtract, multiply and divide', () => {
    expect(MathBasic).toHaveProperty('add')
    expect(MathBasic).toHaveProperty('subtrack')
    expect(MathBasic).toHaveProperty('multiply')
    expect(MathBasic).toHaveProperty('divide')
    expect(MathBasic.add).toBeInstanceOf(Function)
    expect(MathBasic.subtrack).toBeInstanceOf(Function)
    expect(MathBasic.multiply).toBeInstanceOf(Function)
    expect(MathBasic.divide).toBeInstanceOf(Function)
  })

  describe('A add testing', () => {
    it('A method should be have 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError()
      expect(() => MathBasic.add(1)).toThrowError()
      expect(() => MathBasic.add(1, 2 ,3)).toThrowError()
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError()
    })
    it('A should given err when the type args its not number', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError()
      expect(() => MathBasic.add(true, [])).toThrowError()
      expect(() => MathBasic.add(null, false)).toThrowError()
    })
    it('A should return equal from a & b when given two params', () => {
      expect(MathBasic.add(2, 2)).toEqual(4)
      expect(MathBasic.add(10, 3)).toEqual(13)
      expect(MathBasic.add(15, 4)).toEqual(19)
    })
  })

  describe('A subtrack testing', () => {
    it('A method should be have 2 parameters', () => {
      expect(() => MathBasic.subtrack()).toThrowError()
      expect(() => MathBasic.subtrack(1)).toThrowError()
      expect(() => MathBasic.subtrack(1, 2 ,3)).toThrowError()
      expect(() => MathBasic.subtrack(1, 2, 3, 4)).toThrowError()
    })
    it('A should given err when the type args its not number', () => {
      expect(() => MathBasic.subtrack('1', '2')).toThrowError()
      expect(() => MathBasic.subtrack(true, [])).toThrowError()
      expect(() => MathBasic.subtrack(null, false)).toThrowError()
    })
    it('A should return equal from a & b when given two params', () => {
      expect(MathBasic.subtrack(2, 2)).toEqual(0)
      expect(MathBasic.subtrack(10, 3)).toEqual(7)
      expect(MathBasic.subtrack(15, 4)).toEqual(11)
    })
  })

  describe('A multiply testing', () => {
    it('A method should be have 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError()
      expect(() => MathBasic.multiply(1)).toThrowError()
      expect(() => MathBasic.multiply(1, 2 ,3)).toThrowError()
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError()
    })
    it('A should given err when the type args its not number', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrowError()
      expect(() => MathBasic.multiply(true, [])).toThrowError()
      expect(() => MathBasic.multiply(null, false)).toThrowError()
    })
    it('A should return equal from a & b when given two params', () => {
      expect(MathBasic.multiply(2, 2)).toEqual(4)
      expect(MathBasic.multiply(10, 3)).toEqual(30)
      expect(MathBasic.multiply(15, 4)).toEqual(60)
    })
  })

  describe('A divide testing', () => {
    it('A method should be have 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError()
      expect(() => MathBasic.divide(1)).toThrowError()
      expect(() => MathBasic.divide(1, 2 ,3)).toThrowError()
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError()
    })
    it('A should given err when the type args its not number', () => {
      expect(() => MathBasic.divide('1', '2')).toThrowError()
      expect(() => MathBasic.divide(true, [])).toThrowError()
      expect(() => MathBasic.divide(null, false)).toThrowError()
    })
    it('A should return equal from a & b when given two params', () => {
      expect(MathBasic.divide(2, 2)).toEqual(1)
      expect(MathBasic.divide(10, 2)).toEqual(5)
      expect(MathBasic.divide(15, 5)).toEqual(3)
    })
  })
})

