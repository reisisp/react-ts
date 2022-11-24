export function countActive(arr: { isActive: boolean }[]) {
  const count = arr.filter((el) => (el.isActive ? el : null));
  return count;
}
