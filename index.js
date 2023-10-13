const LinkList = () => {
    let head = null;
    let length = 0;

    const Error = () => { 
        return "no linked list found yet"; 
    }

    const append = (value) => {
        let node = NodeInsert(value);

        if (head === null) {
            head = node;
        } else {
            let current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    const prepend = (value) => {
        let node = NodeInsert(value);

        if (head === null) {
            head = node;
        } else {
            let current = head;
            node.next = current;
            head = node;
        }
        length++;
    }

    const size = () => { return length };

    // Return first node in list
    const headNode = () => {
        if (head === null) {
            return Error();
        } else {
            return head;
        }
    }

    const tail = () => {
        if (head === null) {
            return Error();
        } else {
            let current = head;
            while (current.next != null) {
                current = current.next;
            }
            return current;
        }
    }

    const at = (index) => {
        if (head === null) {
            return Error();
        } else {
            let current = head;
            for (let i=0; i<index; i++) {
                 if (current.next === null) {
                     return "item at that index does not exit";
                 } else {
                    current = current.next;
                 }
            }
            return current;
        } 
    }

    const pop = () => {
        if (head === null) {
            return Error();
        } else if (length === 1) {
            head = null;
            length = 0;
        } else {
            let current = head;
            while (current.next.next != null) {
                current = current.next;
            }
            current.next = null;
            length--;
        }
    }

    const contains = (value) => {
        if (head === null) {
            return Error();
        } else {
            let current = head;
            while (current.next != null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            if (current.value != value) {
                return false;
            } else return true;
        }
    }

    const find = (value) => {
        if (head === null) {
            return Error();
        } else {
            let current = head;
            let index = 0;
            while (current.next != null) {
                if (current.value === value) {
                    return index;
                }
                index++;
                current = current.next;
            }
            if (current.value != value) {
                return "value cannot found.";
            } else return index;
        }
    }

    const toString = () => {
        if (head === null) {
            return Error();
        } else {
            let current = head;
            let str = "";
            while (current.next != null) {
                str = str + `( ${current.value} ) -> `;
                current = current.next;
            }
            str = str + `( ${current.value} ) -> null`;
            return str;
        }
    }

    return {append, prepend, size, headNode, tail, at, pop, contains, find, toString};
};

const NodeInsert = (value) => {
    if (value) {
        value = value;
    } else {
        value = null;
    }
    next = null;
    return {value, next};
};

const linkedList = LinkList();