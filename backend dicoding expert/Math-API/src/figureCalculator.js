class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = args;

    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
 
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }
 
  calculateRectangleArea(...args) {
    const [length, width] = args;

    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
 
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = args

    if(args.length !== 3) {
      throw new Error('fungsi harus menerima 3 parameter')
    }

    if(typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
      throw new Error('fungsi harus menerima argument dengan type number')
    }

    const side =  this._mathBasic.add(sideA, sideB)
    return this._mathBasic.add(side, base)
   }
  calculateTriangleArea(...args) {
    const [base, height] = args

    if(args.length !== 2) {
      throw new Error('fungsi hanya menerima 2 parameter')
    }

    if(typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('fungsi hanya menerima parameter number')
    }

    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2)
   }
}
 
module.exports = FigureCalculator;