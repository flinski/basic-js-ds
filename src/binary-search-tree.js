const { NotImplementedError } = require('../extensions/index.js')
const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootNode = null
	}

	root() {
		return this.rootNode
	}

	create(data, node) {
		if (data < node.data) {
			if (node.left === null) {
				node.left = new Node(data)
				return
			}
			this.create(data, node.left)
		} else if (data > node.data) {
			if (node.right === null) {
				node.right = new Node(data)
				return
			}
			this.create(data, node.right)
		}
	}

	add(data) {
		if (this.rootNode === null) {
			this.rootNode = new Node(data)
		} else {
			this.create(data, this.rootNode)
		}
	}

	has(data) {
		if (this.rootNode === null) {
			return false
		}
		let node = this.rootNode
		while (true) {
			if (data < node.data) {
				if (node.left === null) {
					return false
				}
				node = node.left
			} else if (data > node.data) {
				if (node.right === null) {
					return false
				}
				node = node.right
			} else {
				return true
			}
		}
	}

	find(data) {
		if (this.rootNode === null) {
			return null
		}
		let node = this.rootNode
		while (true) {
			if (data < node.data) {
				if (node.left === null) {
					return null
				}
				node = node.left
			} else if (data > node.data) {
				if (node.right === null) {
					return null
				}
				node = node.right
			} else {
				return node
			}
		}
	}

	remove(data) {}

	min() {
		if (this.rootNode === null) {
			return null
		}
		let minNode = this.rootNode
		while (minNode.left !== null) {
			minNode = minNode.left
		}
		return minNode.data
	}

	max() {
		if (this.rootNode === null) {
			return null
		}
		let maxNode = this.rootNode
		while (maxNode.right !== null) {
			maxNode = maxNode.right
		}
		return maxNode.data
	}
}

module.exports = {
	BinarySearchTree,
}
