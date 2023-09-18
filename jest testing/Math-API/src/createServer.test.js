const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
 
describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });
 
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /subtrack', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtrack');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); 
      expect(spySubtract).toBeCalledWith(a, b);
    });
  })

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multytion result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(96); 
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  })

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is devidetion result of a and b correctly', async () => {
      // Arrange
      const a = 16;
      const b = 8;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(2); 
      expect(spyDivide).toBeCalledWith(a, b);
    });
  })
});