import { DeleteCategory } from './utils/magicQuery';

// test('Add User', async () => {
//   try {
//     await expect(AddUserTest()).resolves.toBeCalledWith(expect.anything());
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

// test('Delete User', async () => {
//   try {
//     await expect(DeleteUser()).resolves.toBe('done');
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

test('Delete Category Word', async () => {
  try {
    await expect(DeleteCategory()).resolves.toBe('done');
  } catch (e) {
    expect(e).toMatch('failed');
  }
});
