import { Game } from './game';
jest.mock('./game');
describe('Test', ()=> {
    it ("Checks the test fine execution", () => {
        expect(true).toBeTruthy()
    });
});
// console.log(Game);
// describe('Game', () => {
//     it ("Initializes game with empty array of balls", ()=> {
//         const tempGame = new Game({});
//         expect(Game).toHaveBeenCalledTimes(1);
//         // expect(tempGame.balls).toEqual([]);
//     });
// });