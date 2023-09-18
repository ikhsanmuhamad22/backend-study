const MathBasic = {
  add: (...args) => { 
    if(args.length !== 2) {
      throw new Error('should have 2 arguments')
    }

    const [a, b] = args

    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('argument must be number')
    }

    return a + b;
  },
  subtrack: (...args) => { 
    if(args.length !== 2) {
      throw new Error('should have 2 arguments')
    }

    const [a, b] = args

    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('argument must be number')
    }

    return a - b;
    
  },
  multiply: (...args) => { 
    if(args.length !== 2) {
      throw new Error('should have 2 arguments')
    }

    const [a, b] = args

    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('argument must be number')
    }

    return a * b;
    
  },
  divide: (...args) => { 
    if(args.length !== 2) {
      throw new Error('should have 2 arguments')
    }

    const [a, b] = args

    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('argument must be number')
    }

    return a / b;
    
  },

}

module.exports = MathBasic