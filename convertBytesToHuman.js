/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  var answer = '';
  if (typeof bytes != 'number') return false;
  if (bytes<0) return false;
  if (bytes >= 1024) {
    bytes = bytes / 1024;
    answer = (Math.round(bytes*100)/100).toString() + ' KB';
    if (bytes >= 1024) {
      bytes = bytes / 1024;
      answer = (Math.round(bytes*100)/100).toString() + ' MB'; 
      if (bytes >= 1024) {
        bytes = bytes / 1024;
        answer = (Math.round(bytes*100)/100).toString() + ' GB'; 
        if (bytes >= 1024) {
          bytes = bytes / 1024;
          answer = (Math.round(bytes*100)/100).toString() + ' TB'; 
          if (bytes >= 1024) {
            bytes = bytes / 1024;
            answer = (Math.round(bytes*100)/100).toString() + ' PB'; 
            if (bytes >= 1024) {
              answer = "number is too big";}
            }
          }
        }
      }
    }
  else {answer = (Math.round(bytes*100)/100).toString() + ' B'}
  return answer
}
