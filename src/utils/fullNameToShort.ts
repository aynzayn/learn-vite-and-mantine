export function fullNameToShort(fullName){
  return fullName.trim().split(' ').map((str, idx) => !idx ? str : `${str[0]}.`).join(' ').replace('. ', '.');
}
