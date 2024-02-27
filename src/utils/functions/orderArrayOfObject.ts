interface StringNumberObject {
  [key: string]: string | number;
}

export function orderArrayOfObject({arr, key, isAsc}:{arr: any[], key: string, isAsc: boolean}) {
  return arr.sort((a, b) => {
    const valorA = typeof a[key] === 'number' ? a[key] : String(a[key]);
    const valorB = typeof b[key] === 'number' ? b[key] : String(b[key]);
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      return isAsc ? valorA - valorB : valorB - valorA;
    } else {
      return isAsc ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
    }
  });
}
