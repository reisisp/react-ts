export function countActive(arr: { completed: boolean }[]) {
  const count = arr.filter((el: { completed: boolean }) => (el.completed ? el : null));
  return count.length;
}
