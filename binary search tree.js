function bst() {
    this.root = null;
}

bst.prototype.newnode = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};

bst.prototype.add = function(value) {
    var current = this.newnode(value);
    if (!this.root) {
        this.root = current;
    } else {
        this.insert(current);
    }
    return this;
};

bst.prototype.insert = function(current) {
    var value = current.value;
    var find = function(node) {
        if (value === node.value) {
            return;
        }else if (value > node.value) {
            if (!node.right) {
                node.right = current;
                return;
            } else
                find(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = current;
                return;
            } else
                find(node.left);
        }
    };
    find(this.root);
};



bst.prototype.minimum = function() {
    var node = this.root;
    var find = function(node) {
        return !node.left ? node.value : find(node.left);
    };
    return find(node);
};

    bst.prototype.maximum = function() {
        var node = this.root;
        var find = function(node) {
            return !node.right ? node.value : find(node.right);
        };
        return find(node);
    };

        bst.prototype.heightt = function(node) {
             if(!node) return 0;
             function height(node){
             var leftHeight = height(node.left);
             var rightHeight = height(node.right);
             return Math.max(leftHeight, rightHeight) + 1;
            }
        }

