const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers list and an integer key,
 * remove all elements from list list that have a value equal to key.
 *
 * @param {List} list
 * @param {Number} key
 * @return {List}
 *
 * @example
 * For list = [3, 1, 2, 3, 4, 5] and key = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, key) {

  if (list !== null) {
    if (list.next) {
      if (list.value !== key) {
        list.next = removeKFromList(list.next, key);
      } else {
        list = list.next;
        list = removeKFromList(list, key);
      }
    } else {
      if (list.value === key) list = null;
    }
  } else {
    return list;
  }
  return list;
}

module.exports = {
  removeKFromList
};
