const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor() {
    this.nRoot = null;
  }

  root() {
    return this.nRoot;
  }

  add(data) {
    this.nRoot = addW(this.nRoot, data);

    function addW(usel, data) {
      if (!usel) return new Node(data);
      if (usel.data === data) return usel;
      data < usel.data
        ? usel.left = addW(usel.left, data)
        : usel.right = addW(usel.right, data);
      return usel;
    }
  }

  has(data) {
    return searchW(this.nRoot, data);

    function searchW(usel, data) {
      if (!usel) return false;
      if (usel.data === data) return true;
      return data < usel.data
        ? searchW(usel.left, data)
        : searchW(usel.right, data);
    }
  }

  find(data) {
    return findW(this.nRoot, data);

    function findW(usel, data) {
      if (!usel) return null;
      if (usel.data === data) return usel;
      return data < usel.data
        ? findW(usel.left, data)
        : findW(usel.right, data);
    }
  }

  remove(data) {
    this.root = rem(this.nRoot, data)

    function rem(usel, data) {
      if (!usel) return null;
      if (data < usel.data) {
        usel.left = rem(usel.left, data);
        return usel;
      } else if (data > usel.data) {
        usel.right = rem(usel.right, data);
        return usel;
      } else {
        if (!usel.left && !usel.right) return null;
        if (!usel.left) {
          usel = usel.right;
          return usel;
        }
        if (!usel.right) {
          usel = usel.left;
          return usel;
        }
        let right = usel.right;
        while (right.left) {
          right = right.left;
        }
        usel.data = right.data;
        usel.right = rem(usel.right, right.data);
        return usel;
      }
    }
  }

  min() {
    if (!this.nRoot) return null;
    let usel = this.nRoot;
    while (usel.left) {
      usel = usel.left;
    }
    return usel.data;
  }

  max() {
    if (!this.nRoot) return null;
    let usel = this.nRoot;
    while (usel.right) {
      usel = usel.right;
    }
    return usel.data;
  }
}

module.exports = {
  BinarySearchTree
};