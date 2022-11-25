export function getActiveCount(arr: { completed: boolean }[]): number {
  const count = arr.filter((el: { completed: boolean }) => (el.completed ? el : null));
  return count.length;
}
